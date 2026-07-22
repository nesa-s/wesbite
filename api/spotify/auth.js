import { buildAuthorizeUrl } from "../lib/spotify.js";

export default function handler(req, res) {
  const redirectUri =
    process.env.SPOTIFY_REDIRECT_URI ??
    `${req.headers["x-forwarded-proto"] ?? "https"}://${req.headers.host}/api/spotify/callback`;

  const state = crypto.randomUUID();
  const authorizeUrl = buildAuthorizeUrl(redirectUri, state);

  res.writeHead(302, { Location: authorizeUrl });
  res.end();
}
