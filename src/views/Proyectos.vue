<template>
  <div class="proyectos">
    <h1>Proyectos y Experiencia Profesional en Desarrollo de Software</h1>
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