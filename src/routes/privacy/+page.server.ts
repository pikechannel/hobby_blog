import fs from 'fs';
import { promisify } from 'util';
import markdown from 'markdown-it';
import matter from 'gray-matter';
import { format } from 'date-fns';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

const readFile = promisify(fs.readFile);

interface PrivacyMetadata {
    date: string;
    title: string;
}

export const load = (async () => {
    try {
        const fileContent = await readFile("./contents/privacy.md", 'utf-8');
        const parsedMatter = matter(fileContent);
        const mdParser = new markdown();
        const htmlContent = mdParser.render(parsedMatter.content);

        const metadata: PrivacyMetadata = {
            ...(parsedMatter.data as PrivacyMetadata),
            date: parsedMatter.data.date instanceof Date
                ? format(parsedMatter.data.date, 'yyyy-MM-dd')
                : parsedMatter.data.date
        };

        return {
            htmlContent,
            metadata
        };
    } catch (err) {
        console.error('Error loading privacy policy:', err);
        throw error(404, 'Privacy policy not found');
    }
}) satisfies PageServerLoad; 