<template>
  <div id="menu-hamburguesa">
    
      <div class="botones"> 
          <i id="abrir" class="fas fa-bars"  @click="navVisible = !navVisible" v-show="! navVisible"></i>
          <i id="cerrar" class="fas fa-times" @click="navVisible = !navVisible" v-show="navVisible"></i>
      </div>
      <nav v-show="navVisible">
        <ul>
          <div v-for="opcion in opciones" :key="opcion.id">
            <li><a :href="opcion.enlace.link">{{opcion.enlace.titulo}}</a></li>
          </div>
        </ul>
      </nav>
  </div>
</template>

<script>
  import paramMenu from "@/assets/language/ES/ES-paramMenu.json";

  export default {
    name: 'menu-hamburguesa',
    data() {
      return { 
        navVisible: false,
        opciones: paramMenu,
      };
    },
  }
</script>
  
<style scoped>
  
  menu-hamburguesa {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .fas, .a {
    color: white;
    font-size: 2rem;
  }


  /* Nav */

  nav {
    display: flex;
    flex-direction: column;
  }

  nav ul {
    font-size: 1rem;
    list-style: none;
    text-align: center;
  }

  nav ul li {
    margin-bottom: 1rem;
  }

  nav ul li a,
  nav ul li a:link,
  nav ul li a:visited
  {
    text-decoration: none;
    color: white;
  }

  nav ul li a:focus,
  nav ul li a:hover,
  nav ul li a:active {
    text-decoration: none;
    color: cornflowerblue;
  }
</style>