<template>
  <transition
    name="transicion-pagina"
    mode="out-in"
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut"
  >
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: 'transicion-pagina',
  }
</script>
  
<style scoped>

</style>