<script>
	import Materials from '$components/Materials.svelte';
	import Totals from '$components/Totals.svelte';
	import Chart from '$components/Chart.svelte';
</script>

<main class="row wrap full">
	<div class="row wfull hfull">
		<div class="col w2/3 hfull">
			<div class="col wfull">
				<Materials />
			</div>

			<div class="col wfull hfull">
				<Totals />
			</div>
		</div>

		<div class="col w1/3 hfull">
			<Chart />
		</div>
	</div>
</main>

<style lang="postcss">
	div {
		gap: 2em;
	}
</style>
