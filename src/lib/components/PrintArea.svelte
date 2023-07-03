<script>
	let paperWidth = 1500;
	let printWidth = 650;
</script>

<section class="col jend wfull">
	<div class="paper full">
		<div class="print full" />
	</div>

	<div class="ruller wfull" />
	<div class="fives wfull" />
</section>

<style lang="postcss">
	section {
		position: relative;
		height: calc(100% - 2em);
		margin-top: 2em;
	}

	.paper {
		background-color: var(--base);
		border-radius: 0.5em 0.5em 0 0;
		padding: 1em 1em 0 1em;
		overflow: hidden;
	}

	.print {
		background-color: var(--accent);
		border-radius: 0.25em 0.25em 0 0;
	}

	.ruller {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 10%;
		background: repeating-linear-gradient(
			90deg,
			var(--base-600),
			var(--base-600) 2px,
			transparent 2px,
			transparent 8px
		);
	}

	.fives {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 15%;
		background: repeating-linear-gradient(
			90deg,
			var(--base-600),
			var(--base-600) 10px,
			transparent 10px,
			transparent 40px
		);
	}
</style>
