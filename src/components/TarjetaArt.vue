<template>
  <router-link :to="articulo.enlace + articulo.id">
    <div :id="articulo.id" class="articulo" >
      <div class="imagen"> 
        <img id="imagen" :src="require(`@/assets/img/${articulo.imagen}`)" :alt="articulo.txtImg">
      </div>
      <div class="textos">
        <h4 class="titulo">{{ articulo.titulo }}</h4>
        <p class="subtitulo">{{ articulo.texto }}</p>
        <p class="fecha">{{ articulo.fecha }}</p>
      </div>
      <footer class="tecnos">
        <div v-for="(tecno, index) in articulo.tecnologias" :key="index" class="tecnologia">
          <strong>{{ tecno }}</strong>
        </div>
      </footer>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'articulo',
    props: {
        articulo: Object
    },
  }
</script>
  
<style scoped>

  .articulo {
    display: grid;
    width: 90%;
    height: 140px;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 50px 1fr 30px;
    column-gap: 1%;
    row-gap: 1%;
    border: 1px solid var(--gris-claro);
    border-radius: 1%;
    margin: 2%;
    padding: 1%;
  }

  .imagen {
    grid-row: 1/2;
    grid-column: 1/2;
    text-align: center;
  }

  .textos {
    grid-row: 1/3;
    grid-column: 2/3;
  }

  .tecnos {
    grid-row: 3/4;
    grid-column: 2/3;
    display: flex;
    justify-content:flex-end;
    font-size: 0.8rem;
    font-style: bold;
    margin: 2%;
  }

  .tecnologia {
    margin: 0 1%;
  }

  #imagen {
    width: auto;
    height: 100%;
  }

  .articulo:hover {
    box-shadow: 0 5px 10px rgba(47, 47, 47, 0.5);
  }

  .titulo {
    font-size: 0.8rem;
    margin: 2%;
  }

  .subtitulo {
    font-size: 0.6rem;
    margin: 2%;
  }

  .fecha {
    font-size: 0.5rem;
    color: var(--gris);
    margin: 2%;
  }

    /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) { 
    .articulo {
      grid-template-columns: 120px 1fr;
      grid-template-rows: 100px 1fr 20px;
    }

    .titulo {
      font-size: 1.2rem;
    }

    .subtitulo {
      font-size: 0.9rem;
    }

    .fecha {
      font-size: 0.7rem;
    }

    .tecnos {
      font-size: 1rem;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  /* @media (min-width: 768px) { 
    .titulo {
      font-size: 1.5rem;
    }

    .subtitulo {
      font-size: 1.2rem;
    }

    .fecha {
      font-size: 1rem;
    }
  } */

  /* Large devices (desktops, 992px and up) */
  /* @media (min-width: 992px) { 

    #imagen {
      width: 50px;
      height: 50px;
    }
  } */

</style>