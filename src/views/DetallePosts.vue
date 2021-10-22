<template>
  <div class="detalle-post"> 
    <div v-html="contenido" class="markdown-body"/>
  </div>
</template>

<script>
// @ is an alias to /src
import marked from "marked";
import ESsymbols from "/src/views/blog/ES/ES-symbols.md";
import ESsql1 from "/src/views/blog/ES/ES-sql.md";
import ESsql2 from "/src/views/blog/ES/ES-sql2.md";

export default {
  name: 'DetallePost',
  data() {
    return {
      markdown: {}
    }
  },
  created() {
    let recursos = {
      'como-construir-modelo-er': ESsql1,
      'como-hacer-consultas-sql': ESsql2,
      'symbols-javascript': ESsymbols,
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
  
   @import '../assets/css/markdown.css';
   @import '../assets/css/imagenes.css';
   @import '../assets/css/responsive.css';

</style>