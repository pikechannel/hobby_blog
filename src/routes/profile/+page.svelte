<script lang="ts">
	import ArticlesPageTop from "$lib/components/articles/PageTop.svelte";
	import { PUBLIC_TITLE, PUBLIC_TWITTER_URL, PUBLIC_GITHUB_URL } from "$lib/constants";
	import FontAwesome from "$lib/components/FontAwesome.svelte";

	export let data;
</script>

<div class="min-h-screen text-[#586e75]">
	<div class="relative">
		<div class="fixed inset-0 bg-[url('/img/alchemy-pattern.png')] opacity-5 bg-contain bg-center bg-no-repeat -z-10"></div>
		<main class="container mx-auto px-4 py-12 relative">
			<div class="max-w-4xl mx-auto">
                
				<article class="prose prose-lg max-w-none leading-relaxed bg-white/95 backdrop-blur-sm rounded-xl border-2 border-[#93a1a1] p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
					<h1 class="text-4xl font-bold mb-12 text-[#268bd2] border-b-2 border-[#eee8d5] pb-4">{data.metadata.title}</h1>
					<div class="flex flex-col md:flex-row gap-8 items-start mb-12">
						<div class="w-48 h-48 rounded-full overflow-hidden border-4 border-[#93a1a1] shadow-lg hover:shadow-xl transition-shadow duration-300">
							<picture>
								<source srcset="/img/profile.webp" type="image/webp">
								<img src="/img/profile.png" alt="プロフィール画像" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
							</picture>
						</div>
						<div class="flex-1">
							{@html data.htmlContent}
						</div>
					</div>
					<div class="mt-12 pt-8 border-t-2 border-[#eee8d5]">
						<h2 class="text-2xl font-bold mb-6 text-[#268bd2]">SNS</h2>
						<div class="flex gap-6">
							<a href="{PUBLIC_TWITTER_URL}" class="text-gray-600 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
								<FontAwesome icon="x" size="2x" brand={true} />
							</a>
							<a href="{PUBLIC_GITHUB_URL}" class="text-gray-600 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110">
								<FontAwesome icon="github" size="2x" brand={true} />
							</a>
						</div>
					</div>
				</article>
			</div>
		</main>
	</div>

	<ArticlesPageTop title={PUBLIC_TITLE} />
</div>

<style>
    :global(.prose) {
        color: #586e75;
    }

    :global(.prose h2) {
        color: #268bd2;
        font-size: 1.75rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        position: relative;
        padding-left: 1rem;
    }

    :global(.prose h2::before) {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(to bottom, #268bd2, #2aa198);
        border-radius: 2px;
    }

    :global(.prose p) {
        color: #586e75;
        line-height: 1.8;
        margin: 1.25rem 0;
    }

    :global(.prose ul) {
        list-style-type: none;
        padding-left: 1.5rem;
        margin: 1.25rem 0;
    }

    :global(.prose li) {
        color: #586e75;
        line-height: 1.8;
        margin: 0.75rem 0;
        position: relative;
        padding-left: 1.5rem;
    }

    :global(.prose li::before) {
        content: '•';
        position: absolute;
        left: 0;
        color: #268bd2;
        font-weight: bold;
    }

    :global(.prose a) {
        color: #268bd2;
        text-decoration: none;
        border-bottom: 1px solid #268bd2;
        transition: all 0.2s ease;
    }

    :global(.prose a:hover) {
        color: #2aa198;
        border-bottom-color: #2aa198;
    }
</style>