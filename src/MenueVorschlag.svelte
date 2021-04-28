<script>
	import { fade } from 'svelte/transition';
	import { menueVorschlag } from './Essen.js';
	
	let zufallsEssen;

	const unsub = menueVorschlag.subscribe(value => {
		zufallsEssen = value;
	});
</script>

<style>
	span {
		text-transform: none;
		font-weight: bold;
		font-size: 3rem;
	}
	@media (max-width: 640px) {
		span {
			font-size: 2rem;
		}
	}
</style>

<span transition:fade="{{ duration: 2000, delay: 1000 }}">{@html zufallsEssen}</span>

