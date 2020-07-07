<template>
  <div class="home">
<hero></hero>
<herotab></herotab>
<marvel></marvel>
<latestnews></latestnews>
  </div>
</template>

<script>
import hero from '@/components/Home/hero'
import herotab from '@/components/Home/herotab'
import marvel from '@/components/Home/marvel'
import latestnews from '@/components/Home/latestnews'


export default {
  name: 'Home',
  components: {
hero,herotab, marvel, latestnews
  }
}
</script>
