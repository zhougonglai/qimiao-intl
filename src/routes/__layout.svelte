<script>
	import { page } from '$app/stores';
	import '../app.scss';
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte';
</script>

<Header />

<main
	class:has-background={$page.url.pathname === '/'}
	class="flex flex-col items-center overflow-x-hidden"
>
	<slot />
</main>

<Footer />
