<template>
  <div class="app">
    <div class="contenedor">
      <div class="info">
        <PanelInfo :titulo="titulo" class="panel-info" />
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
    --gris: #636363;
    --gris-claro: #f5f5f5;
  }

  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: var(--gris);
    margin: 0; 
    padding: 0; 
    border: 0;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .contenedor {
    position: relative;
    display: inline;
    margin: 0; 
    padding: 0; 
    border: 0;
  }

  .info {
    position: fixed;
    top: 0; 
    left: 0; 
    width: 30%;
    z-index: 10;
  }

  .contenido {
    position: relative;
    left: 30%;
    width: 68%;
    overflow-y: auto;
    margin: 2%;
  }

</style>
