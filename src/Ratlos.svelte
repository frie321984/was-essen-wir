<script>
	import { fade } from 'svelte/transition';
	import { menueVorschlag } from './Essen.js';

	let essenUnbekannt = true;
	const unsub = menueVorschlag.subscribe(v => essenUnbekannt = !v);
</script>
<style>
	p {
		font-weight: bold;
		font-size: 1rem;
	}
</style>

{#if essenUnbekannt}
	<h1>Jetzt weiß ich auch nix mehr... 😒</h1>
				
	<p>Schau halt mal hier:<br>
		<a href="https://www.chefkoch.de/rezept-des-tages/"
			>Rezept des Tages</a>
	</p>
{/if}