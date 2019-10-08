<template>
  <div class="home">
    <slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import slider from '@/components/slider.vue'

export default {
  name: 'home',
  components: {
    slider
  }
}
</script>
