<template>
  <div class="app">
    <div class="contenedor">
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view class="vista inicio" name="inicio"></router-view>
      <div class="secciones">
          <router-view class="vista panel-info" name="panel"></router-view>
          <router-view class="vista contenido" ></router-view>
      </div>
      <footer class="footer">
        <p>Diana Chacón Ocariz - 2021</p>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TransicionPagina from '@/components/TransicionPagina.vue';

export default {
  name: 'app',
  // components: {
  //   TransicionPagina
  // }
}
</script>

<style>

  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
    --gris: #636363;
  }

  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: var(--gris);
    margin: 0; 
    padding: 0; 
    border: 0;
    /* width: 100vw;
    height: 100vh; */
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .contenedor {
    display: grid;
    grid-template-areas: "inicio"
                          "secciones"
                          "footer";
    width: 100vw;
    height: 100vh;
  }

  /* .inicio {
    width: 100vw;
    height: 90vh;
    overflow: hidden;
  } */

  .secciones {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: [x0] 30% [x1] 70% [x2];
    /* grid-template-rows: [y0] 100% [x1] 70% [x2]; */
    /* overflow: hidden;
    width: 100vw; */
  }

  .panel-info {
    background-color: var(--rojo);
    /* width: 500px; */
    grid-column: x0 / x1;
    /* position: absolute;
    top: 0;
    left: 0; */
  }

  .contenido {
    grid-column: x1 / x2;
    /* height: 100vh;
    width: 68%; */
    overflow-y: auto;
    margin: 2%;
  }

  .sec-inicio {
    background-color: var(--rojo);
  }

  .footer {
    text-align: center;
  }


</style>
