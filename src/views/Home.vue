<template>
  <div class="home">
<hero></hero>
<herotab></herotab>
<marvel></marvel>
  </div>
</template>

<script>
import hero from '@/components/Home/hero'
import herotab from '@/components/Home/herotab'
import marvel from '@/components/Home/marvel'


export default {
  name: 'Home',
  components: {
hero,herotab, marvel
  }
}
</script>
