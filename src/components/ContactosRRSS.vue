<template>
  <div id="contactos-rrss">
    <div id="item1">
      <a href="https://github.com/dchaconoca" target="_blank" title="Ir a perfil GitHub">
      <i class="fab fa-github"></i></a>
    </div>
    <div id="item2">
      <a href="https://www.linkedin.com/in/dchaconoca" target="_blank" title="Ir a perfil LinkedIn">
      <i class="fab fa-linkedin-in"></i></a>
    </div>
    <div id="item3">
      <a href="https://twitter.com/dchaconoca" target="_blank" title="Ir a perfil Twitter">
      <i class="fab fa-twitter"></i></a>
    </div>
    <div id="item4">
      <a download="CV-Diana.pdf" target="_blank" href="assets/docs/CV-Diana.pdf" title="Descargar CV"><i class="fas fa-file-download"></i></a>
    </div>
    <div id="item5">
      <a href="mailto:dchacon74@gmail.com" title="Enviar correo dchacon74@gmail.com"><i class="fas fa-at"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contactos-rrss',
  }
</script>

<style scoped>
  .fab, .fas, .a {
    color: white;
    font-size: 2rem;
  }

  #contactos-rrss {
    display: flex;
    justify-content: space-evenly;
  }

</style>