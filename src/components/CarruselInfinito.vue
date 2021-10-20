<template>
  <div id="carrusel"  class="carrousel" >
    <div class="imagen-carrusel">
      <FlechaCarrusel
          tipoFlecha="izquierda"
          @click="mostrarPreviaImg"
        />

      <TarjetaCarrusel :imagen="imagenActual" />

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
  import TarjetaCarrusel from '@/components/TarjetaCarrusel.vue'; 
  import FlechaCarrusel from '@/components/FlechaCarrusel.vue'; 
  import IndicadoresCarrusel from '@/components/IndicadoresCarrusel.vue'; 
  import { gsap } from "gsap";

  export default {
    name: 'carrousel',
    components: {
      TarjetaCarrusel,
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
    updated() {
      gsap.fromTo(".tarjeta-carrusel", {opacity: 0}, {duration: 1.5, opacity: 1});
    },
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

  .imagen-carrusel {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

</style>