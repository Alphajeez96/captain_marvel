<template>
    <div>
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
    </div>
</template>