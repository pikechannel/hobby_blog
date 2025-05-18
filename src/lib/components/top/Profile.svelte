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
		<div class="">
			<div>趣味: ゲーム・酒・ラーメン</div>
		</div>
		<div class="text-right text-gray-500">
			<a href="/profile">プロフィールページはこちら</a>
		</div>
	</div>
</section>