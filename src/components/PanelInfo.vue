<template>
  <div class="panel-info">
    <div class="menu-panel">
      <MenuCuadros v-bind:esClaro="true" />
    </div>
    <h2 class="titulo">Diana Chacón Ocariz</h2> 
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
    }
  }
</script>

<style scoped>

  .panel-info {
    display: grid;
    grid-template-rows: 9fr 1fr 1fr 1fr;
    color: white;
    background-color: black;
    height: 100vh;
  }

  .menu-panel {
    padding-top: 10%;
  }

  .titulo {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .contactos {
    margin-top: 2%;
  }
  
  .footer {
    text-align: center;
  }

  .footer p {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) { 

    .titulo {
      font-size: 2rem;
    }

    .footer p {
      font-size: 0.8rem;
    }
  }

</style>