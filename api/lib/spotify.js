const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_BASE = "https://api.spotify.com/v1";

const MAX_RETRIES = 3;

function getConfig() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret) {
    throw new Error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET");
  }

  return { clientId, clientSecret, refreshToken };
}

async function parseSpotifyError(response) {
  try {
    const body = await response.json();
    return body?.error?.message ?? response.statusText;
  } catch {
    return response.statusText;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function spotifyFetch(url, accessToken, attempt = 0) {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.status === 429 && attempt < MAX_RETRIES) {
    const retryAfter = Number(response.headers.get("Retry-After") ?? "1");
    const delayMs = (Number.isFinite(retryAfter) ? retryAfter : 1) * 1000 * 2 ** attempt;
    await sleep(delayMs);
    return spotifyFetch(url, accessToken, attempt + 1);
  }

  if (!response.ok) {
    const message = await parseSpotifyError(response);
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export async function refreshAccessToken() {
  const { clientId, clientSecret, refreshToken } = getConfig();

  if (!refreshToken) {
    const error = new Error(
      "Missing SPOTIFY_REFRESH_TOKEN. Visit /api/spotify/auth once to connect Spotify."
    );
    error.status = 503;
    throw error;
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const message = await parseSpotifyError(response);
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data.access_token;
}

export async function exchangeAuthorizationCode(code, redirectUri) {
  const { clientId, clientSecret } = getConfig();

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const message = await parseSpotifyError(response);
    throw new Error(message);
  }

  return response.json();
}

export function buildAuthorizeUrl(redirectUri, state) {
  const { clientId } = getConfig();
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "user-top-read",
    state,
  });

  return `https://accounts.spotify.com/authorize?${params}`;
}

export async function fetchTopTracks(accessToken) {
  const params = new URLSearchParams({
    limit: "5",
    time_range: "short_term",
  });

  return spotifyFetch(`${API_BASE}/me/top/tracks?${params}`, accessToken);
}

export function formatTopTracks(payload) {
  return payload.items.map((track, index) => ({
    rank: index + 1,
    name: track.name,
    artists: track.artists.map((artist) => artist.name).join(", "),
    url: track.external_urls.spotify,
    albumArt: track.album.images[0]?.url ?? null,
  }));
}
