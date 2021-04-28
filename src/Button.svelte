
<main>
	<button on:click>
		<slot></slot>
	</button>
</main>

<style>
	button {
		background-color: #444;
		color: #bbb;
		border: 1px solid black;
		height: 4rem;
	}
</style>