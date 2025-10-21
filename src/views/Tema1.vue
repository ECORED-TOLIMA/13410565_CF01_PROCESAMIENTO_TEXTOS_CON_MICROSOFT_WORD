<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Procesadores de texto

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')
    
    p.mb-0 Los procesadores de texto se han convertido en esa herramienta fundamental para la creación, edición y formato de documentos en entornos académicos, profesionales y personales. Estos programas ofimáticos han revolucionado la forma en que se produce contenido escrito, al permitir una mayor flexibilidad, eficiencia y presentación profesional de los documentos (Barrera Rea & Guapi Mullo, 2018). El dominio de estas herramientas y sus funcionalidades avanzadas es esencial para cualquier profesional en la era digital, facilitando la creación de documentos estructurados, consistentes y de alta calidad que cumplan con estándares académicos y corporativos.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1. Definición 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-02.svg', alt='Imagen decorativa')
      .col-lg-8.mb-lg-0.mb-4(data-aos="fade-left")
        p Un procesador de texto es una aplicación de #[em software] que ha sido diseñada específicamente para la creación, edición, formato y gestión de documentos de texto. Esta herramienta permite a los usuarios manipular texto de manera digital, ofreciendo funcionalidades que van más allá de la simple escritura, incluyendo:
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Formato avanzado.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Corrección ortográfica.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Inserción de elementos multimedia.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Gestión de diseño de página.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#B0C2E5")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-03.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 A diferencia de un editor de texto simple (como el Bloc de Notas de Windows), que solo maneja archivos en formato de texto plano, un procesador de texto ofrece diferentes funcionalidades para la manipulación de la apariencia del documento, incluyendo el formato de los caracteres, párrafos y el diseño de la página, la inserción de elementos gráficos como imágenes, tablas o enlaces a sitios web. Estas herramientas han sustituido a las máquinas de escribir tradicionales, ofreciendo ventajas significativas en términos de flexibilidad, capacidad de edición y presentación.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Un procesador de texto debe facilitar la producción de documentos legibles, organizados y visualmente atractivos. Su objetivo es automatizar y simplificar las tareas de escritura y edición, permitiendo al usuario concentrarse en el contenido, mientras la herramienta se encarga de la presentación. Sus funciones están orientadas a:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-04.png', alt='Imagen decorativa')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Creación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Crear y editar texto de manera eficiente.
          .row(numero="2" titulo="Legibilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Mejorar la legibilidad y la estética del documento, a través de opciones de formato.
          .row(numero="3" titulo="Organización")
            .col-12.mb-4.mb-md-0
              p.mb-0 Organizar la información de forma lógica y estructurada.
          .row(numero="4" titulo="Consistencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Asegurar la consistencia en documentos largos o en series de documentos.
          .row(numero="5" titulo="Integración")
            .col-12.mb-4.mb-md-0
              p.mb-0 Integrar diferentes tipos de contenido, como imágenes, gráficos, tablas y enlaces.
          .row(numero="6" titulo="Automatización")
            .col-12.mb-4.mb-md-0
              p.mb-0 Automatizar tareas repetitivas, como la creación de índices o la numeración de páginas.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 En un entorno institucional, los procesadores de texto soportan la estandarización de documentos (circulares, informes, actas, instructivos), facilitan el cumplimiento de lineamientos de marca y accesibilidad y habilitan ciclos de revisión y trabajo colaborativo. 

    p.mb-0 En resumen, se podría afirmar que, la tarea principal de los procesadores de texto es facilitar la elaboración de documentos escritos de manera eficiente y profesional. Sus objetivos fundamentales incluyen el incremento de la productividad, mediante la automatización de tareas repetitivas, la garantía de coherencia visual y estructural del documento, la habilitación de la colaboración entre múltiples usuarios y la simplificación de la revisión y corrección del contenido. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Tipos de procesadores de texto

    p.mb-4 Aunque Microsoft Word es el procesador de texto más conocido, existen diversos tipos de procesadores de texto, cada uno con sus propias particularidades. Se pueden clasificar en diversas categorías, por ejemplo, según sus características, funcionalidades y modelos de distribución. A continuación, se presentan algunos de ellos:

    .tarjeta.BGIMG01(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              h4 <em>Software</em> de escritorio
              p Son aplicaciones que se instalan localmente y se ejecutan directamente en el sistema operativo del computador. Ofrecen el conjunto más completo de funcionalidades y el mayor rendimiento. En este contexto, Microsoft Word es el estándar predominante en entornos corporativos y académicos.
              p Adicionalmente, existen algunas alternativas de código abierto como puede ser LibreOffice Writer que ofrece capacidades similares.
            .col-lg-7.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-05.png' ,alt='').m-auto
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              h4 Procesadores en línea
              p Google Docs ha popularizado este modelo, permitiendo la creación y edición de documentos directamente desde el navegador #[em web], con énfasis en la colaboración en tiempo real y el almacenamiento en la nube (Álvarez & Gisbert, 2015). Microsoft Office Online ofrece versiones #[em web] de sus aplicaciones de escritorio, permitiendo acceso multiplataforma.
            .col-lg-7.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-06.png' ,alt='').m-auto
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              h4 Pages de Apple
              p El procesador de texto nativo para dispositivos macOS e iOS, conocido por su interfaz intuitiva y sus plantillas de diseño.
            .col-lg-7.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-07.png' ,alt='').m-auto
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              h4 Procesadores especializados
              p Existen herramientas diseñadas para necesidades específicas, como LaTeX para documentos científicos y técnicos con alta complejidad matemática o Markdown para escritura simplificada con énfasis en la portabilidad del contenido y muy utilizado en equipos de desarrollo de #[em software].
            .col-lg-7.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-08.png' ,alt='').m-auto
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              h4 Scrivener
              p Popular entre escritores y novelistas por sus herramientas para organizar ideas, notas y estructuras narrativas complejas.
            .col-lg-7.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-09.png' ,alt='').m-auto

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3. Licenciamiento

    p.mb-5 El modelo de licenciamiento determina la forma de cómo los usuarios pueden acceder, utilizar y distribuir el #[em software] en este caso, los procesadores de texto. Comprender estos modelos es fundamental para tomar decisiones informadas en contextos educativos y organizacionales y determinar cuál es el más acorde. Normalmente, se suelen clasificar en tres grandes categorías:

    .tarjeta--BG01.p-4.px-md-5.mb-5
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") <em>Software</em> propietario
              p.mb-0(style="color:#000 !important") Microsoft Office opera bajo licencias comerciales que requieren el pago de una suscripción (Microsoft 365) o una compra única. La forma en que se licencia el #[em software] establece el uso y las diferentes restricciones que se puedan presentar, asimismo, si permite la copia y modificación del #[em software], pero generalmente incluyen soporte técnico, actualizaciones regulares y compatibilidad garantizada.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema1/img-10.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") <em>Software</em> libre y de código abierto
              p.mb-0(style="color:#000 !important") LibreOffice se distribuye bajo la Licencia Pública General de GNU (GPL), permitiendo su uso gratuito, modificación y redistribución (García Peñalvo, 2017). Este modelo fomenta la transparencia, la personalización y la independencia de proveedores específicos, siendo especialmente valorado en instituciones educativas y gubernamentales.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-11.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Modelo <em>freemium</em>
              p.mb-0(style="color:#000 !important") Google Docs opera bajo un modelo gratuito para usuarios individuales con funcionalidades básicas, mientras que las organizaciones pueden acceder a características avanzadas, mediante suscripciones de pago (Workspace). Este modelo híbrido ha democratizado el acceso a herramientas de procesamiento de texto de calidad.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-12.png', alt='Imagen decorativa')

    p.text-center.mb-5 A continuación, se presenta una tabla comparativa de tres de los procesadores de texto más usados actualmente:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      span  #[i Procesadores de texto más usados]
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr(data-aos="fade-right")
            th(style="width: 25%; background-color: #6EC7E3;") Criterio
            th(style="width: 25%; background-color: #6EC7E3;") Word (Microsoft 365)
            th(style="width: 25%; background-color: #6EC7E3;") LibreOffice Writer
            th(style="width: 25%; background-color: #6EC7E3;") Google Docs
        tbody
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") Tipo
            td(style="background-color: #F6F6F6;") Propietario (suscripción o volumen).
            td(style="background-color: #F6F6F6;") Libre (licencia abierta).
            td(style="background-color: #F6F6F6;") Servicio en la nube.
          tr(data-aos="fade-right")
            td.text-center Estilos
            td Completo, integrado a navegación, plantillas.
            td Completo, estilos de página/tabla/lista.
            td Estilos de párrafo y títulos.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") Secciones
            td(style="background-color: #F6F6F6;") Por saltos de sección (márgenes/ orientación /columnas).
            td(style="background-color: #F6F6F6;") Estilos de página
            td(style="background-color: #F6F6F6;") Secciones por saltos, controles más limitados.
          tr(data-aos="fade-right")
            td.text-center Colaboración
            td Comentarios, control de cambios, coautoría.
            td Comentarios, control de cambios.
            td Coautoría en tiempo real.










</template>

<script>
export default {
  name: 'Tema1',
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
