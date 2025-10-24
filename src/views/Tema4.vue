<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Secciones y saltos
    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='Imagen decorativa')

    p.mb-0 Para controlar la estructura de documentos complejos, es esencial entender la diferencia entre páginas y secciones, además de cómo gestionarlas mediante saltos.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1. Concepto y tipos de saltos

    p.mb-4 Los saltos son elementos que interrumpen el flujo continuo del texto, permitiendo controlar cómo se organiza y presenta el contenido en el documento. Fundamentalmente hay tres categorías: 

    .tarjeta--BG01.p-4.px-md-5.mb-0
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Saltos de página
              p.mb-0(style="color:#000 !important") Fuerzan que el contenido siguiente comience en una nueva página, sin modificar las propiedades de formato. Son útiles para separar capítulos, iniciar secciones importantes en páginas nuevas o controlar la paginación antes de la impresión. A diferencia de insertar múltiples líneas vacías, los saltos de página mantienen la organización del documento independientemente de modificaciones posteriores al contenido.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema4/img-02.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Salto de columna
              p.mb-0(style="color:#000 !important") En un texto dispuesto en múltiples columnas, este salto fuerza al texto siguiente a comenzar en la parte superior de la siguiente columna.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img-03.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Saltos de sección
              p.mb-0(style="color:#000 !important") Dividen el documento en segmentos independientes que pueden tener configuraciones de formato diferentes. Cada sección puede definir sus propios márgenes, orientación de página, encabezados y pies de página, numeración y columnas, lo cual es esencial para esos tipos de documentos complejos que requieren diferentes configuraciones en distintas partes.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img-04.png', alt='Imagen decorativa')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2. Tipos de saltos de sección

    p.mb-5 Los procesadores de texto ofrecen varios tipos de saltos de sección según cómo debe continuar el contenido, encontrando: 

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial(data-aos="zoom-in")
          .row.mb-0(numero="1" titulo="Página siguiente")(data-aos="fade-left")
            .col-12
              p El salto de sección más común, finaliza la sección actual e inicia la siguiente en una nueva página. Utilizado cuando las diferentes secciones requieren configuraciones incompatibles en la misma página.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema4/img-05.png', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="Continuo")
            .col-12
              p Inicia una nueva sección en la misma página, sin forzar un cambio de página. Por ejemplo, permite cambiar el número de columnas en medio de una página, como en documentos con un título a ancho completo seguido de texto en dos columnas.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema4/img-06.png', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="Página par/impar")
            .col-12
              p Inicia la nueva sección en la siguiente página par o impar, respectivamente. Esta funcionalidad es fundamental en documentos impresos a doble cara donde ciertos elementos (como inicios de capítulos) deben aparecer siempre en páginas derechas (impares) o izquierdas (pares) (Martínez de Sousa, 2001).
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema4/img-07.png', alt='Imagen decorativa')
    
    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 Con el siguiente video, podrá poner en práctica los procesos de inserción de saltos de página en Microsoft Word: 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XiXZf0DQBvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3. Estructura del documento con secciones

    p.mb-5 La estructuración mediante secciones, permite crear documentos profesionales con requisitos de formato variables. Aplicaciones típicas incluyen elementos como: 

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Preliminares y cuerpo principal")
            .col-lg-12.order-lg-1.order-2
              p En documentos académicos o técnicos, las páginas preliminares (portada, resumen, tabla de contenido) frecuentemente utilizan numeración romana (i, ii, iii), mientras el cuerpo principal usa numeración arábiga (1, 2, 3). Esto requiere al menos dos secciones con esquemas de numeración independientes.
          .row(titulo="Orientación mixta")
            .col-lg-12.order-lg-1.order-2
              p Documentos que combinan páginas en orientación vertical (retrato) con páginas horizontales (paisaje) para acomodar tablas anchas o diagramas grandes, requieren secciones con diferentes configuraciones de página.
          .row(titulo="Encabezados variables")
            .col-lg-12.order-lg-1.order-2
              p Diferentes capítulos o secciones pueden requerir encabezados únicos que identifiquen su contenido específico. Las secciones permiten definir encabezados independientes con estilos específicos para cada segmento del documento.
          .row(titulo="Columnas")  
            .col-lg-12.order-lg-1.order-2
              p Documentos que alternan entre texto en una columna y texto en múltiples columnas (común en boletines, revistas o documentos técnicos), necesitan secciones para transiciones sin desplazar contenido a nuevas páginas innecesariamente.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img-08.png' alt="Imagen decorativa")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Caso de uso: estructura de una tesis o informe largo
    
    p.mb-4 Un informe de tesis podría estructurarse de la siguiente manera: 

    .tarjeta.tarjeta--gris.fondo.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="Sección 1")
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-09.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Sección 1. Portada
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Sin encabezado, ni pie de página.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Se inserta un Salto de Sección (Página Siguiente) al final.
        .row.justify-content-center(titulo="Sección 2")
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-10.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Sección 2. Resumen e índice
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Encabezado: "Informe Anual 2025".
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Pie de página con numeración en números romanos (i, ii, iii...).
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Se inserta un Salto de Sección (Página Siguiente) al final.
        .row.justify-content-center(titulo="Sección 3")
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-11.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Sección 3. Cuerpo del informe (Capítulos 1-5)
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Orientación de página: Vertical.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Encabezado diferente para páginas pares e impares.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Pie de página con numeración en números arábigos (1, 2, 3...), reiniciando en 1.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Se inserta un Salto de Sección (Página Siguiente) al final.
        .row.justify-content-center(titulo="Sección 4")
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-12.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Sección 4. Anexo con tablas grandes
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Orientación de página: horizontal, para que las tablas anchas quepan mejor.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Encabezado: "Anexos".
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | La numeración de página continúa desde la sección anterior.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Se inserta un Salto de Sección (Página Siguiente) al final.
        .row.justify-content-center(titulo="Sección 5")
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-13.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Sección 5. Bibliografía
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Orientación de página: Vertical.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Encabezado: "Referencias".
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | La numeración de página continúa.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema4/img-14.svg', alt='').m-auto
          .col-xl
            p.mb-0 Esta estructura sería imposible de lograr sin el uso de saltos de sección.

</template>

<script>
export default {
  name: 'Tema4',
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
