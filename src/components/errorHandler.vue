<template>
  <v-card>
    <v-card-text>
      An error has occured.<br>
      {{ `Error code: ${receivedError.code} Details: ${receivedError.msg}` }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'ErrorHandler',
    props: {
      receivedError: { type: Object, required: true },
    },
  });
</script>
