import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import markdown from 'markdown-it';
import matter from 'gray-matter';
import { format } from 'date-fns';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getArticles } from '$lib/getArticles';

const readFile = promisify(fs.readFile);

export const load: PageServerLoad = async ({ params }) => {
  const { id } = params;
  const filePath = path.resolve('articles', `${id}.md`);
  const slug = path.basename(filePath, '.md');

  let fileContent: string;
  try {
    fileContent = await readFile(filePath, 'utf-8');
  } catch (err) {
    console.error('Error reading file:', err);
    throw error(404, 'Not found');
  }

  // gray-matterを使ってMarkdownとFront Matterを分離
  const parsedMatter = matter(fileContent);
  const mdParser = new markdown();
  const htmlContent = mdParser.render(parsedMatter.content);

  const metadata = parsedMatter.data;
  if (metadata.date instanceof Date) {
    metadata.date = format(metadata.date, 'yyyy-MM-dd');
  }

  const articles = getArticles();
  return {
    slug,
    articles,
    params,
    htmlContent,
    metadata
  };
}