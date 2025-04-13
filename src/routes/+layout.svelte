<script>
    import { PUBLIC_TITLE } from "$env/static/public"
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import "$lib/css/app.css";

    let title = PUBLIC_TITLE;
</script>


<Header />

<slot />

<Footer title={title} />