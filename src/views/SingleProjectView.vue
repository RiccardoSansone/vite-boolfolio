<script>
import axios from 'axios';
export default {
  name: 'SingleProjectView',
  data() {
    return {
        
    //   base_url: 'http://127.0.0.1:8000',
    //   projects_url: '/api/projects',
      url: `http://127.0.0.1:8000/api/projects/${this.$route.params.id}`,
      projects: {}
      
    }
  },
  mounted() {
    const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.id}`
    axios
    // .get(this.base_url + this.projects_url)
    .get(url)
    .then(response=> {
      console.log(response);
      this.projects = response.data.result;
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<template>
  <div id="app">

    <!-- <router-link to="/">Prova</router-link> -->


    <div class="container d-flex flex-wrap gap-2 justify-content-center mt-5 mb-5">
      <!-- ciclo singola card -->
      <!-- <div class="card mt-3 col-md-3 p-2 shadow" v-for="project in projects.data"> -->
      <div class="card mt-3 col-md-3 p-2 shadow">
        <img :src="'this.url'+'projects.thumb'" class="card-img-top" alt="...">
        <h2>{{ projects.title }}</h2>
        <p>{{ projects.description }}</p>
        <small>{{ projects.authors }}</small>
      </div>
      <!-- </div> -->
    </div>

  </div>
</template>

<style lang=scss scoped></style>






