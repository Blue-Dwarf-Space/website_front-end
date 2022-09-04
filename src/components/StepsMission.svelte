<script>
    import Content from '../components/Content.svelte';

    //tabs
    let items = [ 'Mission', 'Timing', 'Partnerships' ];
    let activeItem = 0;
</script>

<main>

    <ul class="w-full steps">
        <li 
            class="step step-accent"
            class:active={activeItem === 0}
            on:click={() => (activeItem = 0)}
        
        >
			Mission
		</li> 
<!--        
        <li 
            class="step step-warning"
            class:active={activeItem === 1}
            on:click={() => (activeItem = 1)}
        >
			Timing
		</li> 
-->
        <li 
            class="step step-error"
            class:active={activeItem === 1}
            on:click={() => (activeItem = 1)}
        >
			Timing
		</li> 
<!--
        <li 
            class="step step-secondary"
            class:active={activeItem === 3}
            on:click={() => (activeItem = 3)}
        >
            Plans
        </li>
-->
        <li 
            class="step step-info"
            class:active={activeItem === 2}
            on:click={() => (activeItem = 2)}
        >
            Partnerships
        </li>
    </ul>

<!-- Mission -->
    {#if activeItem == 0}  
        <Content 
            header="Our mission is to make space reachable to all by fundamentally changing industry processes to create a frictionless path by removing the red tape, while supporting a truly sustainable space sector"
            subheader=""
            imageLoc="/assets/opportunity_agency.svg"
            imageAlt=""
            para1=""
            para2=""
            para3=""
        />
        <Content 
            header=""
            subheader="A one-stop regulatory shop to move your mission from conception to launch"
            imageLoc="/assets/differentiators.svg"
            imageAlt="What makes us different"
            para1="Our customers are the hero of our story. Their achievements are our goal, and we guage our success by theirs."
            para2=""
            para3=""
        />
    {/if}

<!-- Timing -->
    {#if activeItem == 1}
        <Content 
            header="The right time is right now"
            subheader="Australia aims to gain flight sovereignty by 2025 - the time to prepare for that is upon us"
            imageLoc="/assets/now.svg"
            imageAlt=""
            para1="We plan to start servicing requests in the first quarter of 2023, allowing time to work with our clients and partners to codesign the best possible solutions to everyone's needs before they need them."
            para2="By preparing for the Australian market now, in its infancy, we will be ready to take our place at the table when Australia's space economy goes global."
            para3=""
        />
    {/if}

<!-- Partnerships -->
    {#if activeItem == 2}
        <Content 
            header="Making life easier through partnerships"
            subheader="We are stronger when we work together"
            imageLoc="/assets/partners2.png"
            imageAlt=""
            para1="We are working with partners and building out our product to best fit our partner's requirements as well as our clients."
            para2="Creating symbiotic relationships where we each benefit the other, creating value in all of our actions."
            para3="Simplify, clarify and automate all tasks for all stakeholders, reducing friction and workload across the board."
        />
    {/if}

</main>

<style>
    li {
        font-size: 18px;
        color: #aaa;
        cursor: pointer;
    }
    .active {
        color:#eee;
        border-bottom: 2px solid #eee;
        font-weight:bold;
        padding-bottom: 8pm;
    }
</style>