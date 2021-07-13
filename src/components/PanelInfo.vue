<template>
  <div id="panel-info" class="clases">
    <div class="menu-panel">
      <MenuCuadros v-bind:esClaro="true" />
    </div>
    <h2>{{ titulo }}</h2>
    <div class="contactos">
      <ContactosRRSS /> 
    </div>
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

  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
  }

  #panel-info {
    position: relative;
    width: 30vw;
    height: 100vh;
    color: white;
  }

  h2 {
    position: absolute;
    top: 60%;
    left: 2%;
    font-size: 3rem;
    font-weight: bold;
  }

  .menu-panel {
    margin-top: 15%;
  }


  /* El ancho del contenedor es para permitir que las propiedades del */
  /* flexbox se comporten correctamente */
  .contactos {
    position: absolute;
    width: 100%;
    top: 90%;
  }

</style>