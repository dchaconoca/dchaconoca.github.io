<template>
  <div class="menu-cuadros">
    <div v-for="opcion in opciones" :key="opcion.id" :id="opcion.id" class="cuadro" >
      <router-link :to="opcion.enlace.link">
        <p class="texto-claro">{{ opcion.enlace.texto }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import paramMenu from "@/assets/config/ES/ES-paramMenu.json";

  export default {
    name: 'menu-cuadros',
    data() {
      return {
        opciones: paramMenu,
      }
    }
  }
</script>

<style scoped>

  /* @import "/assets/css/animaciones.css"; */

  .menu-cuadros {
    display: grid;
    grid-template-columns: [x0] 1fr [x1] 1fr [x2] 1fr [x3] 1fr [x4] 1fr [x5] 1fr [x6] 1fr [x7] 1fr [x8] 1fr [x9] 1fr [x10];
    grid-template-rows:  [y0] 1fr [y1] 1fr [y2] 1fr [y3] 1fr [y4] 1fr [y5] 1fr [y6] 1fr [y7] 1fr [y8];
  }

  .cuadro {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
  }

  p {
    visibility: hidden;
  }

  .texto-claro {
    color: white;
  }

  .cuadro:hover {
    visibility: hidden; 
    animation-play-state: paused;
  }

  .cuadro:hover p {
    visibility: visible;
    font-size: 1rem;
  }

  #op0 {
    grid-column: x4 / x6;
    grid-row: y3 / y5;
    width: 45px;
    height: 45px;
    background-color: white;
    animation: moverseOp0 1s ease infinite alternate both running;
  }

  #op1 {
    grid-column: x2 / x4;
    grid-row: y0 / y2;
    width: 50px;
    height: 50px;
    background-color: var(--rojo);
    animation: moverseOp1 1s ease 0.3s infinite alternate both running;
  }

  #op2 {
    grid-column: x1 / x3;
    grid-row: y5 / y7;
    width: 60px;
    height: 60px;
    background-color: var(--amarillo);
    animation: moverseOp2 1s ease 0.5s infinite alternate both running;
  }

  #op3{
    grid-column: x5 / x7;
    grid-row: y6 / y8;
    width: 50px;
    height: 50px;
    background-color: var(--verde);
    animation: moverseOp3 1s ease 0.6s infinite alternate both running;
  }

  #op4 {
    grid-column: x7 / x9;
    grid-row: y1 / y3;
    width: 60px;
    height: 60px;
    background-color: var(--azul);
    animation: moverseOp4 1s ease 0.8s infinite alternate both running;
  }
  
  #op0:hover,
  #op1:hover,
  #op2:hover,
  #op3:hover,
  #op4:hover {
    animation-play-state: paused;
  }

      
  @keyframes moverseOp0 {
    from { transform: scale(1.15);  }  /* Primer fotograma */
    to { transform: rotate(-10deg); }  /* Último fotograma */
  }

  @keyframes moverseOp1 {
    from { transform: scale(1.15); }  /* Primer fotograma */
    to { transform: rotate(8deg); }  /* Último fotograma */
  }

  @keyframes moverseOp2 {
    from { transform: scale(1.15); }  /* Primer fotograma */
    to { transform: rotate(-12deg); }  /* Último fotograma */
  }

  @keyframes moverseOp3 {
    from { transform: scale(1.15); }  /* Primer fotograma */
    to { transform: rotate(12deg); }  /* Último fotograma */
  }

  @keyframes moverseOp4 {
    from { transform: scale(1.15); }  /* Primer fotograma */
    to { transform: rotate(-15deg); }  /* Último fotograma */
  }

  @keyframes moverseOp5 {
    from { transform: scale(1.15); }  /* Primer fotograma */
    to { transform: rotate(20deg); }  /* Último fotograma */
  }


</style>