<template>
  <div id="items-cv">
    <div v-for="item in items" :key="item.id">
      <div class="grid">
        <div class="fecha"> <strong> {{ item.fecha }} </strong> </div>
        <div class="item">
          <p>
            <strong> {{ item.titulo }} </strong>
            <br>
            <em>{{ item.empresa }}</em>
            <br>
            {{ item.descripcion }}
            <br>
            <em>{{ item.ciudad }}</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'items-cv',
    props: {
        items: Array,
    },
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  .fecha {
    text-align: right;
    margin-top: 10%;
    margin-right: 10%;
  }

</style>