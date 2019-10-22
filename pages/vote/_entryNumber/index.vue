<template>
  <div>
    <h1>エントリーNo.{{ $route.params.entryNumber }}</h1>
        ID is {{ $route.params.entryNumber }}
        <nuxt-link to="/">Topへ戻る</nuxt-link>
        <nuxt-link to="/entries">エントリー一覧へ戻る</nuxt-link>
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                <v-card-title>{{items[$route.params.entryNumber].id}}{{items[$route.params.entryNumber].title}}</v-card-title>
              </v-col>
            </v-row>
            <v-img 
            v-bind:src="imagePath(items[$route.params.entryNumber].src)"
            aspect-ratio="1.61"
            ></v-img>
            <v-row>
              <v-col>
                <v-card-text>{{items[$route.params.entryNumber].text}}</v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

  </div>
</template>


<script>

import entries from "~/assets/entries.json"

export default {
    data: function() {
        return {
          items:entries
        }
        },
    methods: {
    imagePath: function (filename) {
      return require("@/static/images/" + filename)
    },
},
}
</script>