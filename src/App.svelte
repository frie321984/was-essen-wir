<script>
	import { fade } from 'svelte/transition';

	let meals = [ 
		 'Spinat, Kar&shy;toffel&shy;brei & Fisch&shy;stäb&shy;chen'
		, 'Ei&shy;er&shy;ku&shy;chen'
		, 'Brot'
		, 'Kai&shy;ser&shy;schmarrn'
		, 'Pizza'
		, 'Nudeln mit To&shy;ma&shy;ten&shy;sauce'
		, 'Brat&shy;kar&shy;toffeln'
		, 'Ge&shy;mü&shy;se&shy;sup&shy;pe'
		, 'Au&shy;ber&shy;gi&shy;nen ara&shy;bisch'
		, 'La&shy;sa&shy;gne'
		, 'Kä&shy;se&shy;spät&shy;zle'
		, 'Bur&shy;ger'
		, 'Milch&shy;reis'
		, 'Waffeln'
		, 'Ge&shy;mü&shy;se&shy;pfan&shy;ne'
		, 'Thai Aroi'
		, 'In&shy;disch be&shy;stel&shy;len'
		, 'Nu&shy;del&shy;suppe'
		, 'Ser&shy;vietten&shy;knö&shy;del'
		, 'Sa&shy;lat'
		, 'Penne mit Zu&shy;cchi&shy;ni'
		, 'Lin&shy;sen&shy;sup&shy;pe'
		, 'ge&shy;bra&shy;ten&shy;er Reis mit Ge&shy;mü&shy;se'
		, '"Blut&shy;suppe"'
		, 'Pick&shy;nick'
		, 'Ofen&shy;kar&shy;toffel mit Quark'
		, 'Lauch&shy;suppe'
		, 'Rahm&shy;wir&shy;sing'
		, 'Thai Ge&shy;mü&shy;se&shy;pfanne'
		, 'In&shy;dische Ge&shy;mü&shy;se&shy;pfanne'
		, 'Kür&shy;bis&shy;suppe'
		, 'Dö&shy;ner'
		, 'fal&shy;sches Früh&shy;stück'
		, 'Blu&shy;men&shy;kohl&shy;suppe'
		, 'Ge&shy;mü&shy;se&shy;auf&shy;lauf'
		, 'Ofen&shy;ge&shy;mü&shy;se'
		, 'Ros&shy;ma&shy;rin&shy;kar&shy;toffeln'
		, 'Kar&shy;tof&shy;fel&shy;gra&shy;tin'
	];

	// meals = meals.splice(0,2);

	let zufallsEssen;

	let start = true;
	function starte() {
		start = false;
	}

	function wuerfeln() {
		zufallsEssen = meals[Math.floor(Math.random() * meals.length)];
	}

	function neuWuerfeln(schmecktHeuteNicht) {
		meals = meals.filter(meal => meal != schmecktHeuteNicht);
		wuerfeln();
	}

	wuerfeln();

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