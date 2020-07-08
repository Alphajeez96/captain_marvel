<template>
    <div>
       <div class="contain connections">
      <h2>Connections</h2>
      <div class="row">
 <div class="bs-example">
    <div class="card" style="max-width: 500px;">
        <div class="row no-gutters">
        <div >
            <div class="col-sm-5"  style="background: #868e96;">
                <img src="https://cdn.pixabay.com/photo/2020/07/02/17/29/landscape-5363681_960_720.jpg" class="card-img-top h-100" alt="...">
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                    <h5 class="card-title">Alice Liddel</h5>
                    <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                    <a href="#" class="btn btn-primary stretched-link">View Profile</a>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
      </div>
    </div>
    </div>
</template>


<style scoped>
  .bs-example{
        margin: 20px;        
    }
</style>

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
      characters: [],
     
    }
  },
  mounted() {
    this.getCharacters()
  },
 
  methods: {
    async getCharacters() {
      try {
        let response = await this.$http.get(
          `https://gateway.marvel.com/v1/public/characters?apikey=${this.apikey}`,
        )
        this.characters = response.data.data.results
        // console.log( response.data.data.results)
        // this.url = response.data
        console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },

  },

}
</script>