<script>
	import { fade } from 'svelte/transition';
	import { menueVorschlag } from './Essen.js';
	import AndersUeberlegenButton from './AndersUeberlegenButton.svelte';

	let display;
	menueVorschlag.subscribe(v => display = v);
</script>

<style>
	span {
		text-transform: none;
		font-weight: bold;
	}
	#aussuchen {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 93%;
	}
</style>

{#if display}
	<div id="aussuchen" in:fade="{{ duration: 500 }}">
		<h1>Heute essen wir <br />
			<span in:fade="{{ duration: 2000, delay: 1000 }}">
			{#if display.html}
				{@html display.html}
			{:else}
				{display.name}
			{/if}
			</span>
		</h1>

		<AndersUeberlegenButton />
	</div>
{/if}