<script lang="ts">
	import PageWrapper from "$lib/components/PageWrapper.svelte";
	import { PUBLIC_TITLE } from "$lib/constants";
	import ArticleLayout from "$lib/components/ArticleLayout.svelte";

	export let data;
</script>

<PageWrapper publicTitle={PUBLIC_TITLE}>
	<div class="max-w-4xl mx-auto">
		<ArticleLayout title={data.metadata.title ?? ''} htmlContent={data.htmlContent ?? ''} />
	</div>
</PageWrapper>

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
