<script lang="ts">
	import FontAwesome from '$lib/components/FontAwesome.svelte';
    import { PUBLIC_GITHUB_URL, PUBLIC_TWITTER_URL } from '$lib/constants';
</script>

<section class="bg-white rounded-lg shadow-sm p-4 mb-4 ">
	<div class="mb-4">
		<picture>
			<source srcset="/img/profile.webp" type="image/webp">
			<img 
				src="/img/profile.png" 
				alt="プロフィール画像"
				loading="lazy"
				class="w-16 h-16 rounded-full mx-auto"
			/>
		</picture>
	</div>
	
	<div class="space-y-2 text-xs">
		<span>名前: <b>Pike</b></span>
		<div class="grid grid-cols-[auto_1fr]">
			<div class="w-10">趣味：</div>
			<div>ゲーム・アニメ鑑賞・ラーメン巡り</div>
		</div>
		<div class="flex items-center space-x-4 mt-4">
			<a href="{PUBLIC_GITHUB_URL}" target="_blank" rel="noopener noreferrer">
				<FontAwesome icon="github" size="lg" brand={true} />
			</a>
			<a href="{PUBLIC_TWITTER_URL}" target="_blank" rel="noopener noreferrer">
				<FontAwesome icon="twitter" size="lg" brand={true} />
			</a>
		</div>
	</div>
</section>