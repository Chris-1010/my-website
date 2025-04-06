import { TWITTER_TOKEN, GITHUB_TOKEN } from '$env/static/private';
import type { SocialMetric } from '$src/types/Socials';
import config from '$src/helpers/config';

export const prerender = true;

export const _getGithubInfo = async (username: string) => {
  const githubEndpoint = `https://api.github.com/users/${username}`;
  const githubRequest = {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  };
  return await fetch(githubEndpoint, githubRequest)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.public_repos) {
        const { public_repos, followers } = stats;
        const metrics: SocialMetric[] = [
          { label: 'Repos', value: public_repos.toLocaleString() },
          { label: 'Followers', value: followers.toLocaleString() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const load = async () => {
  const {
    // Get usernames from config
    GitHub: githubUn,
  } = config.contact.socials;
  // Trigger fetch stats for each social
  const [
    github
  ] = await Promise.all([
    _getGithubInfo(githubUn)
  ]);
  return {
    props: {
      github
    },
  };
};
