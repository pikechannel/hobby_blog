import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { ArticleInfo, Metadata } from '$lib/types';

export function getArticles(): ArticleInfo[] {
	const articlesDirectory = path.resolve(process.cwd(), 'contents/articles');
	const filenames = fs.readdirSync(articlesDirectory);

	const articles: ArticleInfo[] = filenames.map((filename) => {
		const slug = filename.replace(/\.[^.]+$/, '');
		const fullPath = path.join(articlesDirectory, filename);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data } = matter(fileContents);

		return { slug, metadata: data as Metadata };
	});

	articles.sort((a, b) => {
		const aDate = new Date(a.metadata.date);
		const bDate = new Date(b.metadata.date);
		return bDate.valueOf() - aDate.valueOf();
	});

	return articles;
}