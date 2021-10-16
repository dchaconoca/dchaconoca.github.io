<template>
  <div class="acerca">
    <img src="../assets/img/Diana.jpg" alt="Diana Chacón Ocariz" id="img-diana"> 
    <h1>Mi pequeña historia</h1>
    <p>
      Me llamo <strong>Diana Chacón Ocariz</strong>.
    </p>
    <p>
      Siempre me ha gustado lo que se siente cuando logras que una computadora haga lo que quieres que haga. Por eso decidí estudiar Informática. Pero también vengo de una familia que le gusta cocinar y cuya vida, más allá de profesiones y quehaceres, gira al rededor de la cocina.
    </p>
    <p>
      Durante 10 años ejercí mi carrera, una parte en Caracas (Venezuela) y otra en París (Francia).  Pero siempre decía que quería montar mi propio restaurant.
    </p>
    <p>
    Y entre la rutina, los largos trayectos a la oficina y quizás también la crisis de los 30, me llevaron a hacer un gran cambio en mi vida: Renuncié a mi trabajo y regresé a mi pueblo en Los Andes venezolanos a… ¡Montar mi propio restaurant!
    </p>
    <p>
      El <a href="/chez-diana">Chez Diana</a> (En la casa de Diana) nació en el 2009, y durante 9 años fue para mí una gran escuela de <strong>emprendimiento</strong>, <strong>organización</strong>, <strong>gerencia</strong>, <strong>atención al público</strong> y por supuesto de cocina. Además de haber sido una fuente inagotable de satisfacción: Nada como hacer a la gente feliz con lo que haces…
    </p>
    <p>
      Pero <strong>me gusta cambiar</strong> y pienso que en la vida, es posible hacer muchas cosas. En el 2017 comencé a interesarme por las redes sociales y el <strong>Marketing Digital</strong>. A partir del 2018, he estado dedicada a ese mundo. Me gusta analizar negocios, pensar en estrategias, analizar resultados. También fue una manera de acercarme poco a poco de nuevo a la informática. 
    </p>
    <p>
      Por eso, en el 2020 decidí <strong>aprender</strong> <strong>Python</strong>. Luego se hicieron necesario el <strong>HTML</strong> y el <strong>CSS</strong>. Y el inconturnable <strong>Javascript</strong>. Y repasar <strong>SQL</strong>, aprender nuevos conceptos y frameworks...  Luego de más de 10 años “desconectada” del mundo dev, las cosas han cambiado tanto, que no solo ha sido redescubrir la informática, sino aprender un montón de cosas nuevas y… Sí, hoy es aún más fascinante.
    </p>
    <p>
      Hoy tengo claro que quiero dedicarme de nuevo al desarrollo de software, y en un futuro no muy lejano, me gustaría orientarme hacia la Ciencia de Datos (estudio para eso jejeje). 
    </p>
    <p>
      Mientras tanto, sigo aquí, en medio de mis montañas, con mis gatos y mis matas, tratando siempre de que las computadoras hagan, lo que quiero que hagan.
    </p>
    <p>
      Puedes seguirme en mis <strong>Redes Sociales</strong>, descargar mi <strong>CV</strong> o contactarme por <strong>email</strong>:
    </p>
    <!-- <div v-html="contenido"/> -->
    <div class="contactos">
        <ContactosRRSS v-bind:esClaro="false" /> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import acercaES from "@/assets/language/ES/ES-acerca.md";
import ContactosRRSS from '@/components/ContactosRRSS.vue';

export default {
  name: 'Inicio',
  components: {
      ContactosRRSS,
    },
  // data() {
  //   return {
  //     contenido: acercaES
  //   }
  // }
}
</script>

<style scoped>

  @import '../assets/css/responsive.css';

  #img-diana {
    width: 100px;
    border-radius: 5%;
    float: right;
    margin: 2%;
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) { 

    #img-diana {
      width: 150px;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 

    #img-diana {
      width: 200px;
    }

  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 

    #img-diana {
      width: 250px;
    }

  }
 
</style>