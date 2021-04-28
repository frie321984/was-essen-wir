<script>
	import { fade } from 'svelte/transition';
	import { waehleZufaelligesMenue } from './Essen.js';
	import Ratlos from './Ratlos.svelte';
	import MenueVorschlag from './MenueVorschlag.svelte';
	import AndersUeberlegenButton from './AndersUeberlegenButton.svelte';

	let start = true;
	function starte() {
		start = false;
		waehleZufaelligesMenue();
	}
</script>

	{#if start}
		<h1>Was essen wir heute?</h1>

		<button on:click={starte}>Sag's mir!</button>
	{:else}
		<Ratlos />
		<MenueVorschlag />
	{/if}