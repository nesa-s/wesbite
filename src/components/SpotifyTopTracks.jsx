import { useEffect, useState } from "react";

export default function SpotifyTopTracks() {
  const [tracks, setTracks] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTopTracks() {
      try {
        const response = await fetch("/api/spotify/top-tracks");

        if (!response.ok) {
          const body = await response.json().catch(() => ({}));
          throw new Error(body.error ?? "Could not load top tracks");
        }

        const data = await response.json();

        if (!cancelled) {
          setTracks(data.tracks ?? []);
          setUpdatedAt(data.updatedAt ?? null);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTopTracks();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="content-list">
        {tracks.map((track) => (
          <div key={`${track.rank}-${track.url}`} className="purple-hover">
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              {track.rank}. {track.name} — {track.artists}
            </a>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {updatedAt && <>Last updated {new Date(updatedAt).toLocaleDateString()}. </>}
        Data from Spotify. Updates every 14 days.
      </p>
    </div>
  );
}
