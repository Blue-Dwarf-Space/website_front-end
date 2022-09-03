<script>
    export let header;
    export let subheader;
    export let imageLoc;
    export let imageAlt;
    export let para1 = null;
    export let para2 = null;
    export let para3 = null;

</script>

<section class="content">
    <div class="content-text">
        <h1>{header}</h1>
        <h2>{subheader}</h2>
        <img class="mx-auto" src={imageLoc} alt={imageAlt} />
        <p>{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
    </div>
</section>


<style>
    .content {
    height: auto;
    padding: 5px;
  }
  .content-text {
    color: #eee;
    text-align: center;
    margin: 30px auto;
  }
  .content h1 {
    font-size: 50px;
    color: #026087;
    margin-bottom: 10px;
  }
  .content h2 {
    font-size: 28px;
    color: #00cc66;
    margin-bottom: 20px;
  }
  .content p {
    font-size: 18px;
    color: #eeeeee;
    margin-bottom: 20px;
    text-align: left;
  }
  </style>
