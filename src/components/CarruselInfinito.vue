<template>
  <div id="carrusel"  class="carrousel" >
    <div class="imagen">
      <FlechaCarrusel
          tipoFlecha="izquierda"
          @click="mostrarPreviaImg"
        />
      <transition name="fade">
        <img :src="require(`@/assets/img/${imagenActual.nombreImg}`)"
            :alt="imagenActual.texto" 
            class="img-carr">
      </transition>

      <FlechaCarrusel
          tipoFlecha="derecha"
          @click="mostrarProxImg"
        />
    </div>
    <div class="indicadores">
      <IndicadoresCarrusel
        :elementos="imagenes"
        :imgActual="imgActual"
        :mostrarElemento="mostrarElemento"
      />
    </div>
  </div>
</template>

<script>
  import FlechaCarrusel from '@/components/FlechaCarrusel.vue'; 
  import IndicadoresCarrusel from '@/components/IndicadoresCarrusel.vue'; 

  export default {
    name: 'carrousel',
    components: {
      FlechaCarrusel,
      IndicadoresCarrusel,
    },
    data() {
      return {
        imgActual: 0,
      }
    },
    props: {
      imagenes: Array
    },
    // mounted() {
    //   setTimeout(this.mostrarProxImg,2000)
    // },
    // updated() {
    //   setTimeout(this.mostrarProxImg,5000)
    // },
    computed: {
      imagenActual() {
        return this.imagenes[this.imgActual];
      },
      irIzquierda() {
        return this.imgActual === 0;
      },
      irDerecha() {
        return this.imgActual === this.imagenes.length - 1;
      }
    },
    methods: {
      mostrarProxImg() {
        if (this.imgActual < this.imagenes.length -1)
          this.imgActual++;
        else 
          this.imgActual = 0;
      },
      mostrarPreviaImg() {
        if (this.imgActual > 0)
          this.imgActual--;
        else 
          this.imgActual = this.imagenes.length -1;
      },
      mostrarElemento(elIndex) {
        this.imgActual = elIndex;
      }
    }
  }
</script>
  
<style scoped>

  .carrousel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  .img-carr {
    width: 200px;
    height: auto;
    border-radius: 1%;
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