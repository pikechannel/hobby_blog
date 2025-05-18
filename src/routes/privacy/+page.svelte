<script lang="ts">
    export let data;
</script>

<div class="max-w-4xl mx-auto px-4 py-12">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-8">{data.metadata.title}</h1>
            <div id="content" class="prose prose-lg max-w-none">
                {@html data.htmlContent}
            </div>
        </div>
    </div>
</div>

<style>
    :global(#content h2) {
        font-size: 1.5rem;
        font-weight: 600;
        color: #111827;
        margin: 2rem 0 1rem;
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
