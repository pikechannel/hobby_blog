<script>
    import { PUBLIC_TITLE } from "$env/static/public"
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import "$lib/css/app.css";

    let title = PUBLIC_TITLE;

    export const prerender = true;
</script>


<Header />

<slot />

<Footer title={title} />