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
		, 'Indisch'
		, 'Nudelsuppe'
		, 'Serviettenknödel'
		, 'Salat'
		, 'Penne mit Zucchini'
		, 'Linsensuppe'
		, 'gebratener Reis mit Gemüse'
		, '"Blutsuppe"'
		, 'Picknick'
		, 'Ofenkartoffel mit Quark'
	];

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
		<p>Jetzt weiß ich auch nix mehr... 😒</p>
	{:else}
		<h1>Heute essen wir <br /> <span>{zufallsEssen}</span></h1>
		<button on:click={neuWuerfeln(zufallsEssen)}>
			Nee, was andreres
		</button>

		{#if raus.length>0}
			<div id='aussortiert'>
			{#each raus as x}
				<p>{x}</p>
			{/each}
			</div>
		{/if}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#aussortiert p {
		text-decoration: line-through;
	}
	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
		text-transform: uppercase;
	}
	h1 span {
		text-transform: none;
		font-weight: bold;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>