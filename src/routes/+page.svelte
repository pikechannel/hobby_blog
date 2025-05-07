<script lang="ts">
    import Card from "$lib/components/top/Card.svelte";
    import Calendar from "$lib/components/top/Calendar.svelte";

    interface Metadata {
        title: string;
        date: string;
        category: string;
        description: string;
        thumbnail: string;
    }

    interface ArticleInfo {
        slug: string;
        metadata: Metadata;
    }

    interface PageData {
        content: ArticleInfo[];
    }

    export let data: PageData;
    
    const ITEMS_PER_PAGE = 10;
    let currentPage = 1;
    let articles = data.content.slice(0, ITEMS_PER_PAGE);
    let hasMore = data.content.length > ITEMS_PER_PAGE;

    function loadMore() {
        currentPage++;
        const newCount = currentPage * ITEMS_PER_PAGE;
        articles = data.content.slice(0, newCount);
        hasMore = data.content.length > newCount;
    }
</script>

<section class="w-full">
    <img
        src="/img/header_logo.png"
        alt="Blog Header"
        srcset="/img/header_logo.webp"
        class="m-auto"
    />
</section>

<div class="flex mt-5">
    <main class="w-3/4">
        <section>
            <section class="px-6">
                <h2 class="hina-mincho-regular text-3xl">記事一覧</h2>
                {#each articles as article (article.slug)}
                    <Card {article} />
                {/each}
            </section>
            
            {#if hasMore}
                <section class="p-6">
                    <div class="text-center">
                        <button
                            class="rounded-full w-64 h-12 text-white bg-blue-400 hover:bg-blue-500 transition-colors"
                            on:click={loadMore}
                        >
                            もっとみる
                        </button>
                    </div>
                </section>
            {/if}
        </section>
    </main>

    <aside class="w-1/4">
        <Calendar />
    </aside>
</div>

<style>
    .show {
        display: none;
    }
</style>
