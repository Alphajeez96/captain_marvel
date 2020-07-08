<template>
    <div>
    <div class='contain latest-videos'>
        <div class="row">
    <div class="col-md-8 col-lg-8">
      <div class="tab-content" id="v-pills-tabContent">
     
      <div class="tab-pane fade show active" id="" role="tabpanel" aria-labelledby="v-pills-home-tab"> <div v-for="serie in series" :key="serie.id"> <img
            :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`"
            class="card-img-top img-fluid"
            alt="`${event.title}`"
          /></div> </div>
      <!-- <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">3</div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">4</div> -->
    </div>
    </div>
    
     <div class="col-md-4  col-lg-4">
     <div class='overflow'>
       <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<div v-for="serie in series" :key="serie.id">

      <a class="nav-link mt-2 mb-2" id="v-pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="`${serie.id}`" aria-selected="false"> {{serie.title}}</a>
      <!-- <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
      <a class="nav-link" id="`${}.${-tab}`" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> -->
</div>
    </div>
       </div>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
const axios = require('axios')
import VClamp from 'vue-clamp'

export default {
  name: 'latestnews',
  components: {
    VClamp,
  },
  data() {
    return {
      apikey: '92edde42a0b45fe3b6b228a3edf4855b',
      series: [], 
    }
  },
  mounted() {
    this.getSeries()
  },
 
  methods: {
    async getSeries() {
      try {
        let response = await this.$http.get(
          `https://gateway.marvel.com/v1/public/series?apikey=${this.apikey}`,
        )
        this.series = response.data.data.results
        console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>

<style scoped>
.latest-videos{
  margin-bottom:60px
}
div .overflow{
   
               padding:5px;
margin:5px;
                height: 150px; 
                overflow: auto; 
              
}
</style>>
