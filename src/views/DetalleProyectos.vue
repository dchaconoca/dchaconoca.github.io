<template>
  <div class="detalle-proyectos">
    <div v-html="contenido" class="markdown-body"/>
  </div>
</template>

<script>
// @ is an alias to /src
import marked from "marked";
import ESreceta from "/src/views/proyectos/ES/ES-recetas.md";
import ESwebsite from "/src/views/proyectos/ES/ES-website.md";
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
  .img-art {
    width: 300px;
    height: auto;
    border-radius: 1%;
    margin: 2%;
  }

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