<script>
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} | Yossy's Tech Blog</title>
	<meta name="description" content={data.metadata.description} />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.description} />
	<meta property="og:site_name" content="Yossy's Tech Blog" />
	<meta property="og:url" content="/articles/{data.slug}" />
	<meta property="og:image" content="/{data.metadata.thumbnail}" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="mb-8">
		<img
			class="w-full h-96 object-cover rounded-lg shadow-lg"
			src={data.metadata.thumbnail}
			alt={data.metadata.title}
		/>
	</div>
	<h1 class="text-4xl font-bold mb-4">{data.metadata.title}</h1>
	<div class="flex items-center gap-4 mb-8">
		<p class="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
			{data.metadata.category}
		</p>
		<p class="text-gray-600">{data.metadata.date}</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4">
	<article id="article" class="prose prose-lg max-w-none leading-[3]">
		{@html data.htmlContent}
	</article>
</div>

<style>
	:global(#article > h2) {
		font-size: 1.5rem; /* 1.5rem (24px) */ 
	}

	:global(#article > h3) {
		font-size: 1.25rem; /* 1.25rem (20px) */
	}	

	:global(#article > h4) {
		font-size: 1.125rem; /* 1.125rem (18px) */
	}

	:global(#article > h5) {
		font-size: 1rem; /* 1rem (16px) */
	}

	:global(#article > h6) {
		font-size: 0.875rem; /* 0.875rem (14px) */
	}
	
</style>