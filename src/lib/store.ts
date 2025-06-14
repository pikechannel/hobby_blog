import { readable } from 'svelte/store';

interface Article {
    slug: string;
    path: string;
    metadata: {
        date: string;
        title: string;
        description: string;
        tags: string[];
    };
}

interface Module {
    metadata: Article['metadata'];
    default: any;
}

const getArticles = () => {
    const modules = import.meta.glob<Module>('../../contents/articles/*.svx', { eager: true });
    const articles: Article[] = Object.keys(modules).map((filePath) => {
        const slug = filePath.replace(/^\.\.\/\.\.\/contents\/articles\//, '').replace(/.svx/, '');
        const module = modules[filePath];
        const path = "article/" + filePath
        return { 
            slug, 
            metadata: module.metadata,
            path
        };
    });

    articles.sort((a, b) => {
        const aDate = new Date(a.metadata.date);
        const bDate = new Date(b.metadata.date);
        return bDate.valueOf() - aDate.valueOf();
    });

    return articles;
};

export const getArticlePath = readable<Article[]>(getArticles());
 