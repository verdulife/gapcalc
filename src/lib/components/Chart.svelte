<script>
	import { User } from '$lib/stores';

	$: paperWidth = $User.material.width;
	$: printWidth = $User.width;
	$: percentage = `${Math.round((printWidth / paperWidth) * 100)}%`;
</script>

<section class="col jbetween acenter full">
	<small class="wfull">USO DEL PAPEL</small>

	<div class="chart row fcenter wfull" style:--percentage={percentage}>
		<h1 class="row fcenter full"><b>{percentage}</b></h1>
	</div>

	<ul class="col wfull">
		<li class="col wfull">
			<small>TAMAÑO DEL PAPEL</small>
			<h1>{paperWidth} mm</h1>
		</li>

		<li class="col wfull">
			<small>TAMAÑO DE LA IMPRESIÓN</small>
			<h1>{printWidth} mm</h1>
		</li>
	</ul>
</section>

<style lang="postcss">
	section {
		gap: 2em;
		background-color: hsl(var(--base-900-hsl), 0.7);
		backdrop-filter: blur(0.5em);
		border: 1px solid var(--base-600);
		border-radius: 1em;
		padding: 2em;
	}

	.chart {
		--percentage: 0%;
		width: 80%;
		background: conic-gradient(var(--accent) var(--percentage), var(--base-600) var(--percentage));
		aspect-ratio: 1;
		border-radius: 50%;
		padding: 2em;

		& h1 {
			background-color: var(--base-900);
			border-radius: 50%;
		}
	}

	ul {
		gap: 2em;
	}

	li {
		border-top: 1px solid var(--base-600);
		padding-top: 2em;
	}

	small {
		font-family: var(--font-title);
		color: var(--accent);
		text-shadow: 0 0 1em var(--accent);
	}
</style>
