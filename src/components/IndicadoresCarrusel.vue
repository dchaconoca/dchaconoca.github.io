<template>
  <ul>
    <li
      v-for="(_, index) in elementos"
      class="dot"
      :key="index"
      :class="{'dot-selected': imgActual === index}"
    >
      <button
        class="indicator-btn"
        @click='mostrarElemento(index)'
        :disabled="imgActual === index"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "IndicadoresCarrusel",
  props: { 
      elementos: Array, 
      imgActual: Number, 
      mostrarElemento: Function 
      }
};
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: black;
    opacity: 0.2;
    cursor: pointer;
    position: relative;
  }

  .dot-selected {
    opacity: 0.7;
    cursor: default;
  }

  .indicator-btn {
    position: absolute;
    left: 0px;
    padding: 0px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: transparent;
    border: none;
  }
</style>