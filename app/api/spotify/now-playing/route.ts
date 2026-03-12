import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Spotify Token Error:', errorData);
    return { access_token: null, error: errorData };
  }

  return response.json();
};

export async function GET() {
  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json({ 
      isPlaying: false, 
      message: "Spotify credentials missing. Please set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN." 
    }, { status: 401 });
  }

  const tokenResponse = await getAccessToken();
  const access_token = tokenResponse.access_token;

  if (!access_token) {
    return NextResponse.json({ 
      isPlaying: false, 
      message: "Failed to refresh access token. Your refresh token might be invalid or expired.",
      error: tokenResponse.error
    }, { status: 401 });
  }

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204) {
    return NextResponse.json({ isPlaying: false, message: "Nothing currently playing" });
  }

  if (response.status > 400) {
    const errorData = await response.json();
    console.error('Spotify API Error:', errorData);
    return NextResponse.json({ 
      isPlaying: false, 
      message: "Spotify API error",
      error: errorData
    }, { status: response.status });
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumArt = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const progress = song.progress_ms;
  const duration = song.item.duration_ms;

  return NextResponse.json({
    album,
    albumArt,
    artist,
    isPlaying,
    songUrl,
    title,
    progress,
    duration
  });
}
