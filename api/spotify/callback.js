import { exchangeAuthorizationCode } from "../lib/spotify.js";

export default async function handler(req, res) {
  const { code, error: authError } = req.query;

  if (authError) {
    return res.status(400).send(`Spotify authorization failed: ${authError}`);
  }

  if (!code) {
    return res.status(400).send("Missing authorization code.");
  }

  const redirectUri =
    process.env.SPOTIFY_REDIRECT_URI ??
    `${req.headers["x-forwarded-proto"] ?? "https"}://${req.headers.host}/api/spotify/callback`;

  try {
    const tokens = await exchangeAuthorizationCode(code, redirectUri);

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Spotify connected</title>
    <style>
      body { font-family: system-ui, sans-serif; max-width: 640px; margin: 2rem auto; padding: 0 1rem; line-height: 1.5; }
      code { display: block; padding: 1rem; background: #f4f4f5; border-radius: 8px; word-break: break-all; }
    </style>
  </head>
  <body>
    <h1>Spotify connected</h1>
    <p>Add this refresh token to your environment variables as <strong>SPOTIFY_REFRESH_TOKEN</strong>, then redeploy or restart your dev server.</p>
    <code>${tokens.refresh_token}</code>
    <p>Also set <strong>SPOTIFY_REDIRECT_URI</strong> to:</p>
    <code>${redirectUri}</code>
  </body>
</html>`);
  } catch (error) {
    return res.status(500).send(`Token exchange failed: ${error.message}`);
  }
}
