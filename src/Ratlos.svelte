<script>
import { fade } from 'svelte/transition';
	import { menueVorschlag, waehleZufaelligesMenue , ablehnenUndNeuVorschlagen } from './Essen.js';
	import MenueVorschlag from './MenueVorschlag.svelte';
	import AndersUeberlegenButton from './AndersUeberlegenButton.svelte';
	import Button from './Button.svelte';


	let essenUnbekannt = true;

	const unsub = menueVorschlag.subscribe(v => essenUnbekannt = !v);

</script>

{#if essenUnbekannt}
	<h1>Jetzt weiß ich auch nix mehr... 😒</h1>
				
	<h2>Schau halt mal hier: 
		<a href="https://www.chefkoch.de/rezept-des-tages/"
			>Rezept des Tages</a>
	</h2>
{/if}