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

  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding-top: 40%;
  }

  .menu-panel {
    padding-top: 15%;
  }

  .footer {
    padding-top: 5%;
    text-align: center;
  }


</style>