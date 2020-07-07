<template>
  <div class="latest">
    <div class="contain">
      <h2>Latest news</h2>
      <div class="card mb-3" v-for="event in events" :key="event.id">
        <img src="event.thumbnail.path + .jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ event.thumbnail.path }}</h5>
          <p class="card-text">
         {{ event.description}}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'latestnews',
  data() {
    return {
 apikey: "92edde42a0b45fe3b6b228a3edf4855b",
      events: [],

    }
  },
    mounted(){
this.getEvents()
  },
  methods:{
  async getEvents() {
    try {
let response = await this.$http.get(
   `https://gateway.marvel.com/v1/public/events?apikey=${this.apikey}`,
   
);
this.events = response.data.data.results;
// console.log( response.data.data.results)

console.log( response.data.data.results)


    }
    catch(error){
      console.log(error.response)
    }
  }
}
}
</script>
<style scoped>
.latest {
  background: #151515;
  position: relative;
}
.contain > h2 {
  text-transform: uppercase;
  padding: 50px 0px 50px 0px;
  color: white;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;

  background-clip: border-box;

  border-radius: 0.25rem;
}
</style>
