<script>
    import {mealList, same, zufall} from './Essen.js';

    let menu=[]
    let maxSuess = 1;
    let dbg=false;

    // disable output when not debugging
    if (!dbg) { 
        const noop = (m, ...opt)=> {}
        console.debug = noop
        console.info = noop
    }

    const neuesEssen =(bisherigesMenu=[], maxSuess1=maxSuess)=> {
        console.debug('bisher', bisherigesMenu.map(x => x.name || x.html))

        let gibtSchonGenugSuesskram = bisherigesMenu.filter(item => item.suess).length >= maxSuess1;
        let availableMeals = mealList
            .filter(x => bisherigesMenu.filter(y => same(x, y)).length == 0)
            .filter(x => !gibtSchonGenugSuesskram || !x.suess);
        console.debug(availableMeals.map(x => x.name || x.html))
        return zufall(availableMeals);
    }
    for (let i=0;i<7;i++) {
        menu[i] = neuesEssen(menu)
    }
    console.debug(menu)
</script>

<style>
    td, th {
        width: 14.2%;
    }
    td.suess {
        border: 1px solid red;
    }
    @media print {
        table button
        , h1
        { display:none;}
    }
</style>
<h1>Essensplan</h1>

<table>
    <tr>
        <th>Di</th>
        <th>Mi</th>
        <th>Do</th>
        <th>Fr</th>
        <th>Sa</th>
        <th>So</th>
        <th>Mo</th>
    </tr>
    <tr>
        {#each menu as item}
            <td class="{item.suess ? 'suess' : ''}">
                {#if item.html}
                    {@html item.html}
                {:else}
                    {item.name}
                {/if}
            </td>
        {/each }
    </tr>
    <tr>
        {#each menu as item, i}
            <td>
                <button on:click={() => {
                    menu[i] = neuesEssen(menu)
                }}>🆕</button>
            </td>
        {/each }
    </tr>
</table>

<p class="suess">
    <label for="maxSuess">Maximale Anzahl Süßspeise</label><input type="number" id="maxSuess" bind:value={maxSuess}>
</p>

<!-- for development -->
{#if dbg}

    {#each menu as item, i}
        {#if item.zutaten }
            {item.zutaten.join(', ')}
        {/if}
    {/each}

    {#each mealList.sort((a,b) => a.html>b.html?1:a.html===b.html?0:-1) as item, i}
        <p>{@html item.html }</p>
    {/each}
{/if}

<footer>
<a href="essensplan-leer.pdf">Vorlage zum Ausdrucken</a>
</footer>
