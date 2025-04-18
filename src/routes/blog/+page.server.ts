import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';
import { blogStore, rssFeedUrls } from '$src/store/BlogStore';
import { type RssPost, PostStatus, type RssUrlList } from '$src/types/RssXml';

export const prerender = true;

export const _loadPosts = (fetch?: (() => Promise<Response>),  feeds?: RssUrlList) => {
  let fetchStatus: PostStatus = PostStatus.Loading;

  // When resolved, update the store to save for later
  posts
    .then((resolvedPosts) => {
      fetchStatus = PostStatus.Ready;
      return blogStore.set(resolvedPosts);
    })
    .catch(() => {
      fetchStatus = PostStatus.Errored;
    });
  // Return post prop, to render content
  return { posts, fetchStatus };
};

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }: PageServerLoad, feeds: RssUrlList | undefined) => {
  // if (get(blogStore)?.length > 0) {
  //   return { posts: get(blogStore) };
  // }
  return _loadPosts(fetch, feeds);
};
