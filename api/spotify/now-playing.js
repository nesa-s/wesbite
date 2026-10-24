import {
  refreshAccessToken,
  fetchNowPlaying,
  fetchRecentlyPlayed,
  formatNowPlaying,
  formatRecentlyPlayed,
} from "../lib/spotify.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const accessToken = await refreshAccessToken();

    let nowPlayingData = null;
    try {
      const nowPlaying = await fetchNowPlaying(accessToken);
      nowPlayingData = formatNowPlaying(nowPlaying);
    } catch (error) {
      if (error.status === 204) {
        nowPlayingData = null;
      } else {
        throw error;
      }
    }

    if (nowPlayingData && nowPlayingData.isPlaying) {
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
      return res.status(200).json({
        track: nowPlayingData,
        isPlaying: true,
      });
    }

    const recentlyPlayed = await fetchRecentlyPlayed(accessToken);
    const recentTrack = formatRecentlyPlayed(recentlyPlayed);

    if (recentTrack) {
      res.setHeader("Cache-Control", "public, max-age=30");
      return res.status(200).json({
        track: recentTrack,
        isPlaying: false,
      });
    }

    res.setHeader("Cache-Control", "public, max-age=60");
    return res.status(200).json({
      track: null,
      isPlaying: false,
    });
  } catch (error) {
    const status = error.status ?? 500;
    return res.status(status).json({
      error: error.message ?? "Failed to fetch now playing from Spotify",
    });
  }
}
