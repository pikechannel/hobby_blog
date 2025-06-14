<script lang="ts">
	import FontAwesome from '$lib/components/FontAwesome.svelte';
    import { PUBLIC_GITHUB_URL, PUBLIC_TWITTER_URL } from '$lib/constants';

    export let data;

</script>

<div class="max-w-4xl mx-auto px-4 py-12">
	<div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
		<!-- ヘッダー部分 -->
		<div class="relative h-56 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<div class="absolute -bottom-16 left-8">
                <picture>
                    <source srcset="{data.metadata.thumbnail}" type="image/webp">
                    <img 
                        src="{data.metadata.thumbnail_webp}" 
                        alt="プロフィール画像"
                        loading="lazy"
                        class="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
                    />
                </picture>
			</div>
		</div>

		<!-- プロフィール情報 -->
		<div class="pt-20 px-8 pb-8">
			<h1 class="text-3xl font-bold text-gray-900 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Pike</h1>

			<!-- ソーシャルリンク -->
			<div class="flex gap-4 mt-4">
				<a href="{PUBLIC_TWITTER_URL}" class="text-gray-600 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
					<FontAwesome icon="x" size="2x" brand={true} />
				</a>
                <a href="{PUBLIC_GITHUB_URL}" class="text-gray-600 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110">
					<FontAwesome icon="github" size="2x" brand={true} />
				</a>
			</div>

			<div id="content" class="mt-8">
				{@html data.htmlContent}
			</div>
		</div>
	</div>
</div>

<style>
    :global(#content h2) {
        font-size: 1.25rem;
        font-weight: 600;
        color: #111827;
        margin-bottom: 1rem;
        position: relative;
        padding-left: 1rem;
    }

    :global(#content h2::before) {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(to bottom, #6366f1, #a855f7);
        border-radius: 2px;
    }

    :global(#content p) {
        color: #4B5563;
        line-height: 1.75;
        margin: 1rem 0;
    }

    :global(#content ul) {
        list-style-type: none;
        padding-left: 1.5rem;
        margin: 1rem 0;
    }

    :global(#content li) {
        color: #4B5563;
        line-height: 1.75;
        margin: 0.5rem 0;
        position: relative;
        padding-left: 1.5rem;
    }

    :global(#content li::before) {
        content: '•';
        position: absolute;
        left: 0;
        color: #6366f1;
        font-weight: bold;
    }
</style>