<template>
  <v-app theme>

    <v-app-bar app color="primary" dark max-height=60px >
      <v-toolbar-title class="headline text-uppercase">
        <span class="bold">JMoF イラストコンテスト2020 投票フォーム</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

   <v-content>
      <v-container>
        <v-layout  justify-center wrap>
        <nuxt/>
        </v-layout>
      </v-container>
   </v-content>
  </v-app>
</template>

<style>

.bold{
    font-weight:bold;
}
</style>