<template>
  <router-link :to="articulo.enlace + articulo.id">
    <div :id="articulo.id" class="articulo" >
      <img id="image" :src="require(`@/assets/img/${articulo.imagen}`)" :alt="articulo.txtImg">
      <h4 class="titulo">{{ articulo.titulo }}</h4>
      <p class="texto">{{ articulo.texto }}</p>
      <br>
      <p class="tecnos">{{ articulo.tecnologias }}</p>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'cuadro-menu',
    props: {
        articulo: Object
    },
  }
</script>
  
<style scoped>

  .articulo {
    width: 300px;
    height: 300px;
    border: 1px solid grey;
    border-radius: 5%;
    background-color: white;
    /* box-shadow: 0px 3px 5px rgba(0,0,0,0.16), 0px 5px 10px rgba(0,0,0,0.08); */
  }

  #image {
    width: 50%;
    height: auto;
  }

  .articulo:hover {
    transform: rotate(-5deg);
    z-index: 10;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, .7); */
  }

  .titulo {
    font-size: 1rem;
    margin: 2%;
  }

  .texto {
    font-size: 0.8rem;
    margin: 2%;
  }

  .tecnos {
    font-size: 0.9rem;
    font-style: italic;
    margin: 2%;
  }

</style>