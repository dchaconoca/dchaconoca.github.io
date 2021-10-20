# Recetas de Cocina

<figure>
    <img class="img-art" src="../../../assets/img/proyectos/recetas2.png" alt="Vista de la aplicación de recetas de cocina">
    <figcaption class="titulo-img">Vista de la aplicación de recetas de cocina</figcaption>
</figure>

<div class="link-icon"> 
    <strong>Ver funcionamiento de la aplicación aquí:</strong>
    <a href="https://recetario-flask.herokuapp.com/" target="_blank" title="Ir a proyecto en funcionamiento">
        <img class="icono" src="../../../assets/img/proyectos/heroku-icon.png" alt="Icono Heroku">
    </a>
</div>

<div class="link-icon">
    <strong>Ver código aquí:</strong>
    <a href="https://github.com/dchaconoca/Recetario-en-Flask" target="_blank" title="Ir a proyecto en GitHub"><i class="fab fa-github-square"></i></a>
</div>

Cuando fui a abrir mi restaurant, como todo el mundo que comienza un negocio, me preguntaba cuánto cobrar. 

Por esa razón, me hice en esa época (2009) una pequeña aplicación en Access, donde administraba ingredientes, precios, descuentos, impuestos, ganancias, recetas... Y así calculaba costos y precios.

Ahora construyo de nuevo la aplicación como un ejercicio para practicar diversas tecnologías, en particular Python.

Esta aplicación permite la gestión de recetas de cocina y consta de 2 partes:

1. **Recetario**: Permite administrar las Recetas y los Ingredientes. También calcula de manera automática el precio de la receta en función de los ingredientes.
2. **Referenciales**: Permite administrar las Categorías de recetas y las Unidades de Medidas de los ingredientes.

## Tecnologías y modelos utilizados:

- *Flask (Python)*
- *PostgreSQL*
- *SQL*
- *SQLAlchemy*
- *Jinja / Bootstrap*
- *Modelo MVC* 

## Modelo Entidad-Relación de la aplicación:


<figure>
    <img class="img-art" src="../../../assets/img/proyectos/er-recetas.png" alt="Modelo Entidad-Relación de la aplicación">
    <figcaption class="titulo-img">Modelo Entidad-Relación de la aplicación</figcaption>
</figure>