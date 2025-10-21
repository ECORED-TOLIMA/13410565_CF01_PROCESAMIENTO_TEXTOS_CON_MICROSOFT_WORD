<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente, se ha presentado funciones básicas para el uso básico de Microsoft Word. El contenido ha ido desde los fundamentos del formato hasta las técnicas que garantizan la profesionalidad y coherencia en cualquier texto que producido. Se comenzó estableciendo una base del concepto de formato de fuentes y párrafos, los pilares de la legibilidad. Sin embargo, el verdadero salto cualitativo se dio al comprender y aplicar estilos, la herramienta más potente para asegurar la consistencia visual y la eficiencia en la edición de documentos largos. Con el conocimiento adquirido puede modificar un estilo, actualizar automáticamente todo el documento, ahorrando tiempo y eliminando errores.
    p.mb-4 En resumen, ahora se tienen las competencias para tomar contenido en bruto y estructurarlo de manera lógica, eficiente y visualmente impecable, generando documentos que no solo comunican un mensaje de forma clara, sino que también reflejan un alto estándar de calidad y cumplimiento normativo institucional.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Configuración de estilos en Microsoft Word, aborda el uso de los procesadores de texto, su definición, tipos y licenciamiento. Expone los elementos de formato como fuente, alineación, sangría, interlineado y espaciado, así como la importancia de los estilos para títulos, párrafos y caracteres. También trata la organización del documento, mediante secciones y saltos, así como la correcta inserción de encabezados, pies de página y numeración; fortaleciendo competencias para elaborar documentos claros, uniformes y profesionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
