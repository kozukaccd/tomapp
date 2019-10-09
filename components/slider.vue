<template>
  <div id="entries">
    <carousel
      :perPageCustom="[[599, 1], [959, 2], [1263, 4]]"
      :autoplay="true"
      :loop="true"
      :autoplay-timeout="3000"
      :centerMode="true"
      :navigation-enabled="true"
      :navigation-prev-label="'〈'"
      :navigation-next-label="'〉'"
      :autoplayHoverPause="true"
      :speed="800"
      :spacePadding="20"
    >
      <slide v-for="item in sortedItems" v-bind:key="item.id">
        <v-card>
          <v-card-title>{{ item.id }}</v-card-title>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-card-actions>
            <v-layout justify-center>
              <v-btn
                :to="{
                  name: 'vote-entryNumber',
                  params: { entryNumber: item.id }
                }"
                nuxt
                color="info"
              >
                <v-icon>mdi-vote</v-icon>
              </v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
import entries from "../assets/entries.json";
export default {
  data: function() {
    return {
      sortedItems: "",
      items: entries
    };
  },

  created: function() {
    this.sortedItems = entries.slice().sort(function() {
      return 0.5 - Math.random();
    });
  },

  components: {
    Carousel,
    Slide
  }
};
</script>
