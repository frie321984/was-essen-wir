<script>
	import { fade } from 'svelte/transition';
	import { menueVorschlag, waehleZufaelligesMenue , ablehnenUndNeuVorschlagen } from './Essen.js';
	import Ratlos from './Ratlos.svelte';
	import MenueVorschlag from './MenueVorschlag.svelte';
	
	let zufallsEssen;

	const unsub = menueVorschlag.subscribe(value => {
		zufallsEssen = value;
	});

	let start = true;
	function starte() {
		start = false;
		waehleZufaelligesMenue();
	}

	function neuWuerfeln(schmecktHeuteNicht) {
		ablehnenUndNeuVorschlagen(schmecktHeuteNicht);
	}

</script>

<main>
	{#if start}
		<h1>Was essen wir heute?</h1>

		<button class="highlight" on:click={starte}>Sag's mir!</button>
	{:else}
		{#if !zufallsEssen}
			<Ratlos />
		{:else}
			<div id="aussuchen" transition:fade="{{ duration: 500 }}">
				<h1>Heute essen wir <br /><MenueVorschlag /></h1>

				<button on:click={neuWuerfeln(zufallsEssen)}>
					Nee, was andreres
				</button>
			</div>
		{/if}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		height: 100%;
	}

	#aussuchen {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 93%;
	}

	button {
		background-color: #444;
		color: #bbb;
		border: 1px solid black;
		height: 4rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: 640px;
		}
	}
	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>