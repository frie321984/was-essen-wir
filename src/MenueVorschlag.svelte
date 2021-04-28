<script>
	import { fade } from 'svelte/transition';
	import { menueVorschlag } from './Essen.js';
	import AndersUeberlegenButton from './AndersUeberlegenButton.svelte';

	let essenUnbekannt = true;

	const unsub = menueVorschlag.subscribe(v => essenUnbekannt = !v);
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
	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}
	}
	#aussuchen {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 93%;
	}
</style>

{#if !essenUnbekannt}
	<div id="aussuchen" in:fade="{{ duration: 500 }}">
		<h1>Heute essen wir <br />
			<span in:fade="{{ duration: 2000, delay: 1000 }}">
				{@html $menueVorschlag}
			</span>
		</h1>

		<AndersUeberlegenButton />
	</div>
{/if}