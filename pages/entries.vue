<template>
  <div>
    <v-container fluid>
        <v-row justify="center">
          <v-col>
                <h1 class="text-center">エントリー作品一覧</h1>
          </v-col>
        </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col v-for="item in sortedItems" v-bind:key="item.id" xs="12"sm="4" md="3" lg="2">
          <v-card height="45vh">
            <v-img
            class="white--text"
            v-bind:src="imagePath(item.src)"
            gradient="to top, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0)"
            aspect-ratio="1.61"
            >
            <v-card-title styly="overflow:hidden;" class="align-end fill-height">No.{{ item.id }}<br>{{ item.title }}</v-card-title>
            </v-img>
          <v-container class="d-none d-md-flex d-lg-flex">
            <v-row>
                <v-card-text style="height:13vh;overflow:hidden;">{{ item.text }}</v-card-text>
            </v-row>

            <v-row>
            <v-spacer></v-spacer>
                <v-col>
                    <v-dialog v-model="dialog" scrollable max-width="500px">
                        <template v-slot:activator="{ on }">
                            <div style="text-align:center">
                                <v-btn color="primary" dark v-on="on">詳細</v-btn>
                            </div>
                        </template>
                        <v-card>
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center"
                                        >No.{{ item.id }} {{ item.title }}</v-card-title
                                        >
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-card-text class="text-center">{{ item.text }}</v-card-text>
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-1" text @click="dialog = false"
                                    >Close</v-btn
                                    >
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
                                </v-card-actions>
                            </v-container>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
          </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
methods: {
    imagePath: function (filename) {
      return require("@/static/images/" + filename)
    }
},
  components: {
    Carousel,
    Slide
  }
};
</script>
