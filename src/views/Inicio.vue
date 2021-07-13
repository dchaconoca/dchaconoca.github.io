<template>
  <div id="inicio">
    <h1>¡Hola! Soy Diana</h1>
    <MenuCuadros v-bind:esClaro="false" />
    <div class="textos">
      <h2>Analista y desarrolladora de software</h2>
      <h3>Python: Django, Flask - SQL - Javascript - HTML/CSS</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuCuadros from '@/components/MenuCuadros.vue';

export default {
  name: 'Inicio',
  components: {
    MenuCuadros
  }
}
</script>

<style scoped>
  #inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 98vh;
  }

  .textos {
    line-height: 0.5rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
</style>