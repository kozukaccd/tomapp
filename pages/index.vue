<template>
  <div>
    <v-container fluid>
      <v-layout>
        <v-row>
          <v-col cols="8">
            <v-card-title>新規会員登録フォーム(3分で完了)</v-card-title>
            <nuxt-link to="/vote/1234556">個別投票ページ</nuxt-link>
            <nuxt-link to="/entries">参加作品一覧</nuxt-link>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col v-for="item in sortedItems" v-bind:key="item.id">
          <v-card width="200px">
          <v-row>
            <v-card-title>{{ item.id }}</v-card-title>
         </v-row>
         <v-row>
            <v-card-title>{{ item.title }}</v-card-title>
        </v-row>
        <v-row>
            <v-card-text>{{ item.text }}</v-card-text>
        </v-row>
        <v-row>
        <v-col>
            <v-dialog v-model="dialog" scrollable max-width="500px" class="justify-center">
              <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">詳細</v-btn>
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

  components: {
    Carousel,
    Slide
  }
};
</script>
