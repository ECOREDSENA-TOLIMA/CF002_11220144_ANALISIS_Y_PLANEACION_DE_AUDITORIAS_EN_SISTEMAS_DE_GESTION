<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

      
    .cajon-b.color-acento-contenido.p-3.ps-0.mb-4(data-aos="fade-right")
      p.mb-0 La comunicación es un proceso de transmisión de información técnica por diferentes medios entre los que se identifica el oral y el escrito con el objetivo de informar frente alguna situación y que esta sirva para tomar decisiones. Es importante que se maneje correctamente en las organizaciones y su funcionalidad en los planes de auditoría donde se verifican criterios, requisitos y cumplimiento de normas. 

    p.mb-4(data-aos="fade-left") Es por esto, que en este componente formativo se conocerá la importancia de implementar técnicas de comunicación, sus elementos, tipos de información y el proceso de recopilación de información en una auditoría. También implementar herramientas de control mediante listas de verificación en los procesos de auditoría, se invita a explorar el video que se presenta a continuación que da una introducción temática:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/P2Uzg0Wx2No" title="Técnicas de comunicación, evaluación, seguridad y confidencialidad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Técnicas de comunicación, evaluación, seguridad y confidencialidad
    
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
