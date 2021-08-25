<template>
  <div class="detalle-post"> 
    <div v-html="contenido"/>
  </div>
</template>

<script>
// @ is an alias to /src
import marked from "marked";
import hljs from "highlight.js";
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
  mounted() {
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

  /* @import "~highlight.js/styles/base16/default-dark.css"; */
  /* @import "~highlight.js/styles/base16/dirtysea.css"; */
  /* @import "~highlight.js/styles/base16/pop.css"; */
  @import "~highlight.js/styles/mono-blue.css";

  .markdown-body > p > img {
    max-width: 90%;
    max-height: 600px;
    display: flex;
    margin: auto;
  }

  #img-diana {
    width: 200px;
    border-radius: 5%;
    float: right;
  }
 
</style>