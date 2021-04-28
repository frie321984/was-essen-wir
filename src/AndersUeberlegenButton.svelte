<script>
	import { ablehnenUndNeuVorschlagen } from './Essen.js';
	import Button from './Button.svelte';
</script>

<main>
	<Button on:click={ablehnenUndNeuVorschlagen}>
		Nee, was andreres
	</Button>
</main>
