<template>
  <div class="acerca">
    <img src="../assets/img/Diana.jpg" alt="Diana Chacón Ocariz" id="img-diana"> 
    <div v-html="contenido"/>
    <div class="contactos">
        <ContactosRRSS v-bind:esClaro="false" /> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import acercaES from "@/assets/language/ES/ES-acerca.md";
import ContactosRRSS from '@/components/ContactosRRSS.vue';

export default {
  name: 'Inicio',
  components: {
      ContactosRRSS,
    },
  data() {
    return {
      contenido: acercaES
    }
  }
}
</script>

<style scoped>
  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
    --gris: #636363;
  }

  #img-diana {
    width: 200px;
    border-radius: 5%;
    float: right;
    margin: 2%;
  }
 
</style>