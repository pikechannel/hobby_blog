export interface Article {
	slug: string;
	title: string;
	description: string;
	date: string;
	category: string;
	thumbnail: string;
}

export interface PageData {
	slug: string;
	articles: Article[];
	htmlContent: string;
	metadata: {
		title: string;
		description: string;
		date: string;
		category: string;
		thumbnail: string;
	};
	module: any;
} 