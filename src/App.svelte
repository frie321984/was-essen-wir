<script>
    import {menueVorschlag, waehleZufaelligesMenue} from './Essen.js';

    waehleZufaelligesMenue();
    let menu=[]
    menueVorschlag.subscribe(v => {
        menu.push(v)
    });
    for (let i=1;i<7;i++) waehleZufaelligesMenue();
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
                    console.log('click', item)
                }}>Neu {i}</button>
            </td>
        {/each }
    </tr>
</table>