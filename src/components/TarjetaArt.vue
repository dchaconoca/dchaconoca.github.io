<template>
  <router-link :to="articulo.enlace + articulo.id">
    <div :id="articulo.id" class="articulo" >
      <div class="imagen"> 
        <img id="imagen" :src="require(`@/assets/img/${articulo.imagen}`)" :alt="articulo.txtImg">
      </div>
      <div>
        <h4 class="titulo">{{ articulo.titulo }}</h4>
        <p class="texto">{{ articulo.texto }}</p>
        <br>
        <p class="tecnos">{{ articulo.tecnologias }}</p>
      </div>
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
    border-radius: 1%;
    background-color: white;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.16), 0px 5px 10px rgba(0,0,0,0.08);
    margin: 5%;
  }

  #imagen {
    width: 50%;
    height: auto;
  }

  .imagen {
    text-align: center;
  }

  .articulo:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
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