<template>
  <div class="detalle-proyectos">
    <div v-html="contenido" class="markdown-body"/>
  </div>
</template>

<script>
// @ is an alias to /src
import marked from "marked";
import ESventas from "/src/views/proyectos/ES/ES-analisis-ventas.md";
import ESrestau from "/src/views/proyectos/ES/ES-restaurantes.md";
import ESwebsite from "/src/views/proyectos/ES/ES-website.md";
import ESreceta from "/src/views/proyectos/ES/ES-recetas.md";
import ESscraper from "/src/views/proyectos/ES/ES-web-scraper.md";
import ESbamac from "/src/views/proyectos/ES/ES-bamac.md";
import ESmanapro from "/src/views/proyectos/ES/ES-manapro.md";

export default {
  name: 'DetalleProyectos',
  data() {
    return {
      markdown: {}
    }
  },
  created() {
    let recursos = {
      'bamac': ESbamac,
      'manapro': ESmanapro,
      'recetas': ESreceta,
      'restaurantes': ESrestau,
      'ventas': ESventas,
      'web-scraper': ESscraper,
      'website': ESwebsite,
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

  @import '../assets/css/markdown.css';
  @import '../assets/css/imagenes.css';
  @import '../assets/css/responsive.css';

  .icono {
    width: 30px;
    height: auto;
  }
  
  .fab, .fas, .a {
    font-size: 2rem;
    color: var(--gris);
    margin-left: 2%;
  }
</style>