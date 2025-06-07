import fs from 'fs';
import { promisify } from 'util';
import markdown from 'markdown-it';
import matter from 'gray-matter';
import { format } from 'date-fns';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

const readFile = promisify(fs.readFile);

interface ProfileMetadata {
    date: string;
    thumbnail: string;
    thumbnail_webp: string;
}

export const load = (async () => {
    try {
        const fileContent = await readFile("contents/profile.svx", 'utf-8');
        const parsedMatter = matter(fileContent);
        const mdParser = new markdown();
        const htmlContent = mdParser.render(parsedMatter.content);

        const metadata: ProfileMetadata = {
            ...(parsedMatter.data as ProfileMetadata),
            date: parsedMatter.data.date instanceof Date
                ? format(parsedMatter.data.date, 'yyyy-MM-dd')
                : parsedMatter.data.date
        };

        return {
            htmlContent,
            metadata
        };
    } catch (err) {
        console.error('Error loading profile:', err);
        throw error(404, 'Profile not found');
    }
}) satisfies PageServerLoad;