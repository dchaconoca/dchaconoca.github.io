<template>
  <div id="inicio">
    <h1>¡Hola! Soy Diana</h1>
    <img src="../assets/img/Diana.jpg" alt="Diana Chacón Ocariz" id="img-diana"> 
    <div v-html="contenido"/>
    <div class="textos">
      <h2>Desarrollo de software</h2>
      <h3>Python: Flask, Django - SQL - Javascript - HTML/CSS - VueJS</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inicio from "@/assets/language/ES/ES-inicio.md";

export default {
  name: 'Inicio',
  data() {
    return {
      contenido: inicio
    }
  }
}
</script>

<style scoped>
  #inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
  }

  .textos {
    text-align: center;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.7rem;
  }

   #img-diana {
    width: 200px;
    border-radius: 1%;
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

    #img-diana {
      width: 300px;
      border-radius: 1%;
    }
  }
</style>