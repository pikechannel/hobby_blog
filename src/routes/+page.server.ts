import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import type { PageServerLoad } from './$types';
import { getArticles } from '$lib/getArticles';

const readFile = promisify(fs.readFile);

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

interface PageData {
  content: ArticleInfo[];
}

export const load: PageServerLoad = async () => {
  const articles = getArticles();
  return { content: articles };
};
