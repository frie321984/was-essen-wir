<script>
	import { fade } from 'svelte/transition';
	import { waehleZufaelligesMenue } from './Essen.js';
	import Ratlos from './Ratlos.svelte';
	import MenueVorschlag from './MenueVorschlag.svelte';
	import AndersUeberlegenButton from './AndersUeberlegenButton.svelte';
	import Button from './Button.svelte';

	let start = true;
	function starte() {
		start = false;
		waehleZufaelligesMenue();
	}
</script>

<main>
	{#if start}
		<h1>Was essen wir heute?</h1>

		<Button on:click={starte}>Sag's mir!</Button>
	{:else}
		<Ratlos />
		<MenueVorschlag />
	{/if}
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
		height: 96%;
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