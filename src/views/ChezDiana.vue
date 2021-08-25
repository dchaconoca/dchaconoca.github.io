<template>
  <div class="chez-diana">
    <div v-html="contenido"/>
      <CarruselInfinito class="carrusel" 
          :imagenes="imagenes" />
  </div>
</template>

<script>
import chezDiana from "@/assets/language/ES/ES-recetario-flask.md";
import CarruselInfinito from '@/components/CarruselInfinito.vue';
import imagenes from "@/assets/language/ES/ES-imgCD.json";

export default {
  name: 'ChezDiana',
  components: {
      CarruselInfinito,
    },
  data() {
    return {
      contenido: chezDiana,
      imagenes: imagenes,
    }
  }
}
</script>

<style scoped>

  .carrousel {
    display: flex;
    justify-content: center;
  }

</style>