import fs from 'fs';
import { promisify } from 'util';
import type { ServerLoad } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { getArticlePath } from '$lib/store';

interface Metadata {
  title: string;
  date: string;
  category: string;
  description: string;
  thumbnail: string;
}

interface ArticleInfo {
  slug: string;
  metadata: Metadata;
}

export const load: ServerLoad = async () => {
  const articles = get(getArticlePath);
  return { articles };
};
