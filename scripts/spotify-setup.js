#!/usr/bin/env node

/**
 * Local Spotify OAuth Setup Script
 * 
 * Run this script locally to obtain a refresh token for your personal Spotify account.
 * The token will be displayed in the terminal for you to add to Vercel environment variables.
 * 
 * Usage:
 *   node scripts/spotify-setup.js
 * 
 * Required environment variables:
 *   SPOTIFY_CLIENT_ID     - From Spotify Developer Dashboard
 *   SPOTIFY_CLIENT_SECRET - From Spotify Developer Dashboard
 */

import http from 'http';
import { URL } from 'url';
import crypto from 'crypto';

const PORT = 3000;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;
const SCOPES = 'user-top-read user-read-currently-playing user-read-recently-played';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ Error: Missing required environment variables');
  console.error('');
  console.error('Please set:');
  console.error('  SPOTIFY_CLIENT_ID     - From Spotify Developer Dashboard');
  console.error('  SPOTIFY_CLIENT_SECRET - From Spotify Developer Dashboard');
  console.error('');
  console.error('Example:');
  console.error('  SPOTIFY_CLIENT_ID=abc123 SPOTIFY_CLIENT_SECRET=xyz789 node scripts/spotify-setup.js');
  process.exit(1);
}

const state = crypto.randomBytes(16).toString('hex');
const authorizeUrl = new URL('https://accounts.spotify.com/authorize');
authorizeUrl.searchParams.set('client_id', CLIENT_ID);
authorizeUrl.searchParams.set('response_type', 'code');
authorizeUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authorizeUrl.searchParams.set('scope', SCOPES);
authorizeUrl.searchParams.set('state', state);

let server;

async function exchangeCode(code) {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Token exchange failed: ${text}`);
  }

  return response.json();
}

server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/callback') {
    const code = url.searchParams.get('code');
    const returnedState = url.searchParams.get('state');
    const error = url.searchParams.get('error');

    if (error) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end(`Authorization failed: ${error}`);
      console.error(`\n❌ Authorization failed: ${error}`);
      server.close();
      return;
    }

    if (returnedState !== state) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('State validation failed');
      console.error('\n❌ State validation failed');
      server.close();
      return;
    }

    if (!code) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Missing authorization code');
      console.error('\n❌ Missing authorization code');
      server.close();
      return;
    }

    try {
      const tokens = await exchangeCode(code);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('✓ Success! Check your terminal for the refresh token.');

      console.log('\n' + '='.repeat(80));
      console.log('✓ Authorization successful!');
      console.log('='.repeat(80));
      console.log('');
      console.log('Add this refresh token to Vercel environment variables:');
      console.log('');
      console.log('Variable name:  SPOTIFY_REFRESH_TOKEN');
      console.log('Variable value: ' + tokens.refresh_token);
      console.log('');
      console.log('='.repeat(80));
      console.log('');

      server.close();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Token exchange failed');
      console.error('\n❌ Token exchange failed:', error.message);
      server.close();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log('Spotify OAuth Setup');
  console.log('='.repeat(80));
  console.log('');
  console.log('1. Open this URL in your browser:');
  console.log('');
  console.log('   ' + authorizeUrl.toString());
  console.log('');
  console.log('2. Log in to Spotify and click "Agree"');
  console.log('3. You will be redirected back to localhost');
  console.log('4. The refresh token will be displayed here');
  console.log('');
  console.log('Waiting for authorization...');
  console.log('');
});

server.on('close', () => {
  process.exit(0);
});
