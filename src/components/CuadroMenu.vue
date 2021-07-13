<template>
  <!-- Se peuede elegir si mostrar o no el enlace (parámetro null) -->
  <div :id="cuadro.nombre" class="cuadro-menu" v-show="esVisible">
    <router-link to="enlace.link">
      <p class="esClaro ? 'texto-claro' : 'texto-oscuro'">{{ cuadro.texto }}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'cuadro-menu',
    props: {
        enlace: Object,
        cuadro: Object,
        esVisible: Boolean,
        esClaro: Boolean,
    },
  }
</script>
  
<style scoped>
  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
    --gris: rgb(85, 85, 85);
  }

  p {
    visibility: hidden;
  }

  .cuadro-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .cuadro-menu:hover .texto {
    visibility: visible;
    font-size: 1rem;
  }

  .texto-claro {
    color: white;
  }

  .texto-oscuro {
    color: var(--gris);
  }

</style>