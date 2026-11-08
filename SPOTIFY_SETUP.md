# Spotify Now-Playing Setup

## Overview

The `/grow` page displays a live "now playing" widget showing what you're currently listening to on Spotify, with 30-second auto-refresh.

## Required Environment Variables

Set in Vercel (Project Settings → Environment Variables → All environments):

```
SPOTIFY_CLIENT_ID=c63bf9f2fd2c4e95b1e0f08845ea1cb6
SPOTIFY_CLIENT_SECRET=<from_spotify_dashboard>
SPOTIFY_REFRESH_TOKEN=<from_local_setup>
```

## Setup Instructions

### 1. Get Client Secret

1. Visit https://developer.spotify.com/dashboard
2. Open your app (Client ID: c63bf9f2fd2c4e95b1e0f08845ea1cb6)
3. Click "Show Client Secret"
4. Copy the secret

### 2. Run Local Setup Script

The setup script runs a temporary local OAuth server to obtain your refresh token securely.

```bash
# In this repository
SPOTIFY_CLIENT_ID=c63bf9f2fd2c4e95b1e0f08845ea1cb6 \
SPOTIFY_CLIENT_SECRET=<your_secret> \
node scripts/spotify-setup.js
```

The script will:
1. Start a local server on http://localhost:3000
2. Print an authorization URL
3. Open that URL in your browser
4. After you approve, display your refresh token in the terminal

### 3. Set Environment Variables in Vercel

Add to Vercel environment variables:
- `SPOTIFY_CLIENT_ID` (already set or use value above)
- `SPOTIFY_CLIENT_SECRET` (from step 1)
- `SPOTIFY_REFRESH_TOKEN` (from step 2)

### 4. Deploy

Redeploy to production. Visit `/grow` to verify the widget appears.

## OAuth Scopes

The integration requests these scopes (configured in code):
- `user-top-read` - Read top tracks (legacy)
- `user-read-currently-playing` - Read currently playing track
- `user-read-recently-played` - Read recently played tracks (fallback)

## Behavior

- **Playing now**: Shows current track with animated indicator
- **Not playing**: Shows most recently played track
- **No data/error**: Widget hidden (no error shown to visitors)
- **Refresh**: Auto-refreshes every 30 seconds

## Troubleshooting

**Widget doesn't appear**
- Check Vercel function logs for errors
- Verify all three env vars are set with non-empty values
- Re-run local setup script to get fresh refresh token

**"Nothing playing" always shown**
- Play something on Spotify
- Wait up to 30 seconds for refresh
- Check that your Spotify app is in Development mode (sufficient for personal use)

**Re-authorization needed**
- If scopes change in future, re-run `node scripts/spotify-setup.js`
- Update `SPOTIFY_REFRESH_TOKEN` in Vercel with new value

## Security

- Setup script runs locally only (no web endpoints)
- OAuth state validated cryptographically
- Refresh token never logged or exposed publicly
- API errors return empty responses (no info leakage)
- No sensitive data in URLs or browser state

## Testing

Run tests:
```bash
npm run build        # Verify build passes
node tests/spotify.test.js  # Run integration tests
```

Tests verify:
- 204 No Content handling (nothing playing)
- Error hiding from visitors
- Recently-played fallback
- OAuth state validation
- Data formatting

## Parent Actions Needed

1. Securely obtain SPOTIFY_CLIENT_SECRET from Spotify Dashboard
2. Run local setup script to get refresh token
3. Set environment variables in Vercel
4. Deploy to production
5. Verify widget on /grow page
