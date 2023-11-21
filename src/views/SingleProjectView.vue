<script>
import axios from 'axios';
export default {
  name: 'SingleProjectView',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects_url: '/api/projects',
      url: `http://127.0.0.1:8000/api/projects/${this.$route.params.id}`,
      projects: {},
      
    }
  },
  mounted() {
    const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.id}`
    axios
    .get(url)
    .then(response=> {
      console.log(response);
      if(response.data.success){
        this.projects = response.data.result;
      } else {
        this.$router.push({name:"NotFound"});
      }
    })
    .catch(err => {
      console.log(err.message);
    })
  }
}
</script>

<template>
  <div id="app">

    <h1 class="text-center footer_item mt-5">{{ projects.title }}</h1>

    <div class="container d-flex flex-wrap gap-2 justify-content-center mb-5">
      <div class="card mt-3 col-md-3 p-2 shadow card_bg">
        <img class="img_300px" :src="`http://localhost:8000/storage/${projects.thumb}`" alt="">
        <h2 class="footer_item">{{ projects.title }}</h2>
        <p>{{ projects.description }}</p>
        <small>{{ projects.authors }}</small>
        <div class="d-flex justify-content-between pt-2">
          <a :href="projects.projectlink"><i class="fa-solid fa-diagram-project"></i></a>
          <div  class="badge bg-success" v-if="projects.technologies" v-for="technology in projects.technologies">{{ technology.name_tech }}</div>
          <div v-if="projects.type">
                        <div class="badge bg-success text-warning">
                            {{ projects.type.type }}
                        </div>
                    </div>
          <a :href="projects.githublink"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang=scss scoped></style>






