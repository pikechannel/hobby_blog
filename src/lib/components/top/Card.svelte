<script lang="ts">
	import type { Article } from '$lib/types';

	export let article: Article;
</script>

<a 
    href="/article/{article.slug}" 
    class="w-full h-32 border-1 rounded-lg flex items-center mt-5 p-3 hover:bg-gray-50 transition-colors"
>
    <div class="w-36 h-25 flex-shrink-0">
        <img 
            src={article.metadata.thumbnail} 
            alt={article.metadata.title}
            class="object-cover w-36 min-w-36 h-25 rounded"
        />
    </div>
    <div class="break-all ml-5">
        <h3 class="font-medium text-lg mb-2">{article.metadata.title}</h3>
        <p class="text-gray-600 line-clamp-2">{article.metadata.description}</p>
    </div>
</a>
