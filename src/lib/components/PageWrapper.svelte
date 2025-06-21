<script lang="ts">
	import ArticlesPageTop from "$lib/components/articles/PageTop.svelte";
	export let publicTitle: string;
</script>

<div class="min-h-screen text-[#586e75]">
	<div class="relative">
		<div class="fixed inset-0 bg-[url('/img/alchemy-pattern.png')] opacity-5 bg-contain bg-center bg-no-repeat -z-10"></div>
		<main class="container mx-auto px-4 py-12 relative">
			<slot />
		</main>
	</div>
	<ArticlesPageTop title={publicTitle as any} />
</div> 