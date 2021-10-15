<template>
  <div class="chez-diana">
    <h1>Chez Diana</h1>
    <blockquote class="nota">
      <em>"Todo viene de los recuerdos de la infancia y de los domingos familiares en que nos metíamos en la cocina a inventar algo diferente. De esos momentos nos nació el gusto por los inventos culinarios. Eso, unido a la satisfacción de tener gente en la casa y compartir con ellos una buena comida como en familia, nos llevó a tomar la decisión de crear un lugar para sentirse “como en casa”. Y así nació Chez Diana".</em>
    </blockquote>
    <!-- <div v-html="contenido"/>    -->
    <p>
      Es el modificado. 
      El <strong>Chez Diana</strong> o La Casa de Diana, es un proyecto que vio la luz en el 2009.
    </p>
    <p>
      Se trata de un emprendimiento que busca crear una experiencia en el cliente a través de la organización de eventos personalizados y cuyo centro es la gastronomía. 
    </p>
    <p>
      Buscamos comprender las necesidades del cliente y, a partir de ellas, diseñar tanto el menú como el ambiente necesarios para satisfacerlas, con el fin de lograr que los invitados puedan disfrutar y sentirse "como en casa" durante la fiesta (cumpleaños, bautizos, matrimonios...) o la reunión (de trabajo, entre amigos).
    </p>
    <p>
      Durante 9 años pude dedicarme a una de mis pasiones: Cocinar y hacer feliz a mis clientes a través de la comida y el buen servicio.
    </p>
    <p>
      Por otro lado, me permitió conocer los desafíos a los que debe enfrentarse cualquier emprendedor y desarrollar mis habilidades en organización y gerencia. Fue una gran experiencia de aprendizaje en diversos ámbitos.
    </p>
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
    <CarruselInfinito class="carrusel" 
    :imagenes="imagenes" />
  </div>
</template>

<script>
// import chezDiana from "@/assets/language/ES/ES-chez-diana.md";
import CarruselInfinito from '@/components/CarruselInfinito.vue';
import imagenes from "@/assets/config/ES/ES-imgCD.json";

export default {
  name: 'ChezDiana',
  components: {
      CarruselInfinito,
    },
  data() {
    return {
      // contenido: chezDiana,
      imagenes: imagenes,
    }
  },
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