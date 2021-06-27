<template>
  <div id="items-cv">
    <table class="table">
      <tr v-for="item in items" :key="item.id">
        <td class="col-sm-2 text-end align-top pt-2 agno"> <strong> {{ item.agno }} </strong> </td>
        <td class="col-sm-8 text-start">
          <p>
            <strong> {{ item.titulo }} </strong>
            <br>
            <em>{{ item.empresa }}</em>
            <br>
            {{ item.descripcion }}
            <br>
            <em>{{ item.ciudad }}</em>
          </p>
        </td>
      </tr>
    </table>
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
</style>