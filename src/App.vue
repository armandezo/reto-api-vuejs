<template>
  <v-app>
    <v-app-bar 
      app
      :src="require('@/assets/pokemon_wallpaper.jpg')"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to bottom right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title class="display-1 white--text font-weight-bold">
        <router-link to="/">Armando Pokedex</router-link>
      </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  
  * {
    font-family: "Montserrat", sans-serif;
  }

  main {
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,233,185,1) 100%);
  }

  .router-link-active {
    color: white !important;
    text-decoration: none;
  }

  /* centralised table view on mobile */

  .v-data-table__mobile-row {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .v-data-table__mobile-row__header {
  	display: none !important;
  }

</style>
