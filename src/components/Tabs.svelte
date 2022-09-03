<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;

</script>

<div class="tabs">
    <ul class="mx-auto">
        {#each items as item, index}
            <li on:click={() => dispatch('tabChange', index)}>
                    <div class:active={index === activeItem}>{index} | {item}</div>
            </li>
        {/each}
    </ul>
</div>
<div>
    <button class="btn btn-outline btn-success" on:click={() => dispatch('tabChange', 3)}>click me</button>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
        z-index: 9999;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #aaa;
        cursor: pointer;
    }
    .active {
        color:red;
        border-bottom: 2px solid red;
        padding-bottom: 8pm;
    }
</style>