<template>
  <div id="contactos-rrss">
    <div id="item1">
      <a href="https://github.com/dchaconoca" target="_blank" title="Ir a perfil GitHub">
      <i class="fab fa-github-square" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item2">
      <a href="https://www.linkedin.com/in/dchaconoca" target="_blank" title="Ir a perfil LinkedIn">
      <i class="fab fa-linkedin" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item3">
      <a href="https://twitter.com/dchaconoca" target="_blank" title="Ir a perfil Twitter">
      <i class="fab fa-twitter-square" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item4">
      <!-- <a download="CVDianaChacon.pdf" target="_blank" href="require(`@/assets/docs/CVDianaChacon.pdf`)" title="Descargar CV"> -->
      <a download="CVDianaChacon.pdf" target="_blank" href="assets/docs/CVDianaChacon.pdf" title="Descargar CV">
      <i class="fas fa-file-download" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
    </div>
    <div id="item5">
      <a href="mailto:dchacon74@gmail.com" title="Enviar correo dchacon74@gmail.com">
      <i class="fas fa-envelope-square" v-bind:class="[esClaro ? 'texto-claro' : 'texto-oscuro']"></i></a>
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
    font-size: 2rem;
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

</style>