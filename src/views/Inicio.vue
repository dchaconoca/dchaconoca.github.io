<template>
  <div class="inicio">
    <div class="menu-panel">
      <MenuCuadros />
    </div>
    <h1>Diana Chacón Ocariz</h1>
    <div class="textos">
      <h2>Estudiante de Ciencia de Datos</h2>
      <h2>Desarrollo de software</h2>
      <h3>Python - SQL - Javascript - HTML/CSS</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import inicio from "@/assets/language/ES/ES-inicio.md";
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
    font-size: 1.5rem;
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
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
</style>