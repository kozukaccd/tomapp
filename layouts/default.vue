<template>
  <v-app theme>
    <v-app-bar app color="primary" dark max-height="60px">
      <v-toolbar-title class="headline text-uppercase">
        <span class="v-toolbar-title bold"
          ><v-icon>mdi-palette</v-icon> JMoF イラストコンテスト2020 投票フォーム</span
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn nuxt to="/" text>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn nuxt to="/entries" text>
        <v-icon>mdi-vote</v-icon>
      </v-btn>
    </v-toolbar-items>

    </v-app-bar>

    <v-content>
      <v-container fluid>
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
