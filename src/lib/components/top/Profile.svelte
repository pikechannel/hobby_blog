<script lang="ts">
	import FontAwesome from '$lib/components/FontAwesome.svelte';
</script>

<section class="bg-white rounded-lg shadow-sm p-4 mb-4 text-center">
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
	
	<div class="space-y-2">
		<div class="flex items-center space-x-2">
			<FontAwesome icon="user" size="sm" />
			<span>名前: Pike</span>
		</div>
		<div class="flex items-center space-x-2">
			<FontAwesome icon="calendar" size="sm" />
			<span>経験: 5年</span>
		</div>
		<div class="flex items-center space-x-2">
			<FontAwesome icon="envelope" size="sm" />
			<span>メール: example@example.com</span>
		</div>
		<div class="flex items-center space-x-4 mt-4">
			<a href="https://github.com/pikechannel" target="_blank" rel="noopener noreferrer">
				<FontAwesome icon="github" size="lg" brand={true} />
			</a>
			<a href="https://twitter.com/pike45587221" target="_blank" rel="noopener noreferrer">
				<FontAwesome icon="twitter" size="lg" brand={true} />
			</a>
		</div>
	</div>
</section>