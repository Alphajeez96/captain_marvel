<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/Partials/navbar'

export default {
  components: {
    navbar,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.contain{
  padding: 0px 95px 0px 95px
}
</style>
