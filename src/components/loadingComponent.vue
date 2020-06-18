<template>
  <v-progress-circular
    indeterminate
    color="primary"
    :width="10"
    :size="100"
  ></v-progress-circular>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Loading',
  });
</script>

