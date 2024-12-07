import type { GitHubPullRequest, GitHubRepository } from '~/types';

const gitHubApiUrl = 'https://api.github.com/repos/';

export async function getRepoData(owner: string, repo: string) {
  const repoDataPromise = fetch(gitHubApiUrl + owner + '/' + repo, {
    headers: {
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  const pullRequestsPromise = fetch(
    `https://api.github.com/search/issues?q=is:pr+repo:${owner}/${repo}+author:Balastrong`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  const [repoResponse, pullRequestResponse] = await Promise.all([
    (await repoDataPromise).json(),
    (await pullRequestsPromise).json(),
  ]);

  return {
    repoData: repoResponse as GitHubRepository,
    pullRequests: pullRequestResponse as { items: GitHubPullRequest[]; total_count: number },
  };
}
