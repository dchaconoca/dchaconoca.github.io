<template>
  <div class="detalle-proyectos">
    <div v-html="contenido"/>
  </div>
</template>

<script>
// @ is an alias to /src
import marked from "marked";
import hljs from "highlight.js";
import jsHighlight from "highlight.js/lib/languages/javascript";
import ESbamac from "/src/views/proyectos/ES/ES-bamac.md";
import ESreceta from "/src/views/proyectos/ES/ES-gestion-receta.md";
import ESormsql from "/src/views/proyectos/ES/ES-orm-sql.md";
import ESscraper from "/src/views/proyectos/ES/ES-web-scraper.md";
import ESwebsite from "/src/views/proyectos/ES/ES-website-vue.md";

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
      'gestion-receta': ESreceta,
      'orm-sql': ESormsql,
      'web-scraper': ESscraper,
      'website-vue': ESwebsite,
    }

    this.markdown = recursos[this.$route.params.id];
  },
  mounted() {
    hljs.registerLanguage("javascript", jsHighlight)
    hljs.highlightAll()
  },
  computed: {
      contenido() {
        return marked(this.markdown, {
          highlight: function(markdown) {
            return hljs.highlightAuto(markdown).value
          }
        })
      }
  }
}
</script>

<style scoped>
 
</style>