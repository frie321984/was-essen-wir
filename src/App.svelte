<script>
    import {mealList, same, zufall} from './Essen.js';

    let menu=[]
    const neuesEssen =(menu=[], maxSuess=1)=> {
        let gibtSchonWasSuesses = menu.filter(item => item.suess).length >= maxSuess;
        let availableMeals = mealList
            .filter(x => menu.filter(y => same(x, y).length > 0))
            .filter(x => !gibtSchonWasSuesses || !x.suess);
        console.debug(availableMeals)
        return zufall(availableMeals);
    }
    for (let i=0;i<7;i++) {
        menu[i] = neuesEssen(menu)
    }
    console.log(menu)
</script>

<style>
    td, th {
        width: 14.2%;
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
            <td>
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
                }}>Ändern (zufällig)</button>
            </td>
        {/each }
    </tr>
</table>

{#each menu as item, i}
    {#if item.zutaten }
        {item.zutaten.join(', ')}
    {/if}
{/each}