<script lang="ts">
	export let title: string;
	export let htmlContent: string;
</script>

<article class="prose prose-lg max-w-none leading-relaxed bg-white/95 backdrop-blur-sm rounded-xl border-2 border-[#93a1a1] p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
	<h1 class="text-4xl font-bold mb-12 text-[#268bd2] border-b-2 border-[#eee8d5] pb-4">{title}</h1>
	<div class="space-y-8">
		{@html htmlContent}
	</div>
	<slot />
</article> 