<script>
    import Content from '../components/Content.svelte';

    //tabs
    let items = [ 'Project', 'Team', 'Beliefs', 'Plans', 'Needs' ];
    let activeItem = 0;
</script>

<main>

    <ul class="w-full steps">
        <li 
            class="step step-accent"
            class:active={activeItem === 0}
            on:click={() => (activeItem = 0)}
        
        >
			Project
		</li> 
        <li 
            class="step step-warning"
            class:active={activeItem === 1}
            on:click={() => (activeItem = 1)}
        >
			Team
		</li> 
        <li 
            class="step step-error"
            class:active={activeItem === 2}
            on:click={() => (activeItem = 2)}
        >
			Beliefs
		</li> 
        <li 
            class="step step-secondary"
            class:active={activeItem === 3}
            on:click={() => (activeItem = 3)}
        >
            Plans
        </li>
        <li 
            class="step step-info"
            class:active={activeItem === 4}
            on:click={() => (activeItem = 4)}
        >
            Needs
        </li>
    </ul>

<!-- Project -->
    {#if activeItem == 0}  
        <Content 
              header="Gaining a permit to perform space activities is really complex"
              subheader="Navigating the regulatory burden is a barrier to entry"
              imageLoc="/assets/why.png"
              imageAlt="lots of question marks"
              para1="The process differs in accordance with mission parameters, and can be confusing, time consuming, and expensive."
              para2="There are many dependencies and pre-requisites, and many of these also have pre-requisites, forming a hierarchy of dependencies that, in and of itself, can be difficult to discover."
              para3="Much of the work requires third party suppliers to confirm or certify requirements."
        />
        <Content 
            header="There is no clean, common solution"
            subheader="The current workflow involves multiple iterative processes that are vulnerable to repetition and failure."
            imageLoc="/assets/current_workflow.svg"
            imageAlt="convoluted mess demonstrating difficult workflow, hybrid of gears and spaghetti"
            para1="This creates an industry pain point where there is a perceived imbalance between innovation and regulation."
            para2="We believe there is a better way."
            para3=""
        />
        <Content 
            header="Why is the regulatory burden so high?"
            subheader="Because it needs to be"
            para1="Regulations provide safety and security to ensure that what we do in space is sustainable, and in the best interests of people, property, and planet/s (or other celestial bodies!)."
            para2="To ease the burden on space companies, you can either reduce these safeties, or you can make them more user friendly."
            para3="We aren't trying to reduce or bypass these safeties. We are navigating complex pathways and workflows on behalf of our clients."
        />
        <Content 
            header="Regulation navigation as a service"
            subheader="Why reinvent the wheel when you can jump into our teleporter?"
            imageLoc="/assets/new_workflow.svg"
            imageAlt="Smoother workflow, simplified and streamlined"
            para1="let us do all the hard work for you"
            para2="single point of contact, data entry, failure, resolution"
            para3="change looks like us"
        />
    {/if}

<!-- Team -->
    {#if activeItem == 1}
        <Content 
            header="Our founders"
            subheader="We hold experience over the relevant fields, share a deep love of technology and space, and hold the belief that we should strive to leave this world a better place."
            imageLoc="/assets/founders.svg"
            imageAlt="intro bubbles in the shape of the starship enterprise"
            para1="We come from backgrounds in technology, education, public service, politics and policy, business operations, management, construction, and law."
            para2="We share a desire to do good in this world, and beyond. We aim to combine our efforts, and our talents, to make that possible."
            para3=""
        />
    {/if}

<!-- Beliefs -->
    {#if activeItem == 2}
        <Content 
            header="We want to leave a legacy of good"
            subheader=""
            imageLoc="/assets/principles.svg"
            imageAlt=""
            para1="In forming our principles, we looked inwards at who we are, who we want to be, and what inspires us the most."
            para2="We hold strongly to our humanity, compassion, empathy, inclusiveness, desire for knowledge and understanding, excitement for the future, and the belief that life is hard enough without us adding to anyone's difficulties."
            para3="We have chosen in accorance with what we believe gives us the best coverage of intention, ethics, morals, goals, politics, and the way we choose to live."
        />
    {/if}


<!-- Plans -->
    {#if activeItem == 3}
    <Content 
        header="Our 4-stage roadmap"
        subheader="We are on our way to great things"
        imageLoc="/assets/roadmap.svg"
        imageAlt="roadmap demonstrating 4-stage plan"
        para1="We are building out our minimum viable product (MVP), and working with clients to ensure it truly meets their needs for the purpose of gaining Overseas Payload Permits."
        para2="Our design is modular so that we can continue to add functionality until we have all modules in place to offer the full suite of dependencies for space permit applications of any type."
        para3="Get in touch if you want to be a part of our design process!"
    />
{/if}


<!-- Needs -->
    {#if activeItem == 4}
    <Content 
        header="Get involved!"
        subheader="We can't do this alone"
        imageLoc="/assets/get_involved.svg"
        imageAlt="Ways in which people can get involved"
        para1="We are currently seeking expressions of interest from potential advisory board members. We primarily seek legal, business and technology backgrounds, and welcome anyone experienced in media and finance."
        para2="We are seeking clients to undertake systems testing as we perfect our offering, ensuring we provide a service that is codesigned between us and the people who will ultimately be using it."
        para3="Additionally, we seek investors, and eventually people who will want to work with us to see our vision come to fruition."
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