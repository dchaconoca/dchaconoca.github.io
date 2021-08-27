<template>
  <div class="panel-info">
    <div class="menu-panel">
      <MenuCuadros v-bind:esClaro="true" />
    </div>
      <h2>{{ titulo }}</h2> 
      <div class="contactos">
        <ContactosRRSS v-bind:esClaro="true" /> 
      </div>
      <footer class="footer">
        <p>Hecho en VueJS por Diana Chacón Ocariz - 2021</p>
      </footer>
  </div>
</template>

<script>
  import ContactosRRSS from '@/components/ContactosRRSS.vue';
  import MenuCuadros from '@/components/MenuCuadros.vue';

  export default {
    name: 'panel-info',
    components: {
      ContactosRRSS,
      MenuCuadros,
    },
    props: {
      titulo: String,
      clases: Array
    },
  }
</script>

<style scoped>

  .panel-info {
    color: white;
    background-color: black;
    height: 100vh;
  }

  .menu-panel {
    padding-top: 15%;
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    padding-top: 35%;
  }
  
  .footer {
    padding-top: 5%;
    text-align: center;
  }

  .footer p {
    font-size: 0.7rem;
  }

  @media (min-width: 768px) { 

    h2 {
      font-size: 2rem;
    }

    .footer p {
      font-size: 1rem;
    }
  }

</style>