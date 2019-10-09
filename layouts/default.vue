<template>
  <v-app theme>
    <v-app-bar app color="primary" dark max-height="60px" hide-on-scroll>
      <v-btn text to="/" style="margin-right:15px" outlined depressed>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <span class="v-toolbar-title bold"
          >JMoF イラストコンテスト2020 投票フォーム</span
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-layout justify-center wrap>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
.bold {
  font-weight: bold;
}
</style>
