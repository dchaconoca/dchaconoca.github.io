<template>
  <div id="contactos-rrss">
    <div id="rrss">
      <div>
        <a href="#inicio" title="Ir al inicio"><i class="fas fa-home"></i></a>
      </div>
      <div>
        <a href="https://github.com/dchaconoca" target="_blank" title="Ir a perfil GitHub">
        <i class="fab fa-github"></i></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/dchaconoca" target="_blank" title="Ir a perfil LinkedIn">
        <i class="fab fa-linkedin-in"></i></a>
      </div>
      <div>
        <a href="https://twitter.com/dchaconoca" target="_blank" title="Ir a perfil Twitter">
        <i class="fab fa-twitter"></i></a>
      </div>
      <div>
        <a download="CV-Diana.pdf" target="_blank" href="CV-Diana.pdf" title="Descargar CV"><i class="fas fa-file-download"></i></a>
      </div>
      <div>
        <a href="mailto:dchacon74@gmail.com" title="Enviar correo dchacon74@gmail.com"><i class="fas fa-at"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contactos-rrss',
  }
</script>

<style scoped>
  .fab, .fas {
    color: white;
    font-size: 1.5em;
  }

  #rrss {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #rrss > div {
    margin: 0 10%;
  }
</style>