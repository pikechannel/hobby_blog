<script lang="ts">
	export let icon: string;
	export let size: string = '1x';
	export let color: string = 'currentColor';
	export let brand: boolean = false;

	$: iconClass = `${brand ? 'fab' : 'fas'} fa-${icon} fa-${size}`;
</script>

<i class={iconClass} style="color: {color}"></i> 