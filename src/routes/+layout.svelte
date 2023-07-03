<script>
	import '$lib/startcss/startcss.css';
	import Nav from '$components/Nav.svelte';
</script>

<main class="row full">
	<Nav />
	<slot />
</main>

<style lang="postcss">
	main {
		gap: 2em;
		background: radial-gradient(
				ellipse at 0% 0%,
				hsl(var(--base-hsl), 0.1),
				hsl(var(--base-hsl), 0) 75%
			),
			radial-gradient(ellipse at 100% 0%, hsl(var(--base-hsl), 0.1), hsl(var(--base-hsl), 0) 75%),
			radial-gradient(ellipse at 50% 100%, hsl(var(--base-hsl), 0.1), hsl(var(--base-hsl), 0) 75%);
		padding: 2em;
	}
</style>
