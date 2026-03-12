import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || process.env.SPOTIFY_CLIENT_SEC;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || process.env.SPOTIFY_REFRESH_TO;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

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
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (response.status === 204 || response.status > 400) {
    const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!recentResponse.ok) {
      return NextResponse.json({ isPlaying: false, message: "Nothing currently playing" });
    }

    const recentData = await recentResponse.json();
    const lastSong = recentData.items[0]?.track;

    if (!lastSong) {
      return NextResponse.json({ isPlaying: false, message: "Nothing currently playing" });
    }

    return NextResponse.json({
      album: lastSong.album.name,
      albumArt: lastSong.album.images[0].url,
      artist: lastSong.artists.map((_artist: { name: string }) => _artist.name).join(', '),
      isPlaying: false,
      songUrl: lastSong.external_urls.spotify,
      title: lastSong.name,
      progress: 0,
      duration: lastSong.duration_ms,
      trackId: lastSong.id,            // ✅ NEW
      previewUrl: lastSong.preview_url  // ✅ NEW
    });
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false });
  }

  return NextResponse.json({
    album: song.item.album.name,
    albumArt: song.item.album.images[0].url,
    artist: song.item.artists.map((_artist: { name: string }) => _artist.name).join(', '),
    isPlaying: song.is_playing,
    songUrl: song.item.external_urls.spotify,
    title: song.item.name,
    progress: song.progress_ms,
    duration: song.item.duration_ms,
    trackId: song.item.id,            // ✅ NEW
    previewUrl: song.item.preview_url  // ✅ NEW
  });
}