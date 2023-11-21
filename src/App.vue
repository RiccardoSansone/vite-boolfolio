<script>
export default {
  name: 'App',
}


</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg p-3 shadow">
      <div class="container">
        <a class="navbar-brand" href="#">MyPortfolio <i class="fa-solid fa-code"></i></a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/" aria-current="page">Home <span
                  class="visually-hidden">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </li>
          </ul>
          <div class="admin">
            <a href="http://127.0.0.1:8000/admin" class="btn item" target="__blank">
              Admin <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </nav>

  </header>

  <main class="py-4 body_bg">

    <router-view></router-view>

  </main>

  <footer class="py-5 footer_bg text-light">
    <div class="container d-flex justify-content-center">
      <div class="row gap-5">
        <div class="col">
          <h3 class="footer_item">Technologies</h3>
          <ul class="list-unstyled d-flex gap-2">
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-html5"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-css3-alt"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-sass"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-js"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-php"></i></a></li>
          </ul>
        </div>
        <div class="col">
          <h3 class="footer_item">Frameworks</h3>
          <ul class="list-unstyled d-flex gap-4">
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-bootstrap"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-vuejs"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x fa-laravel"></i></a></li>
          </ul>
        </div>
        <div class="col">
          <h3 class="footer_item text-center">Tools</h3>
          <ul class="list-unstyled d-flex gap-2">
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x  fa-node"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x  fa-git-alt"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-2x  fa-github"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-solid  fa-2x fa-database"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-stack-overflow fa-2x"></i></a></li>
            <li><a class="text-decoration-none text-light" href="#"><i class="fa-brands fa-slack fa-2x"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center pt-3">
      <small class="text-center text-light">Copyright &copy; Made with <span class="text-danger"><i class="fa-solid fa-heart"></i></span> by riccsnsdev</small>
    </div>
  </footer>
</template>

<style></style>