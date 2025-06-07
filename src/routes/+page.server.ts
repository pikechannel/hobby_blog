import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import type { ServerLoad } from '@sveltejs/kit';
import { getArticles } from '../lib/getArticles';
import type { TopPageData } from '../lib/types';

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

export const load: ServerLoad = async (): Promise<TopPageData> => {
  const articles =  getArticles();;
  return { content: articles };
};
