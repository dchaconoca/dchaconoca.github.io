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

  @import '../assets/css/responsive.css';

  #img-diana {
    width: 100px;
    border-radius: 5%;
    float: right;
    margin: 2%;
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) { 

    #img-diana {
      width: 150px;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 

    #img-diana {
      width: 200px;
    }

  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 

    #img-diana {
      width: 250px;
    }

  }
 
</style>