<script>
    import {mealList, same, waehleZufaelligesMenue, zufall, zufallsEssen} from './Essen.js';

    waehleZufaelligesMenue();
    let menu=[]

    for (let i=0;i<7;i++) {
        menu[i] = zufallsEssen()
    }
    console.log(menu)
</script>

<style>
    td, th {
        width: 14.2%;
    }
    @media print {
        h1 { display:none;}
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
                    menu[i] = zufall(mealList
                        .filter(x => menu.filter(y => same(x,y).length>0)))
                }}>Ändern (zufällig)</button>
            </td>
        {/each }
    </tr>
</table>