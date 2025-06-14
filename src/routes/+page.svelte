<script lang="ts">
	import ArticlesPageTop from '$lib/components/articles/PageTop.svelte';
	import { PUBLIC_TITLE } from '$lib/constants';
	import { get } from 'svelte/store';
	import { getArticlePath } from '$lib/store';

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

<div class="min-h-screen bg-gray-50">
	<div class="pt-5">
		<img class="m-auto" src="/img/header_logo.png" alt="">
	</div>
	<main class="container mx-auto px-4 py-12">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each articles.slice(0, currentPage * articlesPerPage) as article}
					<article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
						<a href="/article/{article.slug}" class="block p-6 flex flex-col flex-grow">
							<div class="flex flex-col flex-grow">
								<div class="h-32">
									<h2 class="text-xl font-bold text-gray-900 line-clamp-2 mb-4">
										{article.metadata.title}
									</h2>
									<p class="text-gray-600 line-clamp-3">
										{article.metadata.description}
									</p>
								</div>
								<div class="flex-grow"></div>
								<div class="space-y-4">
									<div class="flex flex-wrap gap-2">
										{#each article.metadata.tags as tag}
											<span class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
												{tag}
											</span>
										{/each}
									</div>
									<div class="flex items-center justify-between pt-4 border-t border-gray-100">
										<time class="text-sm text-gray-500">
											{new Date(article.metadata.date).toLocaleDateString('ja-JP', {
												year: 'numeric',
												month: 'long',
												day: 'numeric'
											})}
										</time>
										<span class="text-blue-600 text-sm font-medium">Read more →</span>
									</div>
								</div>
							</div>
						</a>
					</article>
				{/each}
			</div>

			{#if hasMore}
				<div class="text-center mt-12">
					<button
						on:click={loadMore}
						class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
					>
						Load More Articles
					</button>
				</div>
			{/if}
		</div>
	</main>

	<ArticlesPageTop title={PUBLIC_TITLE} />
</div>