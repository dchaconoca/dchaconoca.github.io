<template>
  <div class="inicio">
    <div class="menu-panel">
      <MenuCuadros />
    </div>
    <h1>Diana Chacón Ocariz</h1>
    <div class="textos">
      <h2>Hago muchas cosas</h2>
      <h3>Project Management - Desarrollo de software</h3>
      <h3>Análisis y Ciencia de Datos</h3>
      <h3>Estrategias de Marketing Digital</h3>
      <h3>Cocino de vez en cuando...</h3>
      <h3>¡Y lo que falta!</h3>
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
  .inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: black;
  }

  .textos {
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 1.2rem;
    color: white;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.7rem;
  }

  @media (min-width: 768px) { 

    .textos {
      line-height: 0.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
</style>