<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Técnicas de comunicación, evaluación, seguridad y confidencialidad, se centra en aspectos esenciales para garantizar una evaluación precisa en el ámbito de las auditorías. La comunicación efectiva con todas las partes involucradas permite comprender a fondo los procesos y desafíos de la organización. La evaluación, por su parte, implica analizar datos y pruebas de manera imparcial para identificar áreas de mejora de manera objetiva. La seguridad en el contexto de la auditoría se refiere a la protección de la integridad de la información y a la prevención de posibles filtraciones de datos sensibles. Finalmente, la confidencialidad juega un papel crucial al mantener la privacidad de la información empresarial y prevenir conflictos de interés. En conjunto, estas técnicas y principios aseguran la calidad y confiabilidad de las auditorías, promoviendo la transparencia y facilitando la mejora continua en las organizaciones.
    //- p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="En la síntesis del componente formativo se muestran los dos temas fundamentales, las técnicas, seguridad y confidencialidad cada una de ellas con sus subtemas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
