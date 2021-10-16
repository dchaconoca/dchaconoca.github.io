<template>
  <div class="blog">
    <h1>Blog</h1>
    <h3>Artículos sobre desarrollo de software y algo más</h3>
    <div v-for="post in posts" :key="post.id">
      <TarjetaArt :articulo="post" class="art-blog" />
    </div>
  </div>
</template>

<script>
import TarjetaArt from '@/components/TarjetaArt.vue'
import paramBlog from "@/assets/config/ES/ES-paramBlog.json";

export default {
  name: 'Blog',
  components: {
    TarjetaArt
  },
  data() {
    return {
      posts: paramBlog
    }
  }
}
</script>

<style scoped>

  @import '../assets/css/responsive.css';

</style>