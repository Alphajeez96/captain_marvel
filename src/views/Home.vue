<template>
  <div class="home">
<hero></hero>
<herotab></herotab>
  </div>
</template>

<script>
import hero from '@/components/Home/hero'
import herotab from '@/components/Home/herotab'


export default {
  name: 'Home',
  components: {
hero,herotab
  }
}
</script>
