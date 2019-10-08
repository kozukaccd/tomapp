<template>
  <carousel
    :per-page="3"
    :autoplay="true"
    :loop="true"
    :pagination-padding="1"
    :autoplay-timeout="4000">
    <slide>
      <img src='https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' />
    </slide>
    <slide>
      <img src='https://cdn.vuetifyjs.com/images/carousel/sky.jpg' />
    </slide>
    <slide>
      <img src='https://cdn.vuetifyjs.com/images/carousel/bird.jpg' />
    </slide>
    <slide>
      <img src='https://cdn.vuetifyjs.com/images/carousel/planet.jpg' />
    </slide>
  </carousel>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>