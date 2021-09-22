<template>
  <div class="app">
    <div class="contenedor">
      <div class="info">
        <PanelInfo />
      </div>
      <div class="contenido">
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view v-slot="{ Component }">
          <transition mode="out-in"
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TransicionPagina from '@/components/TransicionPagina.vue';
import PanelInfo from '@/components/PanelInfo.vue'

export default {
  name: 'app',
  components: {
    PanelInfo
  },
  data() {
    return {
      titulo: "Diana Chacón Ocariz",
    }
  }
}
</script>

<style>

  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
    --gris: #747474;
    --gris-oscuro: #4b4a4a;
    --gris-claro: #c4c4c4;
  }

  body, html {
    margin: 0; 
    padding: 0; 
    border: 0;
    overflow: hidden;
  }

  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: var(--gris-oscuro);
    margin: 0; 
    padding: 0; 
    border: 0;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .info {
    background-color: black;
  }

  .contenido {
    margin: 2%;
    overflow: auto;
  }

  .contenedor {
    display: grid;
    grid-template-columns: 1fr 3fr;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    border: 0;
  }

</style>
