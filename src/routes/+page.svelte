<script lang="ts">
	import type { PageData } from './$types';
	import ArticlesPageTop from '$lib/components/articles/PageTop.svelte';
	import { PUBLIC_TITLE } from '$lib/constants';
	import { get } from 'svelte/store';
	import { getArticlePath } from '$lib/store';

	export let data: PageData;

	const articles = get(getArticlePath) || [];
	let currentPage = 1;
	const articlesPerPage = 6;
	let hasMore = articles.length > articlesPerPage;

	function loadMore() {
		currentPage += 1;
		const newCount = currentPage * articlesPerPage;
		hasMore = articles.length > newCount;
	}
</script>

<ArticlesPageTop title={PUBLIC_TITLE} />

<div class="container mx-auto px-4 py-8">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each articles.slice(0, currentPage * articlesPerPage) as article}
			<a
				href="/article/{article.slug}"
				class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
			>
				<h2 class="text-xl font-bold mb-2">{article.metadata.title}</h2>
				<p class="text-gray-600 mb-4">{article.metadata.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each article.metadata.tags as tag}
						<span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tag}</span>
					{/each}
				</div>
				<p class="text-gray-500 text-sm mt-4">{article.metadata.date}</p>
			</a>
		{/each}
	</div>
	{#if hasMore}
		<div class="text-center mt-8">
			<button
				on:click={loadMore}
				class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
			>
				Load More
			</button>
		</div>
	{/if}
</div>

<style>
    .show {
        display: none;
    }
</style>
