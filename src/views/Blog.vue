<template>
  <div class="acerca">
    <PanelInfo :titulo="titulo" class="panel-info" />  
    <!-- <img src="../assets/img/Diana.jpeg" alt="Diana Chacón Ocariz" id="img-diana">  -->
    <div class="panel-content">
      <div v-html="contenido"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PanelInfo from '@/components/PanelInfo.vue';
import acercaES from "@/assets/language/ES/ES-acerca.md";

export default {
  name: 'Inicio',
  components: {
    PanelInfo
  },
  data() {
    return {
      titulo: "Sobre mí",
      contenido: acercaES
    }
  }
}
</script>

<style scoped>
  .acerca {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 98vh;
  }

  .panel-info {
    background-color: --var(rojo);
    width: 30%;
    height: 100%;
  }

  .panel-content {
    width: 68%;
    height: 100%;
  }
 
</style>