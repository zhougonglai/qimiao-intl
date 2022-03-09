<script>
	import { getSubject } from '$services';
	import { onMount } from 'svelte';

	onMount(() => {
		getSubject();
	});
</script>
