<script>
	import { User } from '$lib/stores';
	import { currency, calcPrice, calcPaperPrice, calcInkPrice, calcWithoutTax } from '$lib/utils';

	$: pvp = calcPrice({ height: $User.height, price: $User.material.price });
	$: paperPrice = calcPaperPrice({ height: $User.height, price: $User.material.price });
	$: inkPrice = calcInkPrice({ height: $User.height });
	$: linealPrice = calcWithoutTax(pvp);
</script>

<section class="col jcenter full">
	<article class="row wfull">
		<div class="col">
			<small>COSTE PAPEL</small>
			<h3>{currency(paperPrice)}</h3>
		</div>

		<div class="col">
			<small>COSTE TINTA</small>
			<h3>{currency(inkPrice)}</h3>
		</div>

		<div class="col">
			<small>PRECIO LINEAL</small>
			<h3>{currency(linealPrice)}</h3>
		</div>
	</article>

	<article class="row wfull">
		<div class="col">
			<small>PVP</small>
			<h1>{currency(pvp)}</h1>
		</div>
	</article>
</section>

<style lang="postcss">
	section {
		gap: 2em;
	}

	article {
		gap: 4em;
		padding: 0 2em;
	}

	div {
		padding-right: 4em;
		border-right: 1px solid var(--base-600);

		&:last-of-type {
			border-right: none;
		}
	}

	small {
		font-family: var(--font-title);
		color: var(--accent);
		text-shadow: 0 0 1em var(--accent);
	}

	h1 {
		font-size: var(--font-3xl);
	}
</style>
