<template>
  <div class="app">
    <div>
      <div @click="show = true" class="btn-menu" v-if="! show">
        <i class="fas fa-bars"></i>
      </div>

      <div @click="show = false" class="btn-menu" v-if="show">
        <i class="fas fa-times"></i>
      </div>
        
      <transition name="slide-fade">
        <div class="info" v-if="show">
          <PanelInfo />
        </div>
      </transition>
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
</template>

<script>
// @ is an alias to /src
import PanelInfo from '@/components/PanelInfo.vue'

export default {
  name: 'app',
  components: {
    PanelInfo
  }, 
  data() {
      return {
        show: false
      }
  }
  // beforeRouteUpdate (to, from, next)  {
  //   console.log("cambio")
  //   console.log(to, from, next)  
  // }
  // watch: {
  //   $route(to, from) {
  //     tamano = this.window.width
  //     console.log(tamano)
  //   }
  // }
}
</script>

<style>

  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
    --gris: #747474;
    --gris-oscuro: #535353;
    --gris-claro: #cecece;
  }

  body, html {
    margin: 0; 
    padding: 0; 
    border: 0;
  }

  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: var(--gris-oscuro);
    margin: 0; 
    padding: 0; 
    border: 0;
    display: flex;
    flex-direction: row;
  }

  .btn-menu {
    position: fixed;
    left: 1%;
    top: 1%;
    z-index: 100;
  }

  .info {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  .fas {
    font-size: 2rem;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active,
  .slide-fade-leave-active  {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-50px);
    opacity: 0;

  }

  .content-fade-enter-from,
  .content-fade-leave-to {
    transform: translateX(50px);
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) { 
    .info {
      width: 50vw;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    .info {
      width: 30vw;
    }
  }

</style>
