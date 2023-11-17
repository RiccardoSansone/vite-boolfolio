<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {

      base_url: 'http://127.0.0.1:8000',
      projects_url: '/api/projects',
      projects: []
      
    }
  },
  mounted() {
    axios
    .get(this.base_url + this.projects_url)
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
    
    <div class="container d-flex flex-wrap gap-2 justify-content-center mt-5 mb-5">
      <div class="card mt-3 col-md-3 p-2 shadow" v-for="project in projects.data">
        <img :src="base_url  + '/storage/' + project.thumb  " class="card-img-top" alt="...">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <small>{{ project.authors }}</small>
      </div>
    </div>


  </div>
</template>

<style lang=scss scoped></style>






