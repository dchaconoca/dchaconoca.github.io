<template>
  <div class="proyectos">
    <h1>Proyectos y Experiencia Profesional en Desarrollo de Software</h1>
<<<<<<< HEAD
=======
    <div> 
      <p><strong>Consultar otros proyectos, ejercicios y pruebas en mi perfil GitHub:</strong>
        <a href="https://github.com/dchaconoca" target="_blank" title="Ir a perfil GitHub">
        <i class="fab fa-github-square" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
      </p>
    </div>
>>>>>>> master
    <div v-for="proyecto in proyectos" :key="proyecto.id">
      <TarjetaArt :articulo="proyecto" class="art-proy" />
    </div>
  </div>
</template>

<script>
import TarjetaArt from '@/components/TarjetaArt.vue'
import paramProy from "@/assets/config/ES/ES-paramProy.json";

export default {
  name: 'Proyecto',
  components: {
    TarjetaArt
  },
  data() {
    return {
      proyectos: paramProy
    }
  }
}
</script>

<style scoped>

  .proyectos {
    width: 95%;
  }


</style>