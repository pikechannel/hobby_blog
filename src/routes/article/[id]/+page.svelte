<script lang="ts">
	import type { PageData } from "$lib/types";
	import ArticlesPageTop from "$lib/components/articles/PageTop.svelte";
	import { PUBLIC_TITLE } from "$lib/constants";
	import { getArticlePath } from '$lib/store';
	import { get } from 'svelte/store';
	import { afterNavigate } from '$app/navigation';

	export let data: PageData;

	const al = get(getArticlePath);
	let tableOfContents: { id: string; text: string; level: number }[] = [];

	// $:リアクティブ宣言を使用して、dataの変更を監視
	$: currentIndex = al.findIndex(
		(article: { slug: string }) => article.slug === data.slug,
	);
	$: nextArticle =
		currentIndex > 0 ? al[currentIndex - 1]?.slug : null;
	$: previousArticle =
		currentIndex < al.length - 1
			? al[currentIndex + 1]?.slug
			: null;

	afterNavigate(() => {
		const article = document.getElementById('article');
		if (article) {
			const headings = article.querySelectorAll('h2, h3, h4');
			tableOfContents = Array.from(headings).map(heading => {
				const id = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
				heading.id = id;
				return {
					id,
					text: heading.textContent || '',
					level: parseInt(heading.tagName[1])
				};
			});
		}
	});
</script>

<div class="min-h-screen text-[#586e75]">
	<div class="relative">
		<div class="fixed inset-0 bg-[url('/img/alchemy-pattern.png')] opacity-5 bg-contain bg-center bg-no-repeat -z-10"></div>
		<div class="pt-8 pb-4 relative">
			<picture>
				<source srcset="/img/header_logo.webp" type="image/webp">
				<img class="m-auto w-48 hover:scale-105 transition-transform duration-300" src="/img/header_logo.png" alt="">
			</picture>
		</div>
		<main class="container mx-auto px-4 py-12 relative">
			<div class="max-w-7xl mx-auto">
				<div class="flex gap-8">
					<div class="flex-1">
						<article id="article" class="prose prose-lg max-w-none leading-[3] bg-white/90 backdrop-blur-sm rounded-xl border-2 border-[#93a1a1] p-8 shadow-lg">
							{@html data.htmlContent}
						</article>
						<div class="flex justify-between items-center mt-12 mb-8 p-4">
							{#if nextArticle}
								<a
									href="/article/{nextArticle}"
									class="flex flex-start items-center gap-2 px-6 py-3 text-[#268bd2] hover:text-[#2aa198] hover:bg-[#eee8d5] rounded-lg transition-all duration-200 font-medium"
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
									class="flex flex-end items-center gap-2 px-6 py-3 text-[#268bd2] hover:text-[#2aa198] hover:bg-[#eee8d5] rounded-lg transition-all duration-200 font-medium"
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

					{#if tableOfContents.length > 0}
						<nav class="w-64 sticky top-8 h-fit p-6 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-[#93a1a1] shadow-lg">
							<h2 class="text-lg font-bold mb-4 text-[#268bd2]">目次</h2>
							<ul class="space-y-2">
								{#each tableOfContents as item}
									<li class="pl-{(item.level - 2) * 4}">
										<a
											href="#{item.id}"
											class="text-[#268bd2] hover:text-[#2aa198] hover:underline transition-colors duration-200"
										>
											{item.text}
										</a>
									</li>
								{/each}
							</ul>
						</nav>
					{/if}
				</div>
			</div>
		</main>
	</div>

	<ArticlesPageTop title={PUBLIC_TITLE} />
</div>

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
