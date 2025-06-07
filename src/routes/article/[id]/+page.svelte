<script lang="ts">
	import type { PageData } from "$lib/types";
	import ArticlesPageTop from "$lib/components/articles/PageTop.svelte";
	import { PUBLIC_TITLE } from "$lib/constants";
	import { getArticlePath } from '$lib/store';
	import { get } from 'svelte/store';

	export let data: PageData;

	const al = get(getArticlePath);

	// $:リアクティブ宣言を使用して、dataの変更を監視
	$: currentIndex = al.findIndex(
		(article) => article.slug === data.slug,
	);
	$: nextArticle =
		currentIndex > 0 ? al[currentIndex - 1]?.slug : null;
	$: previousArticle =
		currentIndex < al.length - 1
			? al[currentIndex + 1]?.slug
			: null;
</script>

<svelte:head>
	<title>{data.metadata.title} | {PUBLIC_TITLE}</title>
	<meta name="description" content={data.metadata.description} />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.description} />
	<meta property="og:site_name" content="テストブログ" />
	<meta property="og:url" content="/articles/{data.slug}" />
	<meta property="og:image" content="/{data.metadata.thumbnail}" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
	/>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"
	></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"
	></script>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="mb-8">
		<img
			class="w-full h-96 object-cover rounded-lg shadow-lg"
			src={data.metadata.thumbnail}
			alt={data.metadata.title}
		/>
	</div>
	<h1 class="text-4xl font-bold mb-4">{data.metadata.title}</h1>
	<div class="flex items-center gap-4 mb-8">
		<p
			class="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
		>
			{data.metadata.category}
		</p>
		<p class="text-gray-600">{data.metadata.date}</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4">
	<article id="article" class="prose prose-lg max-w-none leading-[3]">
		{@html data.htmlContent}
	</article>
	<div class="flex justify-between items-center mt-12 mb-8 p-4">
		{#if nextArticle}
			<a
				href="/article/{nextArticle}"
				class="flex flex-start items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				次の記事
			</a>
		{:else}
			<div></div>
		{/if}
		{#if previousArticle}
			<a
				href="/article/{previousArticle}"
				class="flex flex-end items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
			>
				前の記事
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		{:else}
			<div></div>
		{/if}
	</div>
</div>

<ArticlesPageTop />

<style>
	:global(#article > h2) {
		font-size: 1.5rem;
	}

	:global(#article > h3) {
		font-size: 1.25rem;
	}

	:global(#article > h4) {
		font-size: 1.125rem;
	}

	:global(#article > h5) {
		font-size: 1rem;
	}

	:global(#article > h6) {
		font-size: 0.875rem;
	}
</style>
