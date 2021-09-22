<template>
  <div class="detalle-post"> 
    <div v-html="contenido" class="markdown-body"/>
  </div>
</template>

<script>
// @ is an alias to /src
import marked from "marked";
import ESsymbols from "/src/views/blog/ES/ES-symbols.md";
import ESprototipo from "/src/views/blog/ES/ES-prototipo.md";

export default {
  name: 'DetallePost',
  data() {
    return {
      markdown: {}
    }
  },
  created() {
    let recursos = {
      'prototipos': ESprototipo,
      'symbols': ESsymbols,
    }

    this.markdown = recursos[this.$route.params.id];
  },
  computed: {
      contenido() {
        return marked(this.markdown)
      }
  }
}
</script>

<style>
  /* No limitamos el scoop para que puedan aplicarse estilos al markdown */
  /* Se pueden escribir etiquetas html directamente en el documento markdown y agregar clases css */
  .img-art {
    margin: auto;
		display: block;
    padding: 2%;
  }
</style>