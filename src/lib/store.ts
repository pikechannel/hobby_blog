import { readable } from 'svelte/store';

interface Article {
    slug: string;
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
    const modules = import.meta.glob<Module>('../contents/articles/*.svx', { eager: true });
    const articles: Article[] = Object.keys(modules).map((filename) => {
        const slug = filename.replace(/^\.\.\/contents\/articles\//, '').replace(/.svx/, '');
        const module = modules[filename];
        return { 
            slug, 
            metadata: module.metadata 
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
 