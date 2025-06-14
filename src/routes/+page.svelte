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

<div class="min-h-screen text-[#586e75]">
	<div class="relative">
		<div class="fixed inset-0 bg-[url('/img/alchemy-pattern.png')] opacity-5 bg-contain bg-center bg-no-repeat -z-10"></div>
		<div class="pt-8 pb-4 relative">
			<img class="m-auto w-48 hover:scale-105 transition-transform duration-300" src="/img/header_logo.png" alt="">
		</div>
		<main class="container mx-auto px-4 py-12 relative">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each articles.slice(0, currentPage * articlesPerPage) as article}
						<article class="group bg-white/90 backdrop-blur-sm rounded-xl border-2 border-[#93a1a1] hover:border-[#268bd2] transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
							<a href="/article/{article.slug}" class="block p-6 flex flex-col flex-grow">
								<div class="flex flex-col flex-grow">
									<div class="h-32">
										<h2 class="text-xl font-bold text-[#268bd2] group-hover:text-[#2aa198] line-clamp-2 mb-4 transition-colors duration-200">
											{article.metadata.title}
										</h2>
										<p class="text-[#657b83] line-clamp-3">
											{article.metadata.description}
										</p>
									</div>
									<div class="flex-grow"></div>
									<div class="space-y-4">
										<div class="flex flex-wrap gap-2">
											{#each article.metadata.tags as tag}
												<span class="px-3 py-1 bg-[#eee8d5] text-[#268bd2] rounded-full text-sm font-medium border border-[#93a1a1]">
													{tag}
												</span>
											{/each}
										</div>
										<div class="flex items-center justify-between pt-4 border-t border-[#eee8d5]">
											<time class="text-sm text-[#93a1a1]">
												{new Date(article.metadata.date).toLocaleDateString('ja-JP', {
													year: 'numeric',
													month: 'long',
													day: 'numeric'
												})}
											</time>
											<span class="text-[#268bd2] text-sm font-medium group-hover:text-[#2aa198] transition-colors duration-200">Read more →</span>
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
							class="inline-flex items-center px-8 py-4 bg-[#268bd2] text-white rounded-lg hover:bg-[#2aa198] transition-all duration-200 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-[#268bd2]/20"
						>
							Load More Articles
						</button>
					</div>
				{/if}
			</div>
		</main>
	</div>

	<ArticlesPageTop title={PUBLIC_TITLE} />
</div>