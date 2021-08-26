<template>
  <div class="proyectos">
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
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    justify-content: space-around;
  }


</style>