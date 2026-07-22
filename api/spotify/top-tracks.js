import {
  refreshAccessToken,
  fetchTopTracks,
  formatTopTracks,
} from "../lib/spotify.js";

const CACHE_TTL_MS = 14 * 24 * 60 * 60 * 1000;

let cache = {
  payload: null,
  fetchedAt: 0,
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const now = Date.now();
    const cacheValid = cache.payload && now - cache.fetchedAt < CACHE_TTL_MS;

    if (cacheValid) {
      res.setHeader("Cache-Control", "public, max-age=3600");
      return res.status(200).json(cache.payload);
    }

    const accessToken = await refreshAccessToken();
    const tracks = await fetchTopTracks(accessToken);
    const payload = {
      tracks: formatTopTracks(tracks),
      updatedAt: new Date().toISOString(),
      source: "Spotify",
    };

    cache = { payload, fetchedAt: now };

    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(200).json(payload);
  } catch (error) {
    const status = error.status ?? 500;
    return res.status(status).json({
      error: error.message ?? "Failed to fetch top tracks from Spotify",
    });
  }
}
