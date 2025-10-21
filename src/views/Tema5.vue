<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Encabezados y pies de página
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='Imagen decorativa')

    p.mb-0 Los encabezados y pies de página son áreas reservadas en los márgenes superior e inferior de cada página, respectivamente, contienen información repetitiva o contextual del documento (American Psychological Association, 2020). Estos elementos no forman parte del cuerpo principal del texto y aparecen consistentemente a lo largo del documento o sección.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1. Concepto e inserción

    p.mb-5 El encabezado es el área en el margen superior de la página y el pie de página es el área en el margen inferior. El contenido insertado en estas áreas (texto, imágenes, números de página) se repite en cada página de una sección, proporcionando información contextual importante.
    
    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-10.col-12
          p Son elementos clave para la navegación y la identificación de documentos institucionales. Suelen contener:

      .row.justify-content-center
        .col-lg-5.col-sm-7.col-10.mb-4(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema5/img-08.svg', alt='Imagen decorativa')

        .col-lg-5(data-aos="fade-left")
          .cajon.cajon.C01.p-4.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Numeración de página.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Título del documento o del capítulo.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Nombre del autor o de la institución.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Fecha o versión del documento.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                | Logotipo de la empresa.

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.col-12
          .cajon.cajon.color-secundario.p-4
            p.mb-0 Los procesadores de texto modernos ofrecen comandos específicos para insertar y editar estos elementos (encabezados y pie de páginas). Una vez activado el área de encabezado o pie de página, el usuario puede insertar texto, números de página, fecha/hora, campos automáticos e imágenes. Los cambios realizados se aplican automáticamente a todas las páginas de la sección, aunque pueden configurarse encabezados/pies diferentes para la primera página o para páginas pares e impares.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 Para poner en práctica lo anterior, con el siguiente video, conocerá los procesos que se llevan a cabo para insertar encabezados y pies de página en Microsoft Word: 
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2. Numeración de página

    p La numeración de página es un elemento fundamental de los pies de página (ocasionalmente de encabezados) que facilita la navegación, referenciación y organización del documento (Cassany, 2019).
    p.mb-4 Con respecto a los formatos de numeración, los procesadores de texto ofrecen múltiples formatos:   
    
    .row.justify-content-center
      .col-12.mb-4.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img-03-v02.svg', alt='Imagen decorativa')
      .col-lg-12.col-12.desktop(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema5/img-03-v01.svg', alt="Imagen decorativa")
          .tarjeta.color-secundario.p-3(x="19.5%" y="58%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") El formato más común para el cuerpo principal de documentos.
          .tarjeta.color-acento-botones.p-3(x="40%" y="63.5%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Utilizados en documentos formales para secciones principales.
          .tarjeta.color-acento-botones.p-3(x="60.5%" y="58%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Menos comunes, utilizadas en apéndices o anexos (American Psychological Association, 2020).
          .tarjeta.color-acento-botones.p-3(x="81%" y="63.5%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Menos comunes, utilizadas en apéndices o anexos (American Psychological Association, 2020).
    
    p.text-center.mb-4 De igual manera, se encuentran las siguientes opciones:

    .tarjeta--BG01.p-4.px-md-5.mb-5
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-4.order-2.order-lg-1
              h4(style="color:#000 !important") Posicionamiento y formato
              p.mb-0(style="color:#000 !important") Los números de página pueden posicionarse en diferentes ubicaciones (centro, izquierda, derecha) y combinarse con texto adicional. El formato común "Página X de Y" proporciona contexto sobre la extensión total del documento.
            .col-lg-8.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema5/img-04.png', alt='Imagen decorativa')
          .row
            .col-lg-4.order-2.order-lg-1
              h4(style="color:#000 !important") Numeración por secciones
              p.mb-0(style="color:#000 !important") Las secciones permiten reiniciar la numeración o utilizar formatos diferentes en distintas partes del documento. Por ejemplo, un documento académico puede usar numeración romana (i, ii, iii) en las páginas preliminares y reiniciar con numeración arábiga (1, 2, 3) al iniciar la introducción.
            .col-lg-8.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-05.png', alt='Imagen decorativa')
          .row
            .col-lg-4.order-2.order-lg-1
              h4(style="color:#000 !important") Primera página diferente
              p.mb-0(style="color:#000 !important") Muchos documentos profesionales y académicos omiten el número de página en la portada o primera página, aunque esta se cuenta para la numeración. Los procesadores de texto permiten configurar esta opción mediante la función "Primera página diferente" en las opciones de encabezado/pie de página.
            .col-lg-8.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-06.png', alt='Imagen decorativa')
          .row
            .col-lg-4.order-2.order-lg-1
              h4(style="color:#000 !important") Páginas pares e impares
              p.mb-0(style="color:#000 !important") En documentos diseñados para impresión a doble cara, es común posicionar los números de página en el margen exterior (izquierda en páginas pares, derecha en impares), para facilitar su visualización cuando el documento está encuadernado (Martínez de Sousa, 2001).
            .col-lg-8.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-07.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 Para poner en práctica lo relacionado con los pies de página en Microsoft Word, acceda al siguiente video:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Consejo profesional: desvincular encabezados entre secciones
    
    p.mb-4 Por defecto, los encabezados y pies de página de una nueva sección están "vinculados" a los de la sección anterior. Para crear un encabezado diferente en una nueva sección (como en el caso de la tesis), debe romper este vínculo como lo explica este video final:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
