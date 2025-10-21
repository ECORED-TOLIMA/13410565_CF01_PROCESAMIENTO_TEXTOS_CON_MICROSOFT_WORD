<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='Imagen decorativa')
      .col-lg-8.mb-lg-0.mb-4(data-aos="fade-left")
        p Actualmente, en el entorno profesional y académico la creación de documentos va más allá de la simple escritura. La forma en que la información se presenta, se estructurada y se formatea, es un reflejo directo de la profesionalidad, el orden y la claridad del mensaje que se desea transmitir. Un documento bien organizado no solo es más fácil de leer y comprender, sino que también fortalece la imagen institucional y asegura la coherencia en todas las comunicaciones.
        p Microsoft Word es la herramienta de procesamiento de texto líder en el mercado, pero su verdadero poder no reside en sus funciones básicas, sino en su capacidad para gestionar documentos complejos de manera eficiente y estandarizada. El dominio de las diferentes funcionalidades de la herramienta como los estilos, las secciones y los formatos de párrafo, es lo que distingue a un usuario básico de un profesional capaz de producir documentos de alta calidad con consistencia y rapidez.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Este componente formativo está diseñado para guiarlo en el desarrollo de las competencias necesarias para aplicar formatos y estilos de manera profesional. A través de los siguientes temas, aprenderá los fundamentos teóricos y los procedimientos prácticos para controlar cada aspecto visual de los documentos, garantizando así que cumplan con cualquier requerimiento institucional o académico y comunicando sus ideas con el máximo impacto y claridad.
    
    p.text-center.mb-5(data-aos="fade-left") Partiendo de lo anterior, se invita a que acceda al siguiente video introductorio de este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VrWggjss2AM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
