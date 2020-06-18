<template>
  <pokemon-details />
</template>

<script lang="ts">
  import Vue from 'vue';
  import PokemonDetails from '../components/PokemonDetails.vue';

  export default Vue.extend({
    name: 'Pokemon',

    components: {
      PokemonDetails,
    },
  });
</script>