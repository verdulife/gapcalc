<script>
	import Image from '$components/Image.svelte';
	import LogoVertical from '$icons/LogoVertical.svelte';
</script>

<nav class="col jbetween acenter hfull">
	<ul class="col acenter">
		<li class="row">
			<a href="/plotter">
				<Image src="/plotter.svg" width="20" alt="Plotter" />
			</a>
		</li>
		<li class="row">
			<a href="/print">
				<Image src="/print.svg" width="20" alt="Impresión" />
			</a>
		</li>
		<li class="row">
			<a href="/merch">
				<Image src="/merch.svg" width="20" alt="Merch" />
			</a>
		</li>
		<li class="row">
			<a href="/options">
				<Image src="/options.svg" width="20" alt="Opciones" />
			</a>
		</li>
	</ul>

	<LogoVertical width="10" />
</nav>

<style lang="postcss">
	nav {
		gap: 2em;
		background-color: hsl(var(--base-900-hsl), 0.7);
		backdrop-filter: blur(0.5em);
		border: 1px solid var(--base-600);
		border-bottom: 1em solid var(--accent);
		border-radius: 1em;
		padding: 2em 0;
	}

	a {
		padding: 1.5em 2em;
	}
</style>
