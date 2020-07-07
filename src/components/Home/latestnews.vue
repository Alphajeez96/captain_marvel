<template>
    <div class='latest'>
    <div class='contain'>
<h2>Latest news</h2>
<div class="card mb-3">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    
    </div>
    
    </div>
</template> 

<script>
const axios = require("axios");

export default {
    
}
</script>
<style scoped>
.latest{
    background: #151515;
    position:relative;

}
.contain > h2{
    text-transform: uppercase;
    padding: 50px 0px 50px 0px;
    color:white;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    /* background-color: #fff; */
    background-clip: border-box;
    /* border: 1px solid rgba(0,0,0,.125); */
    border-radius: .25rem;
}
</style>