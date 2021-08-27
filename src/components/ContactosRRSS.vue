<template>
  <div id="contactos-rrss">
    <div id="item1">
      <a href="https://github.com/dchaconoca" target="_blank" title="Ir a perfil GitHub">
      <i class="fab fa-github" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item2">
      <a href="https://www.linkedin.com/in/dchaconoca" target="_blank" title="Ir a perfil LinkedIn">
      <i class="fab fa-linkedin-in" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item3">
      <a href="https://twitter.com/dchaconoca" target="_blank" title="Ir a perfil Twitter">
      <i class="fab fa-twitter" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item4">
      <a download="CV-Diana.pdf" target="_blank" href="assets/docs/CV-Diana.pdf" title="Descargar CV">
      <i class="fas fa-file-download" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item5">
      <a href="mailto:dchacon74@gmail.com" title="Enviar correo dchacon74@gmail.com">
      <i class="fas fa-at" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contactos-rrss',
    props: {
        esClaro: Boolean,
    },
  }
</script>

<style scoped>

  .fab, .fas, .a {
    font-size: 1rem;
  }

  #contactos-rrss {
    display: flex;
    justify-content: space-evenly;
  }

  .texto-claro {
    color: white;
  }

  .texto-oscuro {
    color: var(--gris);
  }

  @media (min-width: 768px) { 

  .fab, .fas, .a {
      font-size: 2rem;
    }
  }

</style>