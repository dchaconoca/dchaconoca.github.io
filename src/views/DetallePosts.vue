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
      'consultas-sql-1': ESsql1,
      'consultas-sql-2': ESsql2,
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
   @import '../assets/css/responsive.css';

  figure {
    text-align: center;
  }

  .img-art {
    width: 230px;
    margin: auto;
		display: block;
    padding: 2%;
  }

  .titulo-img {
    font-size: 1rem;
    font-style: bold;
    text-align: center;
  }

   @media (min-width: 576px) { 
   .img-art {
      width: 450px;
    }
  }
</style>