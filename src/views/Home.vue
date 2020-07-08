<template>
  <div class="home">
<hero></hero>
<herotab></herotab>
<marvel></marvel>
<latestnews></latestnews>
<hq></hq>

  </div>
</template>

<script>
import hero from '@/components/Home/hero'
import herotab from '@/components/Home/herotab'
import marvel from '@/components/Home/marvel'
import latestnews from '@/components/Home/latestnews'
// import lastvideos from '@/components/Home/latestvideos'
// import connections from '@/components/Home/connections'
import hq from '@/components/Home/hq'


export default {
  name: 'Home',
  components: {
hero,herotab, marvel, latestnews, hq
  }
}
</script>
