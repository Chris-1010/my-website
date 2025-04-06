import { writable, derived, type Readable } from 'svelte/store';
import type { RssPosts, RssUrlList } from '$src/types/RssXml';
import CONFIG from '$src/helpers/config';

export const blogStore = writable<RssPosts>([]);

export const config = CONFIG;

// Stores the users search term, for filtering posts
export const searchTerm = writable('');

// If 'searchTerm' is present, return only matching posts to render
export const filtered: Readable<RssPosts> = derived(
  [searchTerm, blogStore],
  ([$searchTerm, $blogStore]) => {
    // If no search term, return everything
    if (!$searchTerm) return $blogStore;

    // For more accurate searches, ignore case and whitespace
    const normalize = (input: string) =>
      input.toLocaleLowerCase().replaceAll(' ', '');

    // Search post title for matches
    const postTitleResults = $blogStore.filter((post) =>
      normalize(post.title).includes(normalize($searchTerm))
    );
    // If results were found return them, otherwise search entire post body
    if (postTitleResults.length > 0) {
      return postTitleResults;
    } else {
      return $blogStore.filter((post) =>
        normalize(post.description).includes(normalize($searchTerm))
      );
    }
  }
);
