import type { ImageMetadata } from 'astro';

export type Post = {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  youtubeId?: string;

  draft?: boolean;

  excerpt?: string;
  series?: string;
  seriesName?: string;
  tags?: Array<string>;
  author?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Content: any;
  content?: string;

  readingTime?: number;
};

export type MetaSEO = {
  title?: string;
  description?: string;
  image?: string | ImageMetadata;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogType?: string;
};

export type GitHubRepository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  temp_clone_token: string;
  network_count: number;
  subscribers_count: number;
};

export type GitHubPullRequest = {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: Owner;
  body: string;
  labels: Label[];
  milestone: Milestone;
  active_lock_reason: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
  merged_at: string;
  merge_commit_sha: string;
  assignee: Owner;
  assignees: Owner[];
  requested_reviewers: Owner[];
  // requested_teams: Team[];
  // head: Branch;
  // base: Branch;
};

export type Label = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
};

export type Milestone = {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  state: string;
  title: string;
  description: string;
  creator: Owner;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  due_on: string;
};

export type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type License = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
};

export type GitHubRepo = {
  owner: string;
  repo: string;
};

export type YouTubeVideo = {
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    playlistId?: string;
  };
  kind: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

export type YouTubePlaylistItemSnippet = {
  title: string;
  description: string;
  channelId?: string | null;
  channelTitle?: string | null;
  playlistId?: string | null;
  position?: number | null;
  publishedAt?: string | null;
  resourceId?: {
    kind: string;
    videoId: string;
  };
  thumbnails?: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type Tutorial = {
  key: string;
  title: string;
  mainColor: string;
  playlistUrl?: string;
  chapters: TutorialChapter[];
};

export type TutorialChapter = {
  title: string;
  article?: string;
  video?: string;
  code?: string;
  soon?: boolean;
};
