<template>
  <div id="categoria-cv">
    <div v-for="categoria in categorias" :key="categoria.id">
      <details>
        <summary class="titulo"><strong>{{ categoria.nombre }}</strong></summary>
          <ItemsCV :items=categoria.items />
      </details>
    </div>
  </div>
</template>

<script>
  import ItemsCV from '@/components/ItemsCV.vue';

  export default {
    name: 'categoria-cv',
    components: {
      ItemsCV,
    },
    props: {
        categorias: Array
    },
  }
</script>
  
<style scoped>
  .titulo {
    font-size: 1rem;
  }
</style>