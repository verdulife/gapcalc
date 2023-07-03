<script>
	import { Materials, User } from '$lib/stores';
	import { constrains } from '$lib/utils';

	function forceMinWidth() {
		if ($User.width < constrains.min_width) $User.width = constrains.min_width;
	}

	function forceMinHeight() {
		if ($User.height < constrains.min_height) $User.height = constrains.min_height;
	}

	$: if ($User.width > $User.material.width - constrains.width_loss)
		$User.width = $User.material.width - constrains.width_loss;
	$: if ($User.height > $User.material.height) $User.height = $User.material.height;
</script>

<section class="col wfull">
	<select class="wfull" id="materials" bind:value={$User.material}>
		{#each $Materials as material}
			<option value={material}>{material.name} ({material.width}mm)</option>
		{/each}
	</select>
</section>

<section class="col full">
	<main class="col jcenter full">
		<label class="col wfull" for="width">
			<small>ANCHURA</small>

			<div class="wrapper row wfull">
				<input
					class="wfull"
					type="number"
					min={0}
					max={$User.material.width - constrains.width_loss}
					bind:value={$User.width}
					on:change={forceMinWidth}
				/>

				<div class="units row wfull">
					<span class="invisible">{$User.width}</span>
					<span class="units-value"> mm</span>
				</div>
			</div>

			<input
				class="wfull"
				id="width"
				type="range"
				min={0}
				max={$User.material.width - constrains.width_loss}
				bind:value={$User.width}
				on:change={forceMinWidth}
				tabindex="-1"
			/>
		</label>

		<label class="col wfull" for="height">
			<small>ALTURA</small>

			<div class="wrapper row wfull">
				<input
					class="wfull"
					type="number"
					min={0}
					max={$User.material.height}
					bind:value={$User.height}
					on:change={forceMinHeight}
				/>

				<div class="units row wfull">
					<span class="invisible">{$User.height}</span>
					<span class="units-value"> mm</span>
				</div>
			</div>

			<input
				class="wfull"
				id="height"
				type="range"
				min={0}
				max={$User.material.height}
				bind:value={$User.height}
				on:change={forceMinHeight}
				tabindex="-1"
			/>
		</label>
	</main>
</section>

<style lang="postcss">
	section {
		background-color: hsl(var(--base-900-hsl), 0.7);
		backdrop-filter: blur(0.5em);
		border: 1px solid var(--base-600);
		border-radius: 1em;

		&:first-of-type {
			position: relative;

			&:after {
				content: 'ABRIR';
				position: absolute;
				top: 1em;
				right: 1em;
				height: calc(100% - 2em);
				display: flex;
				align-items: center;
				background-color: var(--accent);
				font-family: var(--font-title);
				color: var(--alt);
				border-radius: 0.5em;
				padding: 0 2em;
				pointer-events: none;
			}
		}
	}

	select {
		cursor: pointer;
		font-size: var(--font-xl);
		border: none;
		padding: 0.5em 1em;

		&:focus,
		&:active {
			box-shadow: none;
		}
	}

	main {
		gap: 2em;
		padding: 2em;
	}

	small {
		font-size: var(--font-xs);
		font-family: var(--font-title);
		color: var(--accent);
		text-shadow: 0 0 1em var(--accent);
	}

	.wrapper {
		position: relative;
	}

	input[type='number'] {
		font-size: var(--font-2xl);
		background-color: transparent;
		border: none;

		&:focus,
		&:active {
			box-shadow: none;
		}

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}

	.units {
		position: absolute;
		top: 0;
		left: 0;
		right: 10px;
		bottom: 0;
		display: flex;
		overflow: hidden;
		pointer-events: none;

		& span {
			font-size: var(--font-2xl);
		}
	}

	.invisible {
		visibility: hidden;
	}

	.units-value {
		white-space: pre;
	}

	input[type='range'] {
		width: 100%;
		height: 2.5em;
		-webkit-appearance: none;
		overflow: hidden;
	}

	input[type='range']::-webkit-slider-thumb {
		cursor: pointer;
		position: relative;
		width: 1.5em;
		height: 2.5em;
		background: var(--accent);
		box-shadow: calc(-1.5em * 1) 0 0 var(--accent), calc(-1.5em * 2) 0 0 var(--accent),
			calc(-1.5em * 3) 0 0 var(--accent), calc(-1.5em * 4) 0 0 var(--accent),
			calc(-1.5em * 5) 0 0 var(--accent), calc(-1.5em * 6) 0 0 var(--accent),
			calc(-1.5em * 7) 0 0 var(--accent), calc(-1.5em * 8) 0 0 var(--accent),
			calc(-1.5em * 9) 0 0 var(--accent), calc(-1.5em * 10) 0 0 var(--accent),
			calc(-1.5em * 11) 0 0 var(--accent), calc(-1.5em * 12) 0 0 var(--accent),
			calc(-1.5em * 13) 0 0 var(--accent), calc(-1.5em * 14) 0 0 var(--accent),
			calc(-1.5em * 15) 0 0 var(--accent), calc(-1.5em * 16) 0 0 var(--accent),
			calc(-1.5em * 17) 0 0 var(--accent), calc(-1.5em * 18) 0 0 var(--accent),
			calc(-1.5em * 19) 0 0 var(--accent), calc(-1.5em * 20) 0 0 var(--accent),
			calc(-1.5em * 21) 0 0 var(--accent), calc(-1.5em * 22) 0 0 var(--accent),
			calc(-1.5em * 23) 0 0 var(--accent), calc(-1.5em * 24) 0 0 var(--accent),
			calc(-1.5em * 25) 0 0 var(--accent), calc(-1.5em * 26) 0 0 var(--accent),
			calc(-1.5em * 27) 0 0 var(--accent), calc(-1.5em * 28) 0 0 var(--accent),
			calc(-1.5em * 29) 0 0 var(--accent), calc(-1.5em * 30) 0 0 var(--accent),
			calc(-1.5em * 31) 0 0 var(--accent), calc(-1.5em * 32) 0 0 var(--accent),
			calc(-1.5em * 33) 0 0 var(--accent), calc(-1.5em * 34) 0 0 var(--accent),
			calc(-1.5em * 35) 0 0 var(--accent), calc(-1.5em * 36) 0 0 var(--accent),
			calc(-1.5em * 37) 0 0 var(--accent), calc(-1.5em * 38) 0 0 var(--accent),
			calc(-1.5em * 39) 0 0 var(--accent), calc(-1.5em * 40) 0 0 var(--accent),
			calc(-1.5em * 41) 0 0 var(--accent), calc(-1.5em * 42) 0 0 var(--accent),
			calc(-1.5em * 43) 0 0 var(--accent), calc(-1.5em * 44) 0 0 var(--accent),
			calc(-1.5em * 45) 0 0 var(--accent), calc(-1.5em * 46) 0 0 var(--accent),
			calc(-1.5em * 47) 0 0 var(--accent), calc(-1.5em * 48) 0 0 var(--accent),
			calc(-1.5em * 49) 0 0 var(--accent), calc(-1.5em * 50) 0 0 var(--accent),
			calc(-1.5em * 51) 0 0 var(--accent), calc(-1.5em * 52) 0 0 var(--accent),
			calc(-1.5em * 53) 0 0 var(--accent), calc(-1.5em * 54) 0 0 var(--accent),
			calc(-1.5em * 55) 0 0 var(--accent), calc(-1.5em * 56) 0 0 var(--accent),
			calc(-1.5em * 57) 0 0 var(--accent), calc(-1.5em * 58) 0 0 var(--accent),
			calc(-1.5em * 59) 0 0 var(--accent), calc(-1.5em * 60) 0 0 var(--accent),
			calc(-1.5em * 61) 0 0 var(--accent), calc(-1.5em * 62) 0 0 var(--accent),
			calc(-1.5em * 63) 0 0 var(--accent), calc(-1.5em * 64) 0 0 var(--accent),
			calc(-1.5em * 65) 0 0 var(--accent), calc(-1.5em * 66) 0 0 var(--accent),
			calc(-1.5em * 67) 0 0 var(--accent), calc(-1.5em * 68) 0 0 var(--accent),
			calc(-1.5em * 69) 0 0 var(--accent), calc(-1.5em * 70) 0 0 var(--accent),
			calc(-1.5em * 71) 0 0 var(--accent), calc(-1.5em * 72) 0 0 var(--accent),
			calc(-1.5em * 73) 0 0 var(--accent), calc(-1.5em * 74) 0 0 var(--accent),
			calc(-1.5em * 75) 0 0 var(--accent), calc(-1.5em * 76) 0 0 var(--accent),
			calc(-1.5em * 77) 0 0 var(--accent), calc(-1.5em * 78) 0 0 var(--accent),
			calc(-1.5em * 79) 0 0 var(--accent), calc(-1.5em * 80) 0 0 var(--accent),
			calc(-1.5em * 81) 0 0 var(--accent), calc(-1.5em * 82) 0 0 var(--accent),
			calc(-1.5em * 83) 0 0 var(--accent), calc(-1.5em * 84) 0 0 var(--accent),
			calc(-1.5em * 85) 0 0 var(--accent), calc(-1.5em * 86) 0 0 var(--accent),
			calc(-1.5em * 87) 0 0 var(--accent), calc(-1.5em * 88) 0 0 var(--accent),
			calc(-1.5em * 89) 0 0 var(--accent), calc(-1.5em * 90) 0 0 var(--accent),
			calc(-1.5em * 91) 0 0 var(--accent), calc(-1.5em * 92) 0 0 var(--accent),
			calc(-1.5em * 93) 0 0 var(--accent), calc(-1.5em * 94) 0 0 var(--accent),
			calc(-1.5em * 95) 0 0 var(--accent), calc(-1.5em * 96) 0 0 var(--accent),
			calc(-1.5em * 97) 0 0 var(--accent), calc(-1.5em * 98) 0 0 var(--accent),
			calc(-1.5em * 99) 0 0 var(--accent);
		-webkit-appearance: none;
	}
</style>
