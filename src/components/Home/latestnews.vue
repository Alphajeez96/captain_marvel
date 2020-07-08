<template>
  <div class="latest" role="main" id="pagination-app">
    <div class="contain">
      <h2>Latest news</h2>
      <div class="row">
        <div
          class="image__div col-md-3 col-lg-3"
          v-for="event in displayedPosts"
          :key="event.id"
        >
          <img
            :src="`${event.thumbnail.path}.${event.thumbnail.extension}`"
            class="card-img-top img-fluid"
            alt="`${event.title}`"
          />
          <h5>{{ event.title }}</h5>
          <p>
            <v-clamp autoresize :max-lines="3">{{ event.description }}</v-clamp>
          </p>
          <!-- <a :href="`${event.urls}`" class="btn btn-primary">
            Read More
          </a> -->
        </div>
      </div>
    </div>

    <!--     Loop through the pages array to display each page number       -->
    <div class="clearfix btn-group col-md-2 mb-3 offset-md-5">
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        v-if="page != 1"
        @click="page--"
      >
        <<
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        v-for="pageNumber in pages.slice(page - 1, page + 5)"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button
        type="button"
        @click="page++"
        v-if="page < pages.length"
        class="btn btn-sm btn-outline-secondary"
      >
        >>
      </button>
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
      url: [],
      page: 1,
      perPage: 4,
      pages: [],
    }
  },
  mounted() {
    this.getEvents()
  },
  watch: {
    events() {
      this.setPages()
    },
  },
  methods: {
    async getEvents() {
      try {
        let response = await this.$http.get(
          `https://gateway.marvel.com/v1/public/events?apikey=${this.apikey}`,
        )
        this.events = response.data.data.results
        // console.log( response.data.data.results)
        // this.url = response.data
        // console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },

    setPages() {
      let numberOfPages = Math.ceil(this.events.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate(events) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return events.slice(from, to)
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.events)
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
