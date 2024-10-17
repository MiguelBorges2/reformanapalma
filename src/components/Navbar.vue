<template>
    <nav class="navbar navbar-dark navbar-expand-lg border border-dark scu">
      <div class="container">
        <div class="d-flex align-items-center gab">
          <img class="ralao me-1" src="@/assets/logo_Reforma_hznt_w.svg" alt="Logo" />
        </div>
        <div class="d-flex gabs  justify-content-end align-items-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item yip5">
              <a href="#" class="nav-link text-light">Início</a>
            </li>
            <li class="nav-item yip5">
              <a href="#" class="nav-link text-light">Quem somos</a>
            </li>
            <li class="nav-item yip5">
              <a href="#" class="nav-link text-light">Conte seu problema</a>
            </li>
          </ul>
          <form class="d-flex ms-3 wid2" action="/search" method="get">
            <input class="form-control me-2  " type="search" name="query" placeholder="Pesquisar..." aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  .scu {
    background-color: rgb(71, 71, 68);
  }
  .yip5 {
    font-size: 1.2vw;
  }
  .gabs {
    width: 70%;
  }
  .gab {
    padding: 0;
    width: 30%;
  }
  .ralao {
    height: auto;
    width: 45%;
  }
  
  </style>
  
