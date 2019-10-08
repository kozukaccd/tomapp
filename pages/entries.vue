<template>
  <div class="home">
   <v-content>
    <v-container>
        <slider/>
        <nuxt-link to="/entries">一覧ページへ戻る</nuxt-link>
        <nuxt-link to="/">Top</nuxt-link>
    </v-container>
   </v-content>
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
