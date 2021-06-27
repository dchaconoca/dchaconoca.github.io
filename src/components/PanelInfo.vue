<template>
  <div id="panel-info" class="panel-info">
    <h2>{{ titulo }}</h2>
    <div class="contactos">
      <ContactosRRSS /> 
    </div>
  </div>
</template>

<script>
  import ContactosRRSS from '@/components/ContactosRRSS.vue';

  export default {
    name: 'panel-info',
    components: {
      ContactosRRSS,
    },
    props: {
        titulo: String,
    },
  }
</script>

<style scoped>

  #panel-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98vw;
    height: 15px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    left: 2%;
  }

  .contactos {
    text-align: end;
  }

</style>