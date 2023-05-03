import { YouTubeVideo } from '~/types';

const CHANNEL_ID = 'UC-KqnO3ez7vF-kyIQ_22rdA';

let shortVideoIds: Set<string>;

export async function getVideos(amount = 20): Promise<YouTubeVideo[]> {
  if (import.meta.env.DEV_NO_YOUTUBE_API) {
    return DUMMY_VIDEOS;
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${
        import.meta.env.YOUTUBE_API_KEY
      }&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${amount}`
    );

    const data = await res.json();

    return data?.items ?? [];
  } catch (error) {
    console.error(error);
  }

  return [];
}

async function isVideoShort(videoId?: string) {
  if (!videoId) return false;

  if (import.meta.env.DEV_NO_YOUTUBE_API) {
    return Math.random() > 0.5;
  }

  if (shortVideoIds === undefined) {
    try {
      const res = await fetch('https://yt.lemnoslife.com/channels?part=shorts&id=' + CHANNEL_ID);
      const data = await res.json();
      shortVideoIds = new Set(data.items[0].shorts.map((item: { videoId: string }) => item.videoId) ?? []);
    } catch (error) {
      shortVideoIds = new Set();
    }
  }

  return shortVideoIds.has(videoId);
}

export async function categorizeVideo(videos: YouTubeVideo[], defaults?: { longCount?: number; shortCount?: number }) {
  const longCount = defaults?.longCount ?? 6;
  const shortCount = defaults?.shortCount ?? 6;

  const longVideos: YouTubeVideo[] = [];
  const shortVideos: YouTubeVideo[] = [];
  const fullfilled = () => shortVideos.length >= shortCount && longVideos.length >= longCount;

  for (let i = 0; i < videos.length && !fullfilled(); i++) {
    if (await isVideoShort(videos[i]?.id?.videoId)) {
      shortVideos.push(videos[i]);
    } else {
      longVideos.push(videos[i]);
    }
  }

  return { shortVideos: shortVideos.slice(0, shortCount), longVideos: longVideos.slice(0, longCount) };
}

export function getThumbnailUrl(video: YouTubeVideo) {
  return video.snippet.thumbnails.high.url ?? video.snippet.thumbnails.default.url;
}

export function getShortThumbnailUrl(video: YouTubeVideo) {
  return `https://i.ytimg.com/vi/${video.id.videoId}/oar2.jpg`;
}

export function getVideoUrl(video: YouTubeVideo | string) {
  if (typeof video === 'string') {
    return `https://www.youtube.com/watch?v=${video}`;
  }
  return `https://www.youtube.com/watch?v=${video.id.videoId}`;
}

const DUMMY_VIDEOS: YouTubeVideo[] = [
  {
    kind: 'youtube#searchResult',
    etag: '8FCw7-_JDiltVoRKWbhyLSZ2VPM',
    id: {
      kind: 'youtube#video',
      videoId: 'AKxaoupEBv4',
    },
    snippet: {
      publishedAt: '2023-05-01T08:49:15Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'GitHub Copilot X CLI: A Real Use Case',
      description:
        'Let me show you how I used Copilot CLI in a real use case. I needed a command to reorganize the file structure of articles in my ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/AKxaoupEBv4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/AKxaoupEBv4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/AKxaoupEBv4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-05-01T08:49:15Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'S3f14lODuZbqbjA02RJSMDT5PpU',
    id: {
      kind: 'youtube#video',
      videoId: 'WbNCoFqvgLE',
    },
    snippet: {
      publishedAt: '2023-04-27T14:43:27Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'I quit my developer job',
      description: 'Full video: https://youtu.be/R0hPCgPvFuc.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/WbNCoFqvgLE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/WbNCoFqvgLE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/WbNCoFqvgLE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-27T14:43:27Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'Lxt9UCZ8tRsAIpfoBZCQrkiDZaw',
    id: {
      kind: 'youtube#video',
      videoId: 'wE-6CswAE64',
    },
    snippet: {
      publishedAt: '2023-04-24T13:32:27Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: '10 Javascript Challenges - Explained',
      description:
        "Let's play 10 minigames to see how much you know Javascript. Will you be able to find the right answer to all of them? If you like ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/wE-6CswAE64/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/wE-6CswAE64/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/wE-6CswAE64/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-24T13:32:27Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'HebcyAPyK4lcG70ol7ogOFmL4x8',
    id: {
      kind: 'youtube#video',
      videoId: '79R_ys7a8Aw',
    },
    snippet: {
      publishedAt: '2023-04-24T10:48:51Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: '10 more Javascript Challenges',
      description:
        "Let's play 10 minigames to see how much you know Javascript. Will you be able to find the right answer to all of them? You can ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/79R_ys7a8Aw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/79R_ys7a8Aw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/79R_ys7a8Aw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-24T10:48:51Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'JcoQOTAnYQ-a00g-0xWUYONf-eQ',
    id: {
      kind: 'youtube#video',
      videoId: '-cxTFVdNBe8',
    },
    snippet: {
      publishedAt: '2023-04-21T15:15:00Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'GitHub / Slash Commands / Part 3',
      description: 'Wait, what? Slash commands are available on GitHub? Read the docs: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/-cxTFVdNBe8/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/-cxTFVdNBe8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/-cxTFVdNBe8/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-21T15:15:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'unGiSkIOhCkRFGzRDda1q1-MdLU',
    id: {
      kind: 'youtube#video',
      videoId: 'volU9QxiWgg',
    },
    snippet: {
      publishedAt: '2023-04-20T07:00:17Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Open Source Community: Schrödinger Hat',
      description:
        'Schrödinger Hat is looking for contributors! The community currently maintains several Open Source projects on GitHub, is a Linux ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/volU9QxiWgg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/volU9QxiWgg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/volU9QxiWgg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-20T07:00:17Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 't7kdK1kKEwnDWXskkG1EjfndX9s',
    id: {
      kind: 'youtube#video',
      videoId: 'jCGiQIBs924',
    },
    snippet: {
      publishedAt: '2023-04-19T11:30:23Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'GitHub / Slash Commands / Part 2',
      description: 'Wait, what? Slash commands are available on GitHub? Read the docs: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/jCGiQIBs924/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/jCGiQIBs924/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/jCGiQIBs924/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-19T11:30:23Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'wo7RJknlqPME2ibLR6P3eW8zsO4',
    id: {
      kind: 'youtube#video',
      videoId: 'R0hPCgPvFuc',
    },
    snippet: {
      publishedAt: '2023-04-17T07:00:10Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'I QUIT from a TOXIC Workplace for Developers',
      description:
        'I worked as a Full Stack Web Developer on what I realized it was to me a toxic workplace for software developers and I decided to ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/R0hPCgPvFuc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/R0hPCgPvFuc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/R0hPCgPvFuc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-17T07:00:10Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'mM6SS8-A6WoQ9xVNX8eHCnmDtIg',
    id: {
      kind: 'youtube#video',
      videoId: 'r3z4sotrQXQ',
    },
    snippet: {
      publishedAt: '2023-04-16T10:48:25Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'GitHub NEW Slash Commands /',
      description: 'Wait, what? Slash commands are available on GitHub? Read the docs: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/r3z4sotrQXQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/r3z4sotrQXQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/r3z4sotrQXQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-16T10:48:25Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'D0qthFASxcc7fLVB_V-yaMR01gQ',
    id: {
      kind: 'youtube#video',
      videoId: 'WC55fUwvAsU',
    },
    snippet: {
      publishedAt: '2023-04-14T16:07:10Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Long numbers in #javascript',
      description:
        "What number is 1000000? Here's a couple of smart ways to handle hardcoded big numbers in #javascript ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/WC55fUwvAsU/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/WC55fUwvAsU/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/WC55fUwvAsU/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-14T16:07:10Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'qCFkbyarjaBacA6yhvSwcOvlNjE',
    id: {
      kind: 'youtube#video',
      videoId: 'GHIy_TbNhU4',
    },
    snippet: {
      publishedAt: '2023-04-13T09:00:10Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Long numbers in Javascript',
      description:
        "What number is 1000000? Here's a couple of smart ways to handle hardcoded big numbers in #javascript ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/GHIy_TbNhU4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/GHIy_TbNhU4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/GHIy_TbNhU4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-13T09:00:10Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'FE619YYhMOM85Z518-zDiNvD1E8',
    id: {
      kind: 'youtube#video',
      videoId: 'NiTmtiBgJKI',
    },
    snippet: {
      publishedAt: '2023-04-10T11:15:13Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Never Use the WRONG Package Manager Again!',
      description:
        "npm or yarn, what does this project use? Or maybe it's pnpm? Or Bun? Well, let's just use ni! Is this a new package manager?",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/NiTmtiBgJKI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/NiTmtiBgJKI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/NiTmtiBgJKI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-10T11:15:13Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'e06icUHGREdZESAtWkG3rJY4S7k',
    id: {
      kind: 'youtube#video',
      videoId: 'bQ27GyRrVXM',
    },
    snippet: {
      publishedAt: '2023-04-05T19:47:28Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: '❌ Never use the WRONG node version again! ❌',
      description:
        'With nvm and a little script, you can make sure the correct node version is automatically set. Need to download that specific ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bQ27GyRrVXM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bQ27GyRrVXM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/bQ27GyRrVXM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-05T19:47:28Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'jbf6xpxhrFhT_EXm190T-Iw4-XA',
    id: {
      kind: 'youtube#video',
      videoId: '-nfUgBLBTIo',
    },
    snippet: {
      publishedAt: '2023-04-03T13:00:00Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'GitHub Issues on Visual Studio Code [3/3]',
      description:
        'Stop! You no longer need to open GitHub and search for that issue you were assigned to. You can do it from Visual Studio ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/-nfUgBLBTIo/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/-nfUgBLBTIo/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/-nfUgBLBTIo/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-04-03T13:00:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '7zsPne9fOLqzzdO79y26nM9OMas',
    id: {
      kind: 'youtube#video',
      videoId: 'AWOKwMrD3Iw',
    },
    snippet: {
      publishedAt: '2023-03-29T14:15:00Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Do you Know Javascript? [Round 4]',
      description:
        'Full video here: https://youtu.be/8gGuu9c9miY A series of Javascript minigames to test your knowledge, have fun and maybe also ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/AWOKwMrD3Iw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/AWOKwMrD3Iw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/AWOKwMrD3Iw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-03-29T14:15:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'tPH6JVJBWIwoe_Brz4dJ9lEf4W4',
    id: {
      kind: 'youtube#video',
      videoId: 'HmLhxdBZKDY',
    },
    snippet: {
      publishedAt: '2023-03-28T12:15:02Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Do you Know Javascript? [Round 3]',
      description:
        'Full video here: https://youtu.be/8gGuu9c9miY A series of Javascript minigames to test your knowledge, have fun and maybe also ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/HmLhxdBZKDY/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/HmLhxdBZKDY/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/HmLhxdBZKDY/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-03-28T12:15:02Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'iQBq_kqROUpzJ98Awg6-b_1CBbc',
    id: {
      kind: 'youtube#video',
      videoId: 'DSl-L6B_Qb4',
    },
    snippet: {
      publishedAt: '2023-03-27T10:15:01Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Review a Pull Request from Visual Studio Code [2/3]',
      description:
        "You can Code Review a Pull Request on GitHub, without leaving Visual Studio Code! Ok, enough words with Capital Letters, let's ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/DSl-L6B_Qb4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/DSl-L6B_Qb4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/DSl-L6B_Qb4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-03-27T10:15:01Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'uUkVclBCReZvgBjz2cVRosLsKhg',
    id: {
      kind: 'youtube#video',
      videoId: 'D-w1nWVwLPc',
    },
    snippet: {
      publishedAt: '2023-03-26T09:15:00Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Do you Know Javascript? [Round 2]',
      description:
        'Full video here: https://youtu.be/8gGuu9c9miY A series of Javascript minigames to test your knowledge, have fun and maybe also ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/D-w1nWVwLPc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/D-w1nWVwLPc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/D-w1nWVwLPc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-03-26T09:15:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'Q7J_w1zZX9BwyOF8WMEu-osVHLo',
    id: {
      kind: 'youtube#video',
      videoId: '4iR7cCW_zsU',
    },
    snippet: {
      publishedAt: '2023-03-24T08:45:00Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Do you Know Javascript? [Round 1]',
      description:
        'Full video here: https://youtu.be/8gGuu9c9miY A series of Javascript minigames to test your knowledge, have fun and maybe also ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/4iR7cCW_zsU/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/4iR7cCW_zsU/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/4iR7cCW_zsU/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-03-24T08:45:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'mW4pEehGpRLjltj8UrVw6krEx9k',
    id: {
      kind: 'youtube#playlist',
      playlistId: 'PLOQjd5dsGSxK3yNDzUJUCdwTma7eD3SUR',
    },
    snippet: {
      publishedAt: '2023-03-22T17:22:00Z',
      channelId: 'UC-KqnO3ez7vF-kyIQ_22rdA',
      title: 'Do you know Javascript? Play the game!',
      description:
        'A series of Javascript minigames to test your knowledge, have fun and maybe also learn something new!',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/4iR7cCW_zsU/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/4iR7cCW_zsU/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/4iR7cCW_zsU/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Dev Leonardo',
      liveBroadcastContent: 'none',
      publishTime: '2023-03-22T17:22:00Z',
    },
  },
];
