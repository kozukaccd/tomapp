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

    <v-row v-show="loading">
        <v-col class="d-flex justify-center">
            <v-progress-circular
                indeterminate
                color="red">
            </v-progress-circular>
        </v-col>

    </v-row>
      <v-row>
        <v-col v-for="item in sortedItems" v-bind:key="item.id" cols="6" sm="4" md="3" lg="2">

          <v-card>
            <v-img
            class="white--text align-end"
            v-bind:src="imagePath(item.src)"
            gradient="to top, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0)"
            aspect-ratio="1.61"
            @click.stop="openDialog(item)">
            <v-card-title>No.{{ item.id }}</v-card-title>

        <template v-slot:placeholder>
            <v-layout
            fill-height
            align-center
            justify-center
            ma-0
            >
          <v-progress-circular indeterminate color="red lighten-5"></v-progress-circular>
        </v-layout>
      </template>
            </v-img>
                  <div style="text-align:center" class="hidden-md-and-up">
                      <v-btn color="primary" tile dark @click.stop="openDialog(item)" width="100% ">詳細</v-btn>
                  </div>

          <v-container hidden-sm-and-down>
            <v-row>
                <v-card-text style="height:13vh;overflow:hidden;">{{ item.captions }}</v-card-text>
            </v-row>

            <v-row>
                <v-col>
                    <div style="text-align:center">
                        <v-btn color="primary" dark @click.stop="openDialog(item)" width="100% "><v-icon>mdi-details</v-icon>詳細</v-btn>
                    </div>
                </v-col>
            </v-row>
          </v-container>

          </v-card>
        </v-col>
      </v-row>

        <v-dialog v-model="dialog" v-if="currentItem" max-width="500px">
          <v-card>
            <v-container>
              <v-row>
                      <v-col>
                        <v-img
                        v-bind:src="imagePath(currentItem.src)"
                        aspect-ratio="1.61"
                        ></v-img>
                      </v-col>
              </v-row>
                <v-row>
                    <v-col>
                        <v-card-title
                        >No.{{ currentItem.id }} - {{ currentItem.title }}</v-card-title
                        >
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card-text>{{ currentItem.captions }}</v-card-text>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row style="margin-top:10px;">
                <v-col class="d-flex justify-center">
                    <v-btn color="info" text @click="dialog = false" class="text-center" style="margin-right:10px;"
                    >閉じる</v-btn>

                    <v-btn
                    :to="{
                        name: 'vote-entryNumber',
                        params: { entryNumber: currentItem.id }
                    }"
                    nuxt
                    color="info"
                    class="text-center"
                    style="margin-left:10px;"
                    >
                    <v-icon>mdi-vote</v-icon>投票する
                    </v-btn>
                </v-col>

                </v-row>

               </v-container>
          </v-card>
      </v-dialog>

    </v-container>

<!--
    <div>{{results}}</div>
 <ul class="resultItem" v-for="entry in results" :key="entry.id">
   <li>{{entry.id}}</li>
   <li>{{entry.name}}</li>
   <li>{{entry.title}}</li>
   <li>{{entry.captions}}</li>
   <li>{{entry.filename}}</li>
  </ul>
!-->



  </div>
</template>

<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
//import entries from "../assets/entries.json";
import axios from 'axios';

export default {
  data: function() {
    return {
      sortedItems: "",
//      items: entries,
      currentItem:null,
      dialog: false,
      results:"",
     loading: true
    };
  },

/*  async asyncData({ app }) {
    const gasEntries = await app.$axios.$get("https://script.googleusercontent.com/macros/echo?user_content_key=hjhQ7rDhgeBE1WIwSXJdGQyu7tFgoNwCurjzsUzU67ILMbZZwJHNW-TiMQnTjeRtoERqVOckj9NagCN4jUnCCQVm-ZANH0dWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnINqPvbuDU9swNJSGSkAQwdPTUkhX2Qv6TSiUiKM--2QfDY4-G96vMQ-P6jUs2z88UWY2nZ7HPw5&lib=MHChhK3vTrP4kAeUmMIpB0FnFCWH9vLiW")
    return {
      results: gasEntries
    }
  }
,
*/
  created: async function() {
    axios
    .get('https://script.googleusercontent.com/macros/echo?user_content_key=hjhQ7rDhgeBE1WIwSXJdGQyu7tFgoNwCurjzsUzU67ILMbZZwJHNW-TiMQnTjeRtoERqVOckj9NagCN4jUnCCQVm-ZANH0dWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnINqPvbuDU9swNJSGSkAQwdPTUkhX2Qv6TSiUiKM--2QfDY4-G96vMQ-P6jUs2z88UWY2nZ7HPw5&lib=MHChhK3vTrP4kAeUmMIpB0FnFCWH9vLiW')
    .then(response =>{
        this.loading= false;
        this.results = response.data
        this.sortedItems = response.data.slice().sort(function() {
        return 0.5 - Math.random();
        })
    });

  },
methods: {
    imagePath: function (filename) {
/*      return require("@/static/images/" + filename) */
      return require("@/static/images/thumb.jpg")
    },
    openDialog(item) {
      this.currentItem = item
      this.dialog = true
    }
},
  components: {
    Carousel,
    Slide
  },


};
</script>
