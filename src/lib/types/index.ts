// メタデータの型定義
export interface Metadata {
	title: string;
	date: string;
	category: string;
	description: string;
	thumbnail: string;
}

// 記事データの型定義
export interface Article {
	slug: string;
	metadata: Metadata;
}

// 記事情報の型定義（一覧表示用）
export interface ArticleInfo {
	slug: string;
	metadata: Metadata;
	content?: string;
}

// ページデータの型定義
export interface PageData {
	slug: string;
	articles: Article[];
	htmlContent: string;
	metadata: Metadata;
}

// 記事一覧ページのデータ型定義
export interface ArticleListData {
	articles: ArticleInfo[];
	totalPages: number;
	currentPage: number;
}

// トップページのデータ型定義
export interface TopPageData {
	content: ArticleInfo[];
}

// SvelteKitの型定義
declare global {
	namespace App {
		interface Error {}
		interface Locals {}
		interface PageData {}
		interface PageState {}
		interface Platform {}
	}
} 