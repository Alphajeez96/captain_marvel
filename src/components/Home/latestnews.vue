<template>

  <div class="latest">
   
    <div class="contain">
   
      <h2>Latest news</h2>
      <div class="row">
        <div
          class="image__div col-md-3 col-lg-3"
          v-for="event in events"
          :key="event.id"
        >
          <img
            :src="`${event.thumbnail.path}.${event.thumbnail.extension}`"
            class="card-img-top img-fluid"
            alt="..."
          />
          <h5>{{ event.title }}</h5>
          <p>
            <v-clamp autoresize :max-lines="3">{{ event.description }}</v-clamp>
          </p>
          <a :href="`${event.resourceURI}`" class="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

        <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
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
      events: [],
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    async getEvents() {
      try {
        let response = await this.$http.get(
          `https://gateway.marvel.com/v1/public/events?apikey=${this.apikey}`,
        )
        this.events = response.data.data.results
        // console.log( response.data.data.results)

        console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },
   	clickCallback: function(page) {
      console.log(page)
    }
  },
}
</script>
<style scoped>
.latest {
  background: #151515;
  position: relative;
  bottom:170px;
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
   padding-top:10px
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
  color:white
}
.page-item {
    color:white
}
</style>
