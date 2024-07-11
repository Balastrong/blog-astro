import { type YouTubePlaylistItemSnippet } from '~/types';
import { DUMMY_VIDEOS } from './youtube.mock';

const LONGFORM_PLAYLIST = 'UULF-KqnO3ez7vF-kyIQ_22rdA';
const SHORTS_PLAYLIST = 'UUSH-KqnO3ez7vF-kyIQ_22rdA';

async function fetchVideos(playlistId: string, amount = 6): Promise<YouTubePlaylistItemSnippet[]> {
  if (import.meta.env.DEV_NO_YOUTUBE_API === 'true') {
    return DUMMY_VIDEOS;
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${
        import.meta.env.YOUTUBE_API_KEY
      }&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${amount}`
    );

    const data = await res.json();

    return data?.items.map((i) => i.snippet) ?? [];
  } catch (error) {
    console.error(error);
  }

  return [];
}

export async function getVideos(amount = 6): Promise<{
  shortVideos: YouTubePlaylistItemSnippet[];
  longVideos: YouTubePlaylistItemSnippet[];
}> {
  const [shortVideos, longVideos] = await Promise.all([
    fetchVideos(SHORTS_PLAYLIST, amount),
    fetchVideos(LONGFORM_PLAYLIST, amount),
  ]);

  return { shortVideos, longVideos };
}

export function getThumbnailUrl(video: YouTubePlaylistItemSnippet) {
  return `https://i3.ytimg.com/vi/${video.resourceId?.videoId}/maxresdefault.jpg`;
}

export function getShortThumbnailUrl(video: YouTubePlaylistItemSnippet) {
  return `https://i.ytimg.com/vi/${video.resourceId?.videoId}/oar2.jpg`;
}

export function getVideoUrl(video: YouTubePlaylistItemSnippet | string) {
  if (typeof video === 'string') {
    return `https://www.youtube.com/watch?v=${video}`;
  }
  return `https://www.youtube.com/watch?v=${video.resourceId?.videoId}`;
}
