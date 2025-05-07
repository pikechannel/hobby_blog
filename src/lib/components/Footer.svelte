<script>
    let props = $props();
    let title = props.title;

    const currentYear = new Date().getFullYear();
</script>


<footer>
	<p class="text-center">© Copyright {currentYear} <a href="/">{title}</a>.</p>
</footer>