<template>
  <div>
    <h1>エントリーNo.{{ $route.params.entryNumber }}</h1>
        ID is {{ $route.params.entryNumber }}
        <nuxt-link to="/">Topへ戻る</nuxt-link>
        <nuxt-link to="/entries">エントリー一覧へ戻る</nuxt-link>
        <v-card width="400px">

            <v-card-title>{{items[$route.params.entryNumber].id}}</v-card-title>
            <v-card-title>{{items[$route.params.entryNumber].title}}</v-card-title>
            <v-card-text>{{items[$route.params.entryNumber].text}}</v-card-text>
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
}
</script>