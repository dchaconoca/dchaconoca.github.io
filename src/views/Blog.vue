<template>
  <div class="blog">
    <div v-for="post in posts" :key="post.id">
      <TarjetaArt :articulo="post" class="art-blog" />
    </div>
  </div>
</template>

<script>
import TarjetaArt from '@/components/TarjetaArt.vue'
import paramBlog from "@/assets/language/ES/ES-paramBlog.json";

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

  .blog {
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2%;
  }

</style>