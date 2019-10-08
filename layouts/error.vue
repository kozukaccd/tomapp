<template>
  <v-app theme>
    <v-content>
      <v-container>
        <v-layout  justify-center>
            <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
            <h1 v-else>{{ otherError }}</h1>
            <h1>エラーが発生しました。</h1>
            <NuxtLink to="/">Topへ戻る</NuxtLink>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
