import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import markdown from 'markdown-it';
import matter from 'gray-matter';
import { format } from 'date-fns';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getArticles } from '../../../lib/getArticles';

const readFile = promisify(fs.readFile);

export const load = (async ({ params }) => {
  try {
    const { id } = params;
    if (!id) {
      throw error(404, 'Article ID is required');
    }

    const filePath = path.resolve('src/lib/contents/articles', `${id}.md`);
    const slug = path.basename(filePath, '.md');

    const fileContent = await readFile(filePath, 'utf-8');
    const parsedMatter = matter(fileContent);
    const mdParser = new markdown();
    const htmlContent = mdParser.render(parsedMatter.content);

    const metadata = {
      ...parsedMatter.data,
      date: parsedMatter.data.date instanceof Date
        ? format(parsedMatter.data.date, 'yyyy-MM-dd')
        : parsedMatter.data.date
    };

    const articles = getArticles();

    return {
      slug,
      articles,
      htmlContent,
      metadata
    };
  } catch (err) {
    console.error('Error loading article:', err);
    throw error(404, 'Article not found');
  }
}) satisfies PageServerLoad;