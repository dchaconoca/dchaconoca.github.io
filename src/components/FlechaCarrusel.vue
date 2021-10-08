<template>
  <button class="btn">
    <img
      class="icon"
      :src="require(`@/assets/img/${tipoFlecha}.svg`)"
      :alt="'Flecha' + tipoFlecha"
    >
  </button>
</template>
<script>
export default {
  name: "FlechaCarrusel",
  props: { 
    tipoFlecha: String 
    }
};
</script>

<style scoped>
  .btn {
    height: 90px;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 0.5;
    display: none;
  }

  .btn:focus {
    outline: none;
  }

  .btn:hover {
    opacity: 0.7;
  }

  .btn:disabled {
    opacity: 0.2;
    cursor: default;
  }

  .icon {
    height: 90px;
    width: auto;
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .btn {
      display: contents;
    }
  }


</style>