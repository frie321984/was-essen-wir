<script>
	import { fade } from 'svelte/transition';
	import { auswahl, zufall , entferne } from './Essen.js';
	
	let zufallsEssen;

	const unsub = auswahl.subscribe(value => {
		zufallsEssen = value;
	});

	let start = true;
	function starte() {
		start = false;
		zufall();
	}

	function neuWuerfeln(schmecktHeuteNicht) {
		entferne(schmecktHeuteNicht);
	}

</script>

<main>
	{#if start}
		<h1>Was essen wir heute?</h1>

		<button class="highlight" on:click={starte}>Sag's mir!</button>
	{:else}
		{#if !zufallsEssen}
			<h1>Jetzt weiß ich auch nix mehr... 😒</h1>
			
			<h2>Schau halt mal hier: 
				<a href="https://www.chefkoch.de/rezept-des-tages/">Rezept des Tages</a>
			</h2>
		{:else}
			<div id="aussuchen" transition:fade="{{ duration: 500 }}">
			<h1>Heute essen wir <br /> <span transition:fade="{{ duration: 2000, delay: 1000 }}">{@html zufallsEssen}</span></h1>

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

	h1 span {
		text-transform: none;
		font-weight: bold;
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
		h1 span {
			font-size: 3rem;
		}
	}
</style>