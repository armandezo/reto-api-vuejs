<template>
	<v-row align="center" justify="center">
		<v-col v-if="!loading" cols="12" md="7">
  		<v-card color="#deeddd" :elevation="20">
  		  <v-card-title>
					<v-text-field
  		      v-model="search"
						clearable
  		      append-icon="mdi-magnify"
  		      label="Search"
  		      single-line
  		      hide-details
  		    ></v-text-field>
  		  </v-card-title>
  		  <v-data-table
					:elevation="20"
					hide-default-header
  		    :headers="headers"
  		    :items="pokemons"
					:search="search"
  		  >
				<template v-slot:item.name="{ item }">
					<a :href="`/pokemon/${item.name}`">{{ item.name }}</a>
  		  </template>
				</v-data-table>
  		</v-card>
		</v-col>

    <v-col v-else-if="errorToShow" cols="12" class="text-center">
      <error-handler
        :receivedError="error"
      ></error-handler>
    </v-col>

		<v-col v-else cols="12" class="text-center">
			<loading-component />
		</v-col>
	</v-row>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios, { AxiosResponse, AxiosError } from 'axios';
  import router from '../router';
  import { IDashboardData } from '../interfaces';
  import ErrorHandler from '../components/errorHandler.vue';
  import LoadingComponent from '../components/loadingComponent.vue';

  export default Vue.extend({
    name: 'Dashboard',
    components: { ErrorHandler, LoadingComponent },
    data(): IDashboardData {
      return {
        loading: true,
        errorToShow: false,
        error: {
          msg: '',
          code: 0,
        },
        search: '',
        headers: [
          {
            text: '',
            align: 'center',
            sortable: false,
            value: 'name',
          },
        ],
        pokemons: null,
      };
    },
    methods: {
      fetchData() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=964')
        .then((response: AxiosResponse): void => {
          this.pokemons = response.data.results;
          this.loading = false;
        })
        .catch((error: AxiosError | undefined): void => {
          if (error && error.response) {
            if (error.response.status === 404) {
              router.replace('/404');
            }

            this.errorToShow = true;
            this.error.msg = error.response.data;
            this.error.code = error.response.status;
          }
          this.loading = false;
        });
      },
    },
    mounted() {
      this.loading = true;
    },
    created() {
      this.fetchData();
    },
  });
</script>

<style scoped>

a {
	text-decoration: none;
	color:black !important;
}

a:hover, 
a:active {
	text-decoration: bold;
	font-size: 1.5rem;
}

.theme--light.v-data-table {
	background-color: #deeddd !important;
}

</style>