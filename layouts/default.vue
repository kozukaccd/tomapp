<template>
  <v-app theme>
    <v-toolbar app color="primary" dark max-height=60px >
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
         <v-layout wrap>
          <v-flex xs12 sm6 md4 text-center my-5><v-btn>押して</v-btn></v-flex>
          <v-flex xs12 sm6 md4 text-center my-5><v-btn >押して</v-btn></v-flex>
          <v-flex xs12 sm6 md4 text-center my-5><v-btn>押して</v-btn></v-flex>
        </v-layout>
        <nuxt/>
      </v-container>
    </v-content>

  </v-app>
</template>
