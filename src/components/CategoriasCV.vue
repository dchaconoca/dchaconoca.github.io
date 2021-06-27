<template>
  <div id="categoria-cv">
    <div v-for="categoria in categorias" :key="categoria.id">
      <div class="tab-container">
        <input v-bind:id="categoria.id" type="checkbox">
        <label v-bind:for="categoria.id">{{ categoria.nombre }}</label>
        <div class="tab-content">
          <ItemsCV :items=categoria.items /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemsCV from '@/components/ItemsCV.vue';

  export default {
    name: 'categoria-cv',
    components: {
      ItemsCV,
    },
    props: {
        categorias: Array
    },
  //   mounted: function() {
  //   // Checking if everything works, delete this right after you see that everything works
  //   console.log(this.categorias);
  // },
  }
</script>

<style scoped>
  /* (A) TABS CONTAINER */
  .tab-container {
    position: relative;
  }

  /* (B) HIDE CHECKBOX */
  .tab-container input { display: none; }

  /* (C) TAB LABEL */
  .tab-container label {
    display: block;
    margin-top: 1%;
    padding: 1%;
    color: white;
    font-weight: bold;
    background: #73b829;;
    cursor: pointer;
  }

  /* (D) TAB CONTENT */
  .tab-container .tab-content {
    /* CSS ANIMATION WILL NOT WORK WITH AUTO HEIGHT */
    /* THIS IS WHY WE USE MAX-HEIGHT INSTEAD */
    overflow: hidden;
    transition: max-height 0.3s;
    max-height: 0;
  }
  .tab-container .tab-content p { padding: 1%; }

  /* (E) OPEN TAB ON CHECKED */
  .tab-container input:checked ~ .tab-content { max-height: 170vh; }

  /* (F) EXTRA - ADD ARROW INDICATOR */
  .tab-container label::after {
    content: "\25b6";
    position: absolute;
    right: 10px;
    top: 10px;
    display: block;
    transition: all 0.4s;
  }
  .tab-container input:checked ~ label::after { transform: rotate(90deg); }

</style>