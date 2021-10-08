<template>
  <div class="chez-diana">
    <h1>Chez Diana</h1>
    <blockquote class="nota">
      <em>"Todo viene de los recuerdos de la infancia y de los domingos familiares en que nos metíamos en la cocina a inventar algo diferente. De esos momentos nos nació el gusto por los inventos culinarios. Eso, unido a la satisfacción de tener gente en la casa y compartir con ellos una buena comida como en familia, nos llevó a tomar la decisión de crear un lugar para sentirse “como en casa”. Y así nació Chez Diana".</em>
    </blockquote>
    <div v-html="contenido"/>   
      <p>
        Puedes saber más sobre <strong>Chez Diana</strong> siguiendo sus redes:
      </p>
      <div class="redes">
        <div id="FB">
          <a href="https://www.facebook.com/ChezDianaLG" target="_blank" title="Ir a página de Facebook Chez Diana">
          <i class="fab fa-facebook-square"></i></a>
        </div>
        <div id="IG">
          <a href="http://instagram.com/chezdianalg" target="_blank" title="Ir a perfil Instagram Chez Diana">
          <i class="fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
    <CarruselInfinito class="carrusel" 
        :imagenes="imagenes" />
  
</template>

<script>
import chezDiana from "@/assets/language/ES/ES-chez-diana.md";
import CarruselInfinito from '@/components/CarruselInfinito.vue';
import imagenes from "@/assets/config/ES/ES-imgCD.json";

export default {
  name: 'ChezDiana',
  components: {
      CarruselInfinito,
    },
  data() {
    return {
      contenido: chezDiana,
      imagenes: imagenes,
    }
  }
}
</script>

<style scoped>

  @import '../assets/css/responsive.css';

  .carrousel {
    display: flex;
    justify-content: center;
  }

  .nota {
    background-color: var(--gris-claro);
    padding: 1.5%;
    text-align: justify;
  }

  .redes {
    display: flex;
    letter-spacing: 3ch;
  }

  .fab, .fas, .a {
    font-size: 2rem;
    color: var(--gris);
  }

</style>