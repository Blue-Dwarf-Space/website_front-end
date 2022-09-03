<script>
    import Tabs from '../components/Tabs.svelte';
    import Content from '../components/Content.svelte';

    //tabs
    let items = [ 'Project', 'Team', 'Beliefs', 'Plans', 'Needs' ];
    let activeItem = 1;
    // const handleTabChange = (e) => { 
    //     activeItem = e.detail;
    // }

    function handleTabChange(event) {
        alert(event.detail.text);
        activeItem = e.detail.text;
    }


</script>

<main>
    
    <!-- <Tabs {activeItem} {items} on:tabChange={tabChange} /> -->
    <Tabs {activeItem} {items} on:tabChange={handleTabChange} />

    <div>Active item index: {activeItem}</div>
    <div>Active Item: {items[activeItem]}</div>
    <div>IndexOf is index {items.indexOf(items[activeItem])}</div>
    


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
    {#if activeItem == 1}
        <div>
            <Content 
            header="Our founders"
            subheader="We're super nice"
            imageLoc="/assets/founders.svg"
            imageAlt="into bubbles in the shape of the starship enterprise"
            para1="we know what we are doing"
            para2="we're good at it"
            para3="you should trust us"
        />
    </div>
    {/if}
    {#if activeItem == 2}
    <div>
      Beliefs
    </div>
    {/if}
    {#if activeItem == 3}
    <div>
      Plans
    </div>
    {/if}
    {#if activeItem == 4}
    <div>
      Needs
    </div>
    {/if}
</main>
