<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Estilos
    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='Imagen decorativa')

    p.mb-0 Son conjuntos predefinidos de características de formato que pueden aplicarse de manera consistente a diferentes elementos del documento y que suelen estar agrupados, de acuerdo a su funcionalidad. Un estilo agrupa atributos como fuente, tamaño, color, alineación, espaciado e interlineado en una sola definición reutilizable.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. Concepto e importancia

    p Si se piensa en un estilo como una "etiqueta de formato", en lugar de aplicar manualmente varios atributos diferentes a cada título, simplemente se aplica el estilo "Título 1".
    p.mb-5 La importancia de usar estilos se suele utilizar especialmente en documentos institucionales, por las siguientes razones: 

    .row.justify-content-center.ali.mb-0(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#B0C2E5")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Consistencia
            p.mb-0 Se garantiza que todos los elementos similares (ej. todos los títulos principales), tengan exactamente el mismo formato en todo el documento. Esto es crucial para la imagen de marca y la profesionalidad.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#D5C6EA")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-03.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Eficiencia
            p.mb-0 Cambiar el formato de todos los subtítulos (ej. cambiar el color de azul a negro), es una tarea más fácil con los estilos, al no tener que cambiar uno por uno. Simplemente se modifica el estilo "Título 2" y todos los textos con ese estilo se actualizarán automáticamente. Esto puede ahorrar horas de trabajo en documentos largos.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#6EC7E3")  
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-04.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Estructura y automatización
            p.mb-0 Aplicar estilos de título (Título 1, Título 2, etc.) no solo formatea el texto, sino que también crea una estructura jerárquica en el documento. Word utiliza esta estructura para generar automáticamente una tabla de contenido, navegar por el documento usando el panel de navegación y mejorar la accesibilidad para lectores de pantalla.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. Tipos de estilos

    p.mb-4 Los procesadores de texto modernos, organizan los estilos en categorías funcionales, encontrando: 

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Estilos de párrafo
              p Afectan todo el contenido del párrafo, incluyendo fuente, alineación, sangría, espaciado e interlineado. Son utilizados para estructurar documentos.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema3/img-05.png', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema3/img-06.png', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Estilos de carácter
              p Se aplican a segmentos específicos de texto dentro de un párrafo, sin afectar sus propiedades estructurales. Muy útiles para énfasis, terminología técnica o formatos especiales como hipervínculos a sitios #[em web.]
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Estilos de tabla
              p Definen el formato visual de tablas, incluyendo bordes, sombreado, fuentes y alineación de celdas, permitiendo consistencia en la presentación de datos tabulares (Martínez de Sousa, 2001).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema3/img-07.png', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema3/img-08.png', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Estilos de lista
              p Controlan el formato de listas numeradas y con viñetas, incluyendo el tipo de numeración, sangría y espaciado entre elementos.
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3. Estilos para títulos, párrafos y caracteres

    p.mb-4 Para los estilos de títulos, los procesadores de texto típicamente ofrecen una jerarquía de estilos de título (Título 1, Título 2, Título 3, etc.), que establecen una estructura multinivel en el documento. En un documento institucional, la estructura se define con una jerarquía de estilos así: 

    .row.justify-content-center
      .col-12.mb-4.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img-09-v02.svg', alt='Imagen decorativa')
      .col-lg-12.col-12.desktop(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema3/img-09-v01.svg', alt="Imagen decorativa")
          .tarjeta.color-secundario.p-3(x="10%" y="40%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Para el cuerpo de texto principal del documento.
          .tarjeta.color-acento-botones.p-3(x="10%" y="52.5%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Para las secciones principales dentro de un capítulo.
          .tarjeta.color-acento-botones.p-3(x="10%" y="65.5%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Un estilo de carácter para resaltar palabras clave (usualmente en cursiva).
          .tarjeta.color-acento-botones.p-3(x="89%" y="44.5%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Para los títulos de los capítulos principales.
          .tarjeta.color-acento-botones.p-3(x="89%" y="57%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Para las subsecciones.
          .tarjeta.color-acento-botones.p-3(x="89%" y="69.5%" numero="+")(style="background-color:#ECE1F9;")
            p.mb-0(style="color:#000 !important") Para bloques de texto que son citas textuales largas.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        p Cada uno de los niveles utiliza un tamaño de fuente progresivamente menor y puede incluir numeración automática (American Psychological Association, 2020). Esta jerarquía es fundamental para:
        
    .row.justify-content-center
      .col-lg-3.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-10.svg', alt='Imagen decorativa')

      .col-lg-7(data-aos="fade-left")
        .cajon.cajon.C01.p-4.mb-3
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Organizar visualmente el contenido según su importancia relativa.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Generar tablas de contenido automáticas que reflejen la estructura del documento.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Facilitar la navegación en documentos extensos mediante paneles de navegación.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Asegurar accesibilidad para lectores de pantalla y tecnologías asistidas.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        p Ahora bien, los demás estilos son los siguientes: 

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#B0C2E5")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-11.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Estilos de párrafo
            p.mb-0 El estilo "Normal" o "Cuerpo de texto" define las características predeterminadas para el contenido principal. Adicionalmente, pueden existir estilos especializados como "Cita" para bloques de texto citado, "Pie de ilustración" para leyendas de figuras, o "Código" para fragmentos de programación.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#D5C6EA")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-12.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Estilos de carácter
            p.mb-0 Incluyen formatos como "Énfasis fuerte" (negrita), "Énfasis" (cursiva), "Referencia bibliográfica" o "Código en línea". Estos estilos mantienen la coherencia visual y facilitan modificaciones futuras del formato.
    
    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Caso de uso: creando una plantilla para informes institucionales

    p.mb-4 Una empresa necesita que todos sus informes trimestrales tengan la misma apariencia. En lugar de dar instrucciones a cada empleado, el departamento de TI crea una plantilla de Word (.docx) con los siguientes estilos predefinidos: 

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-13.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Título 1 (Informe trimestral)
            h5.t2.mb-2 Título 1 (Informe trimestral)
            p.mb-0 Fuente Arial Black, 18 pts., Azul corporativo, espaciado anterior 24 pts.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-14.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Título 2 (Sección)
            h5.t2.mb-2 Título 2 (Sección)
            p.mb-0 Fuente Arial, 14 pts., Negrita, Negro, espaciado anterior 12 pts.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-15.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Normal (Cuerpo de texto)
            h5.t2.mb-2 Normal (Cuerpo de texto)
            p.mb-0 Fuente Calibri, 11 pts., Justificado, Interlineado 1.5, espaciado posterior 8 pts., sangría de primera línea 1.25 cm.
            
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-16.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Leyenda de Imagen
            h5.t2.mb-2 Leyenda de Imagen
            p.mb-0 Fuente Calibri, 9 pts., Cursiva, Centrado.
    
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Ahora, cada vez que un empleado crea un informe a partir de esta plantilla, solo necesita aplicar los estilos correspondientes, garantizando una total consistencia sin esfuerzo.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 Con el siguiente video, podrá conocer una guía práctica sobre cómo administrar estilos en Microsoft Word: 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






</template>

<script>
export default {
  name: 'Tema3',
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
