<script>
	import Header from '$lib/header/index.svelte';
	import { page } from '$app/stores';
	import '../app.scss';
	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<Header />

<main
	class:has-background={$page.url.pathname === '/'}
	class="flex flex-col items-center overflow-x-hidden"
>
	<slot />
</main>
