<template>
  <div class="menu-cuadros">
    <div v-for="opcion in opciones" :key="opcion.id" :id="opcion.cuadro" >
      <router-link :to="opcion.enlace.link">
        <div :class="opcion.cuadro" class="cuadro">
          <p class="texto-claro">{{ opcion.enlace.texto }}</p>
        </div>
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
    },
    events: {
      eventoAnimacion() {
        const cuadroAnimado = document.querySelector('.cuadro');

        cuadroAnimado.onanimationend = () => {
          console.log('Animation ended');
        };
      }
    }
  }
</script>

<style scoped>

  .menu-cuadros {
    display: grid;
    grid-template-columns: [x0] 1fr [x1] 1fr [x2] 1fr [x3] 1fr [x4] 1fr [x5] 1fr [x6] 1fr [x7] 1fr [x8] 1fr [x9] 1fr [x10];
    grid-template-rows:  [y0] 1fr [y1] 1fr [y2] 1fr [y3] 1fr [y4] 1fr [y5] 1fr [y6] 1fr [y7] 1fr [y8];
  }

  .cuadro {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    text-align: center;
    border-radius: 5%;
  }

  .cuadro:hover {
    cursor: pointer;
    animation-play-state: paused;
  }

  .texto-claro {
    color: white;
    font-size: 0.75rem;
    animation: mostrarTexto 5s ease 3s infinite alternate running backwards;
  } 

  #op0 {
    grid-column: x4 / x6;
    grid-row: y3 / y5;
  }

  .op0 {
    width: 45px;
    height: 45px;
    background-color: white;
    transform: rotate(-10deg); 
    animation: moverseOp0 2s ease 4s infinite alternate running backwards;
  }

  #op1 {
    grid-column: x2 / x4;
    grid-row: y0 / y2;
  }

  .op1 {
    width: 50px;
    height: 50px;
    background-color: var(--rojo);
    transform: rotate(8deg); 
    animation: moverseOp1 2s ease infinite alternate running backwards;
  }

  #op2 {
    grid-column: x1 / x3;
    grid-row: y5 / y7;
  }

  .op2 {
    width: 60px;
    height: 60px;
    background-color: var(--amarillo);
    transform: rotate(-12deg); 
    animation: moverseOp2 2s ease 1s infinite alternate running backwards;
  }

  #op3 {
    grid-column: x5 / x7;
    grid-row: y6 / y8;
  }

  .op3 {
    width: 50px;
    height: 50px;
    background-color: var(--verde);
    transform: rotate(12deg); 
    animation: moverseOp3 2s ease 3s infinite alternate running backwards;
  }

  #op4 {
    grid-column: x7 / x9;
    grid-row: y1 / y3;
  }

  .op4 {
    width: 60px;
    height: 60px;
    background-color: var(--azul);
    transform: rotate(-15deg); 
    animation: moverseOp4 2s ease 2s infinite alternate running backwards;
  }


  @keyframes mostrarTexto {
    0% { opacity: 0.1;  }  
    25% { color: black;  } 
    50% { opacity: 1; color: white; }  
    75% { color: black;  } 
    100% { opacity: 0.1;  }
  }
      
  @keyframes moverseOp0 {
    from { transform: scale(0.5);  }  /* Primer fotograma */
    to { transform: rotate(-10deg); }  /* Último fotograma */
  }

  @keyframes moverseOp1 {
    from { transform: scale(0.5); }  /* Primer fotograma */
    to { transform: rotate(8deg);  }  /* Último fotograma */
  }

  @keyframes moverseOp2 {
    from { transform: scale(0.5); }  /* Primer fotograma */
    to { transform: rotate(-12deg); }  /* Último fotograma */
  }

  @keyframes moverseOp3 {
    from { transform: scale(0.5); }  /* Primer fotograma */
    to { transform: rotate(12deg); }  /* Último fotograma */
  }

  @keyframes moverseOp4 {
    from { transform: scale(0.5); }  /* Primer fotograma */
    to { transform: rotate(-15deg); }  /* Último fotograma */
  }

</style>