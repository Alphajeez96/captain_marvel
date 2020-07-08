<template>
  <div class="latest" role="main" id="pagination-app">
    <div class="contain">
      <h2>Latest news</h2>
      <div class="row">
        <div
          class="image__div col-md-3 col-lg-3"
          v-for="creator in creators"
          :key="creator.id"
        >
          <img
            :src="`${creator.thumbnail.path}.${creator.thumbnail.extension}`"
            class="card-img-top img-fluid"
            alt="`${character.title}`"
          />
          <h5>{{ creator.fullName }}</h5>
          <p>
            <v-clamp autoresize :max-lines="3">{{ creator.modified }}</v-clamp>
          </p>
          <!-- <a :href="`${event.urls}`" class="btn btn-primary">
            Read More
          </a> -->
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
      creators: [],
      comicid:1749
    
    }
  },
  mounted() {
    this.getCharacters()
  },
 
  methods: {
    async getCharacters() {
      try {
        let response = await this.$http.get(
          `https://gateway.marvel.com/v1/public/comics/${this.comicid}/characters?apikey=${this.apikey}`,
        )
        this.creators = response.data.data.results
        console.log( response.data.data.results)
        // this.url = response.data
        // console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },

  },
 
}
</script>
<style scoped>
.latest {
  background: #151515;
  position: relative;
  bottom: 170px;
}

.contain > h2 {
  text-transform: uppercase;
  padding: 50px 0px 50px 0px;
  color: white;
}

.image__div {
  width: 100%;
  margin-bottom: 20px;
}

.image__div img {
  width: inherit;
}
.image__div h5 {
  color: #999;
  padding-top: 10px;
}
.image__div p {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}
.image__div p :hover {
  color: red;
}
.pagination {
  color: white;
}
.page-item {
  color: white;
}

.clearfix button {
  color: white;
  font-weight: bold;
}

.clearfix button .btn :active {
  color: red;
}
</style>
