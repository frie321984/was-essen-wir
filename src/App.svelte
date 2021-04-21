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

	let zufallsEssen;

	function wuerfeln() {
		zufallsEssen = meals[Math.floor(Math.random() * meals.length)];
	}
	wuerfeln();
</script>

<main>
	<h1>Heute essen wir <br /> <span>{zufallsEssen}</span></h1>
	<button on:click={wuerfeln}>
		Nee, was andreres
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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