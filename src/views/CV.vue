<template>
  <div class="blog">
    <div class="panel-content">
      <div v-html="contenido"/>
      <CategoriasCV :categorias="categorias" />
    </div>
  </div>
</template>

<script>
import cv from "@/assets/language/ES/ES-cv.md";
import CategoriasCV from '@/components/CategoriasCV.vue';
import categoriasES from "@/assets/config/ES/ES-cv.json";

export default {
  name: 'Proyecto',
  components: {
    CategoriasCV
  },
  data() {
    return {
      categorias: categoriasES,
      contenido: cv
    }
  }
}
</script>

<style scoped>

</style>