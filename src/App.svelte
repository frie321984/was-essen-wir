<script>
	let meals = [ 
		 'Spinat, Kartoffelbrei & Fischstäbchen'
		, 'Eierkuchen'
		, 'Brot'
		, 'Kaiserschmarrn'
		, 'Pizza'
		, 'Nudeln mit Tomatensauce'
		, 'Bratkartoffeln'
		, 'Gemüsesuppe'
		, 'Auberginen arabisch'
		, 'Lasagne'
		, 'Käsespätzle'
		, 'Burger'
		, 'Milchreis'
		, 'Waffeln'
		, 'Gemüsepfanne'
		, 'Thai Aroi'
		, 'Indisch bestellen'
		, 'Nudelsuppe'
		, 'Serviettenknödel'
		, 'Salat'
		, 'Penne mit Zucchini'
		, 'Linsensuppe'
		, 'gebratener Reis mit Gemüse'
		, '"Blutsuppe"'
		, 'Picknick'
		, 'Ofenkartoffel mit Quark'
		, 'Lauchsuppe'
		, 'Rahmwirsing'
		, 'Thai Gemüsepfanne'
		, 'Indische Gemüsepfanne'
		, 'Kürbissuppe'
		, 'Döner'
		, 'falsches Frühstück'
		, 'Blumenkohlsuppe'
		, 'Gemüseauflauf'
		, 'Ofengemüse'
		, 'Rosmarinkartoffeln'
	];

	// meals = meals.splice(0,2);

	let raus = [];

	let zufallsEssen;

	function wuerfeln() {
		zufallsEssen = meals[Math.floor(Math.random() * meals.length)];
	}

	function neuWuerfeln(schmecktHeuteNicht) {
		meals = meals.filter(meal => meal != schmecktHeuteNicht);
		raus.push(schmecktHeuteNicht);
		raus = raus;
		console.log(raus);
		wuerfeln();
	}

	wuerfeln();
</script>

<main>
	{#if !zufallsEssen}
		<h1>Jetzt weiß ich auch nix mehr... 😒</h1>
		
		<h2>Schau halt mal hier: 
			<a href="https://www.chefkoch.de/rezept-des-tages/">Rezept des Tages</a>
		</h2>
	{:else}
		<div id="aussuchen">
		<h1>Heute essen wir <br /> <span>{zufallsEssen}</span></h1>

		<button on:click={neuWuerfeln(zufallsEssen)}>
			Nee, was andreres
		</button>
		</div>
	{/if}
	
	{#if raus.length>0}
		<div id='aussortiert'>
		{#each raus as x}
			<p>{x}</p>
		{/each}
		</div>
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

	#aussortiert p {
		text-decoration: line-through;
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
			line-break: anywhere;
			font-size: 3rem;
		}
	}
</style>