<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Formato de documentos

    .bg-c1.px-md-5.px-4.mb-0
      .col-12
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center
          .col-6.col-md-3.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img-02.svg', alt='Imagen decorativa')
          .col-lg-8
            p Son el conjunto de decisiones que definen la apariencia visual del texto y de la página. Aplicar un formato coherente es fundamental para la legibilidad y la profesionalidad del documento. Por tanto, se puede decir que, el formato de documentos se refiere al conjunto de características visuales y estructurales que determinan la apariencia y presentación del contenido escrito. Un formato adecuado no solo mejora la estética del documento, sino que también facilita su lectura, comprensión y profesionalismo (Cassany, 2019).

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1. Fuente

    p.mb-4 La fuente (o tipografía) se refiere al diseño de un conjunto de caracteres, incluyendo letras, números y símbolos. La selección apropiada de fuentes impacta significativamente en la legibilidad y percepción profesional del documento (Martínez de Sousa, 2001).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Tipos de fuentes

    p.mb-4 Las fuentes se clasifican principalmente en:

    .row.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta--BG02.h-100(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema2/img-03.png', alt='Texto que describa la imagen')
          .p-4
            h5 Serif
            p.mb-0 Con remates decorativos, como Times New Roman.
      .col-lg-6
        .tarjeta.tarjeta--BG02.h-100(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema2/img-04.png', alt='Texto que describa la imagen')         
          .p-4
            h5 Sans serif
            p.mb-0 Sin remates, como Arial o Calibri.

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-7.col-10.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img-05.svg', alt='Imagen decorativa')
      .col-lg-6.col-sm-7.col-10.mb-4
        p Las fuentes serif tradicionalmente se consideran más apropiadas para documentos impresos extensos, mientras que las sans serif se prefieren para lectura en pantalla debido a su mayor claridad en resoluciones digitales (Frutiger, 2012).
        p A continuación, se presentan algunos ejemplos de los diferentes tipos de fuentes:
        p #[b Frase base:] "La tecnología educativa transforma el aprendizaje en el siglo XXI".

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#DBE4F4; font-family:'Times New Roman', serif;")
            h4.text-center.mt-5(style="color:#12263F") Serif (Times New Roman)
            p.text-center.mb-0(style="color:#12263F; font-family:'Times New Roman', serif;") La tecnología educativa transforma el aprendizaje en el siglo XXI.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#DBE4F4; font-family:'Arial', sans-serif;")
            h4.text-center.mt-5(style="color:#12263F") Sans Serif (Arial)
            p.text-center.mb-0(style="color:#12263F; font-family:'Arial', sans-serif;") La tecnología educativa transforma el aprendizaje en el siglo XXI.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-08.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#DBE4F4;")
            h4.text-center.mt-5(style="color:#12263F") Sans Serif (Calibri)
            p.text-center.mb-0(style="color:#12263F; font-family:'Calibri', sans-serif;") La tecnología educativa transforma el aprendizaje en el siglo XXI.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Tamaño de fuente

    p Se mide en puntos (pt), donde un punto equivale a 1/72 de pulgada. Los estándares académicos y profesionales generalmente especifican tamaños entre 10 y 12 puntos para el cuerpo del texto, siendo 11 o 12 puntos los más comunes (American Psychological Association, 2020). Los títulos y subtítulos utilizan tamaños progresivamente mayores para establecer jerarquía visual.
    p.mb-5 A continuación, se presentan algunos ejemplos de los diferentes tamaños de fuentes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img-09.svg' alt='AvatarTop')
          h4 10 puntos
          h6.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img-10.svg' alt='AvatarTop')
          h4 12 puntos
          h5.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img-11.svg' alt='AvatarTop')
          h4 14 puntos
          h4.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img-12.svg' alt='AvatarTop')
          h4 18 puntos (título)
          h3.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI.
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-3(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Atributos de fuente

        p Los procesadores de texto permiten aplicar modificadores como negrita (para énfasis), cursiva (para términos extranjeros, títulos de obras o énfasis sutil), subrayado (poco usado actualmente), tachado, superíndice y subíndice.
        p A continuación, se presentan algunos ejemplos de los diferentes atributos de fuentes: 

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-sm-7.col-10.mb-4(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema2/img-13.png', alt='Imagen decorativa')
        .col-lg-6(data-aos="fade-left")
          LineaTiempoD.color-acento-botones.especial
            .row(numero="1" titulo="Normal")
              .col-12.mb-4.mb-md-0
                p.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI.
            .row(numero="2" titulo="Negrita")
              .col-12.mb-4.mb-md-0
                p.mb-0 #[b La tecnología educativa transforma el aprendizaje en el siglo XXI.]
            .row(numero="3" titulo="Cursiva")
              .col-12.mb-4.mb-md-0
                p.mb-0 #[em La tecnología educativa transforma el aprendizaje en el siglo XXI.]
            .row(numero="4" titulo="Subrayado")
              .col-12.mb-4.mb-md-0
                p.mb-0.text-decoration-underline  La tecnología educativa transforma el aprendizaje en el siglo XXI.
            .row(numero="5" titulo="Tachado")
              .col-12.mb-4.mb-md-0
                p.mb-0.text-decoration-line-through La tecnología educativa transforma el aprendizaje en el siglo XXI.
            .row(numero="6" titulo="Combinado (Negrita + Cursiva)")
              .col-12.mb-4.mb-md-0
                p.mb-0.fw-bold.fst-italic La tecnología educativa transforma el aprendizaje en el siglo XXI.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 Por medio del siguiente video, podrá conocer cómo aplicar formato de fuente en Microsoft Word: 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mX3mFPo_dHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Alineación

    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img-14.svg' alt="Imagen decorativa")
      .col-10
        .cajon.cajon.color-primario.p-4.mb-4
          p.mb-0 La alineación determina la posición del texto en relación con los márgenes del documento. Esta característica afecta significativamente la apariencia visual y la facilidad de lectura.
        p Al respecto, se encuentran los siguientes tipos de alineación, con su respectiva ejemplificación: 

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial(data-aos="zoom-in")
          .row.mb-0(numero="1" titulo="Alineación a la izquierda")(data-aos="fade-left")
            .col-12
              p Es la más común en idiomas occidentales, donde el texto se alinea con el margen izquierdo, mientras el margen derecho queda irregular. Esta alineación facilita la lectura al proporcionar un punto de inicio consistente para cada línea. 
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0.mb-3
                  li.mb-0
                    i.lista-ul__vineta(style="color: #6EC7E3; font-size: 2rem")
                    | #[b Ejemplo:]
                p.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema2/img-15.png', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="Alineación centrada")
            .col-12
              p El texto se posiciona en el centro del área disponible, utilizada típicamente para títulos, encabezados y elementos que requieren énfasis visual simétrico (Martínez de Sousa, 2001).
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0.mb-3
                  li.mb-0
                    i.lista-ul__vineta(style="color: #6EC7E3; font-size: 2rem")
                    | #[b Ejemplo:]
                p.text-center.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema2/img-16.png', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="Alineación a la derecha")
            .col-12
              p Menos común en el cuerpo del texto, se emplea ocasionalmente para fechas, firmas o elementos de diseño específicos en documentos formales.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0.mb-3
                  li.mb-0
                    i.lista-ul__vineta(style="color: #6EC7E3; font-size: 2rem")
                    | #[b Ejemplo:]
                p.mb-0.text-end La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema2/img-17.png', alt='Imagen decorativa')
          .row.mb-0(numero="4" titulo="Alineación justificada")
            .col-12
              p El texto se distribuye uniformemente entre ambos márgenes, creando bordes rectos en ambos lados. Aunque proporciona una apariencia formal, puede generar espaciados irregulares entre palabras si no se gestiona adecuadamente, mediante algoritmos de división silábica (Cassany, 2019).
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0.mb-3
                  li.mb-0
                    i.lista-ul__vineta(style="color: #6EC7E3; font-size: 2rem")
                    | #[b Ejemplo:]
                p.mb-0 La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.

            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema2/img-18.png', alt='Imagen decorativa')
    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 A través del siguiente video, puede verificar lo previamente explicado sobre cada tipo de alineación en Microsoft Word: 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cKnMXyALlao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3. Sangría

    p.mb-4 La sangría es el desplazamiento horizontal del texto respecto al margen establecido, utilizada para indicar estructura jerárquica, inicios de párrafo o listas (American Psychological Association, 2020). A continuación, se explican las existentes: 

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#B0C2E5")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img-19.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Sangría de primera línea
            p.mb-0 Desplaza únicamente la primera línea de cada párrafo hacia la derecha, tradicionalmente entre 1.27 cm (0.5 pulgadas) en documentos académicos. Esta convención señala visualmente el inicio de nuevos párrafos, sin requerir espacio adicional entre ellos.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#D5C6EA")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img-20.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Sangría francesa
            p.mb-0 También llamada sangría colgante, desplaza todas las líneas excepto la primera. Es estándar en listas de referencias bibliográficas, donde facilita la identificación rápida del inicio de cada entrada (American Psychological Association, 2020).
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#6EC7E3")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img-21.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Sangría izquierda y derecha
            p.mb-0 Desplaza todo el párrafo respecto a los márgenes, utilizada para citas textuales largas (generalmente de 40 palabras o más en formato APA) o para crear bloques de texto destacados.
    
    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:

    p.mb-4 Basado en lo anterior, el siguiente video ejemplifica cada tipo de sangría en Microsoft Word: 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/erx0G6TATnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4. Interlineado y espaciado

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-22.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-left")
        .cajon.cajon.color-primario.p-4.mb-5
          p.mb-0 El interlineado define la distancia vertical entre líneas consecutivas de texto, mientras que el espaciado controla la separación entre párrafos. Ambos elementos son cruciales para la legibilidad y presentación profesional (Cassany, 2019).
        p.mb-5 Los siguientes, son los interlineados más comunes utilizados en Microsoft Word:
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 A. Interlineado simple
        p Espacio mínimo entre líneas, utilizado cuando se requiere maximizar el contenido en espacio limitado, aunque puede reducir la legibilidad en textos extensos. En la siguiente figura, se aprecia la configuración del párrafo y un ejemplo con el contenido previamente relacionado:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Configuración interlineado simple</em>          
      .row.justify-content-center
        .col-8
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-23.png', alt='Figura 1 que relaciona la configuración de párrafo con interlineado sencillo y espaciado anterior y posterior en 0 pts.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-23.png', alt='Figura 1 que relaciona la configuración de párrafo con interlineado sencillo y espaciado anterior y posterior en 0 pts.')

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Ejemplo
        .color-primario.p-4.quote-card(style="background-color:#D2EEF6;")
          p.mb-0 “La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.”

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 B. Interlineado 1.5

    p.mb-4 Proporciona 50 % más de espacio que el interlineado simple, ofreciendo un balance entre densidad de contenido y legibilidad, frecuentemente utilizado en documentos profesionales. Igualmente, a continuación, se relaciona la figura con su configuración y un ejemplo: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <em>Configuración 1.5</em>          
      .row.justify-content-center
        .col-8
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-24.png', alt='Figura 2 que relaciona la configuración de párrafo con interlineado 1.5 y espaciado anterior y posterior en 0 pts.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-24.png', alt='Figura 2 que relaciona la configuración de párrafo con interlineado 1.5 y espaciado anterior y posterior en 0 pts.')

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Ejemplo
        .color-primario.p-4.quote-card(style="background-color:#D2EEF6;")
          p.mb-0(style="line-height:2;") “La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.”

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 C. Interlineado 2.0 (doble)

    p.mb-4 Duplica el espacio entre líneas. Requerido en muchos contextos académicos para facilitar anotaciones manuscritas y revisiones (American Psychological Association, 2020). Este espaciado también mejora significativamente la legibilidad en documentos extensos. A continuación, su configuración y ejemplificación:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <em>Configuración interlineado doble</em>          
      .row.justify-content-center
        .col-8
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-25.png', alt='Figura 3 que relaciona la configuración de párrafo con interlineado doble y espaciado anterior y posterior en 0 pts.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-25.png', alt='Figura 3 que relaciona la configuración de párrafo con interlineado doble y espaciado anterior y posterior en 0 pts.')

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Ejemplo
        .color-primario.p-4.quote-card(style="background-color:#D2EEF6;")
          p.mb-0(style="line-height:2.5;") “La tecnología educativa transforma el aprendizaje en el siglo XXI, mediante herramientas digitales innovadoras que facilitan la comunicación entre estudiantes y docentes. Los procesadores de texto, plataformas virtuales y recursos multimedia, permiten crear experiencias de aprendizaje más dinámicas y personalizadas. Esta revolución digital ha modificado sustancialmente los métodos tradicionales de enseñanza, promoviendo la colaboración y el acceso universal al conocimiento.”

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Espaciado entre párrafos

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#B0C2E5")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-26.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los procesadores modernos, permiten definir espaciado anterior y posterior, independiente para cada párrafo, medido en puntos. El estándar APA 7ª edición, por ejemplo, no requiere espacio adicional entre párrafos, cuando se utiliza sangría de primera línea (American Psychological Association, 2020).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema2/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico:
          
    p.mb-4 Con el siguiente video, podrá conocer cómo ajustar el espaciado en Microsoft Word: 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/z_HK_Fb-fxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema2',
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
