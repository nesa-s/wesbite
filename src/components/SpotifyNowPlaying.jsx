import { useEffect, useState } from "react";

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let intervalId = null;

    async function loadNowPlaying() {
      try {
        const response = await fetch("/api/spotify/now-playing");

        if (!response.ok) {
          if (!cancelled) {
            setTrack(null);
            setLoading(false);
          }
          return;
        }

        const data = await response.json();

        if (!cancelled) {
          setTrack(data.track ?? null);
          setIsPlaying(data.isPlaying ?? false);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setTrack(null);
          setLoading(false);
        }
      }
    }

    loadNowPlaying();

    intervalId = setInterval(() => {
      if (!cancelled) {
        loadNowPlaying();
      }
    }, 30000);

    return () => {
      cancelled = true;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  if (loading || !track) {
    return null;
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="content-list">
        <div className="purple-hover flex items-start gap-4">
          {track.albumArt && (
            <img 
              src={track.albumArt} 
              alt={`${track.name} album art`}
              className="w-16 h-16 rounded shadow-sm"
            />
          )}
          <div className="flex-1">
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              <div className="font-medium">{track.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{track.artists}</div>
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {isPlaying ? (
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Now playing on Spotify
          </span>
        ) : (
          "Last played on Spotify"
        )}
      </p>
    </div>
  );
}
