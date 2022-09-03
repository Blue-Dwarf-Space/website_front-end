<script>
    import Content from '../components/Content.svelte';

    //tabs
    let items = [ 'Project', 'Team', 'Beliefs', 'Plans', 'Needs' ];
    let activeItem = 0;
</script>

<main>
    <ul class="tabs tab-wrapper tab-bordered mx-auto">
        {#each items as item, index}
            <li 
                class="tab-control tab"
                class:active={activeItem === index}
                on:click={() => (activeItem = index)}
            >
                {index} | {item}
            </li>
        {/each}
    </ul>

<!-- Project -->
    {#if activeItem == 0}  
        <Content 
              header="Gaining a permit to perform space activities is really complex"
              subheader="Navigating the regulatory burden is a barrier to entry"
              imageLoc="/assets/question_marks_logo.svg"
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
        imageAlt=""
        para1=""
        para2=""
        para3=""
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