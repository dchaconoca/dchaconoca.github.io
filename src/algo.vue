<template>
  <div id="app">
    <Menu /> 
    <section id="inicio">
      <img id="img-diana" src="@/assets/img/Diana.jpeg" alt="Diana Chacón Ocariz - Desarrollo Software">
      <div id="txt-inicio">
        <h1>¡Hola! Soy Diana</h1>
        <h2>Analista y desarrolladora de software</h2>
        <h4>Retomando la informática luego de un break de unos años dedicados a la gastronomía</h4>
        <h3>Python: Django, Flask - SQL - Javascript - HTML/CSS</h3>
      </div>
    </section>    
    <section id="acerca" class="seccion">
      <PanelInfo :titulo="textos[0].titulo" class="acerca" />   
      <div class="panel-content">
        <div v-html="textos[0].contenido"/>
      </div>
    </section>
    <section id="proyectos" class="seccion">
      <PanelInfo :titulo="textos[1].titulo" class="proyectos" />   
      <div class="panel-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
      </div>
    </section>
    <section id="chez-diana" class="seccion">
      <PanelInfo :titulo="textos[2].titulo" class="chez-diana" />   
      <div class="panel-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
      </div>
    </section>
    <section id="cv" class="seccion">
      <PanelInfo :titulo="textos[3].titulo" class="cv" />   
      <div class="panel-content">
        <CategoriasCV :categorias="categorias" />   
      </div>
    </section>
    <section id="blog" class="seccion">
      <PanelInfo :titulo="textos[4].titulo" class="blog" />   
      <div class="panel-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis similique incidunt soluta non est, eum animi obcaecati accusantium a vero. Tempore enim molestias recusandae fugiat deleniti explicabo dolore consequuntur.
        </p> 
      </div>
    </section>
    <footer id="footer">
      <p>Diana Chacón Ocariz - 2021</p>
    </footer>
  </div>
</template>

<script>
import PanelInfo from '@/components/PanelInfo.vue';
import CategoriasCV from '@/components/CategoriasCV.vue';
import Menu from '@/components/Menu.vue';
import categoriasES from "@/assets/language/ES/ES-cv.json";
// import categoriasFR from "@/assets/language/FR/FR-cv.json";
import acercaES from "@/assets/language/ES/ES-acerca.md";
export default {
  name: 'app',
  components: {
    Menu,
    PanelInfo,
    CategoriasCV,
  },
  data() {
    return {
      categorias: categoriasES,
      textos: [
        {
          titulo: "Sobre mí",
          contenido: acercaES
        },
        {
          titulo: "Proyectos",
          contenido: "Blog" 
        },
        {
          titulo:"Chez Diana", 
          contenido: "Blog" 
        },
        {
          titulo: "Curriculum", 
          contenido: "Blog" 
        },
        {
          titulo: "Blog",
          contenido: "Blog" 
        }
      ],
    }
  }
  // methods: {
  //   cambiarIdioma(idioma="ES") {
  //     if (idioma==="ES") {
  //       return this.categorias=categoriasES;
  //     }
  //     if (idioma==="FR") {
  //       return this.categorias=categoriasFR;
  //     }
  //   }
  // }
}
</script>

<style>
  :root {
    --azul: #363488;
    --rojo: #d61011;
    --amarillo: #e2c200;
    --verde: #73b829;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin: -0.5%; 
    padding: 0; 
    border: 0;
  }
  Menu {
    position: relative;
    left: 10%;
  }
  #navbar1 {
    background-color: var(--rojo);
    position: absolute;
    left: 65%;
    top: 20%;
    transform: rotate(7deg);
    animation: wobble-hor-bottom 1.5s 2s both;
  }
  #navbar2 {
    background-color: var(--amarillo);
    position: absolute;
    left: 73%;
    top: 8%;
    transform: rotate(-10deg);
    animation: wobble-hor-bottom 1.5s 5s both;
  }
  #navbar3 {
    background-color: black;
    position: absolute;
    left: 74%;
    top: 32%;
    transform: rotate(12deg);
    animation: wobble-hor-bottom 1.5s 7s both;
  }
  #navbar4 {
    background-color: var(--verde);
    position: absolute;
    left: 84%;
    top: 26%;
    transform: rotate(-15deg);
    animation: wobble-hor-bottom 1.5s 10s both;
  }
  #navbar5 {
    background-color: var(--azul);
    position: absolute;
    left: 87%;
    top: 8%;
    transform: rotate(20deg);
    animation: wobble-hor-bottom 1.5s 12s both;
  }
  #navbar1:hover,
  #navbar2:hover,
  #navbar3:hover,
  #navbar4:hover,
  #navbar5:hover {
    transform: rotate(0);
    transition: all 0.4s linear;
    animation-play-state: paused;
  }
  #inicio {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 98vw;
    height: 100vh;
    z-index: -1;
  }
  #img-diana {
    height: auto;
    width: 40%;
    margin-top: 5%;
    opacity: 0.6;
    z-index: -1;
  }
  #txt-inicio {
    align-self: flex-end;
    margin-bottom: 3%;
    margin-right: 2%;
  }
  h1 {
    font-size: 3.5rem;
    margin-bottom: 5%;
    color: black;
    animation: tracking-in-expand-fwd 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }
  .seccion {
    margin: 0;
    width: 98vw;
  }
  .panel-info, .panel-info.a {
    position: sticky;
    top: 0;
    padding: 1%;
    color: white;
    z-index: 50;
  }
  .panel-content {
    width: 95vw;
    margin: 1%;
  }
 
  .acerca, .acerca.a {
    background-color: var(--rojo);
  }
  .proyectos {
    background-color: var(--amarillo);
  }
  .chez-diana {
    background-color: black;
  }
  .cv  {
    background-color: var(--verde);
  }
  .blog  {
    background-color: var(--azul);
  }
  #footer {
    background-color: black;
    color: white;
    height: 20px;
    text-align: center;
  }

</style>