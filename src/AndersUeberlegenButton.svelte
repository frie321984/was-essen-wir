<script>
	import { menueVorschlag, waehleZufaelligesMenue , ablehnenUndNeuVorschlagen } from './Essen.js';
	import Button from './Button.svelte';
	
	let zufallsEssen;

	const unsub = menueVorschlag.subscribe(value => {
		zufallsEssen = value;
	});

	function neuWuerfeln(schmecktHeuteNicht) {
		ablehnenUndNeuVorschlagen(schmecktHeuteNicht);
	}

</script>

<main>
	<Button on:click={neuWuerfeln(zufallsEssen)}>
		Nee, was andreres
	</Button>
</main>
