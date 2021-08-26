<template>
  <div class="tarjeta-carrusel" >
    <figure>
      <img id="image" :src="require(`@/assets/img/${imagen.nombreImg}`)" 
      :alt="imagen.txtImg" class="img-carr">
      <figcaption class="titulo-img">{{imagen.texto}}</figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'tarjeta-carrusel',
    props: {
        imagen: Object
    },
  }
</script>
  
<style scoped>
  .img-carr {
    width: 200px;
    height: auto;
    border-radius: 1%;
  }

  .titulo-img {
    font-size: 1rem;
    font-style: bold;
    text-align: center;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media (min-width: 768px) {
    .img-carr {
      width: 300px;
    }
  }

  @media (min-width: 992px) { 
    .img-carr {
      width: 400px;
    }
  }

</style>