<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguridad y confidencialidad de la información
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La confidencialidad, una vez que se hace referencia a sistemas de información, posibilita a los usuarios autorizados entrar a datos confidenciales y salvaguardados. Hay mecanismos específicos que avalan la confidencialidad y protegen los datos de intrusos no deseados o que van a provocar mal. La confidencialidad pertenece a los pilares de estabilidad de la información, junto con la disponibilidad y totalidad. La información o los datos confidenciales tienen que divulgarse sólo a usuarios autorizados. 

    p.mb-4(data-aos="fade-down") Una vez que se habla de un registro de auditoría además se habla de los #[em tokens]. Es fundamental rememorar que los #[em tokens] son los que por medio del uso de #[em cookies] permiten validar la identidad del cliente. Hay herramientas que permiten revisar cual es la fortaleza de los #[em tokens] provocados por una aplicación #[em web].
    p.mb-4(data-aos="fade-down") Un registro de auditoría es una serie de #[em tokens] de auditoría. Cada #[em token] de auditoría tiene información del acontecimiento, como #[em ID] de cliente, hora y fecha. Un #[em token header] empieza un registro de auditoría, y un #[em token] opcional #[em tráiler], lo concluye. Otros #[em tokens] de auditoría tienen dentro información importante para el acontecimiento de la evaluación.
    p.mb-4(data-aos="fade-down") La siguiente tabla muestra los nombres de #[em tokens] con una breve explicación de cada uno de ellos:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Tipos de token</i>
        .tabla-b.color-acento-contenido
          table(style="max-width:100%")
            thead.text-center(style="background-color:#BCF987")
              tr
                th(style="width:25%") Nombre de #[em token]
                th Descripción
            tbody
              tr
                td.p-3.text-center #[em Acl]
                td.p-3 Información de Entrada de Control de Acceso (ACE) y Lista de Control de Acceso (ACL).
              tr
                td.p-3.text-center #[em Arbitrary]
                td.p-3 Datos con información de formato y de tipo.
              tr
                td.p-3.text-center #[em Argument]
                td.p-3 Valor de argumento de llamada de sistema.
              tr
                td.p-3.text-center #[em Attribute]
                td.p-3 Información de #[em v-node] de archivo.
              tr
                td.p-3.text-center #[em Cmd]
                td.p-3 Argumentos de comandos y variables de entornos.
              tr
                td.p-3.text-center #[em exec_args]
                td.p-3 Argumentos de llamada de sistema #[em exec].
              tr
                td.p-3.text-center #[em exec_env]
                td.p-3 Variables de entorno de llamada de sistema #[em exec].
              tr
                td.p-3.text-center #[em Exit]
                td.p-3 Información de salida de programa.
              tr
                td.p-3.text-center #[em File]
                td.p-3 Información de archivo de auditoría.
              tr
                td.p-3.text-center #[em Fmri]
                td.p-3 Indicador de recursos de gestión de estructura.
              tr
                td.p-3.text-center #[em Group]
                td.p-3 Información de grupos de procesos.
              tr
                td.p-3.text-center #[em Header]
                td.p-3 Indica el comienzo del registro de auditoría.
                
    p.mb-4(data-aos="fade-down") El subsistema de auditoría se encarga de defender los datos, incrementando la garantía de que sean auditados y no se hayan cambiado ni modificado fuera del proceso. Esta alternativa además salvaguarda la confidencialidad de los datos mediante archivos cifrados y firmando los datos de registro, en muchas organizaciones tienen que ser guardados en sitios con alta seguridad para prevenir modificaciones y eliminaciones casuales o motivadas.
    p.mb-4(data-aos="fade-down") A continuación, se mostrará los procedimientos para seleccionar, analizar y gestionar los registros de auditoría:
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Procedimientos de selección, gestión y registros de auditoría</i>
        .tabla-b.color-acento-contenido
          table(style="max-width:100%")
            caption Nota. Tomada de gestión de registros de auditoría. Oracle (2011).
            thead.text-center(style="background-color:#BCF987")
              tr
                th(style="width:30%") Tarea
                th Descripción
                th(style="width:30%") Para obtener instrucciones
            tbody
              tr
                td.p-3 Mostrar los formatos de los registros de auditoría.
                td.p-3 Muestra el tipo de información que se recopila para un evento de auditoría y el orden en que se presenta la información.
                td.p-3 Cómo visualizar formatos de registros de auditoría.
              tr
                td.p-3 Fusionar registros de auditoría.
                td.p-3 Combina los archivos de auditoría de varios equipos en una pista de auditoría.
                td.p-3 Cómo fusionar archivos de auditoría de la pista de auditoría.
              tr
                td.p-3 Seleccionar los registros para examinar.
                td.p-3 Selecciona eventos determinados de estudio.
                td.p-3 Cómo seleccionar eventos de auditoría de la pista de auditoría.
              tr
                td.p-3 Mostrar registros de auditoría.
                td.p-3 Habilita la visualización de registros de auditoría binarios.
                td.p-3 Cómo visualizar el contenido de los archivos de auditoría binarios.
              tr
                td.p-3 Depurar archivos de auditoría denominados incorrectamente.
                td.p-3 Proporciona una indicación de hora final para auditar archivos de auditoría que quedaron abiertos inadvertidamente en el servicio de auditoría.
                td.p-3 Cómo depurar un archivo de auditoría #[em not_terminated].
              tr
                td.p-3 Evitar el desbordamiento de la pista de auditoría.
                td.p-3 Impide que los sistemas de archivos de auditoría se llenen.
                td.p-3 Cómo evitar el desbordamiento de la pista de auditoría.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El mantenimiento del registro de auditoría incluye numerosas piezas de la funcionalidad que permiten automatizar el registro de auditoría en políticas concretas. El mantenimiento de registros y la presentación de informes resaltan el valor del desarrollo y mantenimiento de la memoria institucional por medio de informes bien diseñados y ocupaciones de mantenimiento de registros eficaces. Los registros disponibles facilitan el diseño y el reparto de informes que tienen la posibilidad de informar el personal, el liderazgo del programa y los aliados externos de la sociedad.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Pilares de la seguridad de la información

    p.mb-4(data-aos="fade-down") Las organizaciones se ven cada día más expuestas a un creciente número de ataques virtuales y delitos cibernéticos, lo que hace que la protección de los datos sea una prioridad. Para incrementar la seguridad de la información, es indispensable conocer los tres pilares fundamentales de la seguridad de la información, que se presentan a continuación:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-3.svg' alt='')
          .tarjeta.color-primario-b
            .p-4
              h4.text-center.mt-3 Integridad
              p Hace referencia a la cualidad de la información para ser correcta y no haber sido modificada.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-4.svg' alt='')
          .tarjeta.color-primario-b
            .p-4
              h4.text-center.mt-3 Confidencialidad
              p La cualidad de la información para no ser divulgada a personas o sistemas no autorizados.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-5.svg' alt='')
          .tarjeta.color-primario-b
            .p-4
              h4.text-center.mt-3 Disponibilidad
              p Entendemos aquella información a la que podemos acceder cuando la necesitamos a través de los canales correctos.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 ISO 27000

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es una norma internacional que permite el aseguramiento, la confidencialidad e integridad de los datos y de la información, así como de los sistemas que la procesan. Permite a las organizaciones la evaluación del riesgo y la aplicación de los controles necesarios para mitigarlos o eliminarlos.
          br
          br
          | En la actualidad, se conoce que para defender la información en las organizaciones no basta con la construcción de procedimientos y controles de estabilidad sin una orientación o regla general establecida y testeada. Gracias a esto, la Organización Internacional de Estandarización (ISO), pone a disposición una pluralidad de estándares de reconocimiento y aplicación universal, agrupados en el núcleo familiar de ISO 27000, con el fin de desarrollar una óptima utilización de la estabilidad de la información. 

    p.mb-4(data-aos="fade-down") La norma ISO 27000 proviene de la norma BS 7799 del Reino Unido, que fue publicada en 1995 con el objetivo de proporcionar a las organizaciones, una serie de buenas prácticas relacionadas con la gestión de la seguridad de la información.
    p.mb-4(data-aos="fade-down") Esta norma, o conjunto de normas, es aplicable a organizaciones de cualquier tamaño y actividad y tiene como objetivo el desarrollo de estándares para la implementación de un Sistema de Gestión de Seguridad de la Información (SGSI). El SGSI garantiza la adecuada implementación de controles de seguridad para proteger la información de manera efectiva.
    p.mb-4(data-aos="fade-down") La implantación de un Sistema de Gestión de Seguridad de la Información (SGSI) conlleva varios beneficios para las organizaciones. El principal beneficio es la reducción de los riesgos relacionados con la seguridad de la información, lo que disminuye la probabilidad de sufrir incidentes que puedan afectarla. Además de esto, se pueden mencionar otros beneficios importantes, como:

    ul.lista-ul.mb-4.ms-md-4.ms-3(data-aos="fade-down")
      li ✔ Proporciona una metodología sistemática para implementar un SGSI que puede adaptarse a las necesidades de cualquier organización o empresa.
      li ✔ Facilita la integración coherente de los objetivos de seguridad de la información con los objetivos comerciales, los procesos, la gestión de la organización y la capacitación y sensibilización de los empleados.
      li ✔ Permite la adopción de prácticas internacionalmente aceptadas en seguridad de la información y su adaptación a las necesidades específicas de cada organización.
      li ✔ Establece un lenguaje común en el ámbito de la seguridad de la información, lo que facilita la certificación del SGSI por parte de entidades u organismos acreditados.

    p.mb-4(data-aos="fade-down") En resumen, la implementación de un SGSI contribuye a proteger la información de la organización y a alinear la seguridad de la información con los objetivos comerciales, lo que puede tener un impacto positivo en la competitividad y la confianza de los clientes.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Implementando la Norma ISO 27001

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La norma ISO 27001 es una herramienta fundamental para establecer un Sistema de Gestión de Seguridad de la Información (SGSI) en una organización. Esta norma proporciona un marco de trabajo que ayuda a definir el alcance, las políticas, las medidas y las metodologías necesarias para garantizar la seguridad de la información.
          br
          br
          | Uno de los aspectos clave de la ISO 27001 es la evaluación de riesgos, que es el proceso central para identificar y gestionar las amenazas y vulnerabilidades que pueden afectar a la seguridad de la información de una organización. La norma sugiere una metodología para llevar a cabo esta evaluación de riesgos, que es fundamental para tomar decisiones informadas sobre las medidas de seguridad a implementar. A continuación, se revisará la metodología sugerida en la norma:

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-9(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Método de evaluación y tratamiento del riesgo</i>
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-4a.png', alt='En la figura 4 se muestra un mapa conceptual sobre el método de evaluación y tratamiento de riesgos; teniendo en cuenta la identificación de activos y la forma como deben ser tratados.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-4b.png', alt='En la figura 4 se muestra un mapa conceptual sobre el método de evaluación y tratamiento de riesgos; teniendo en cuenta la identificación de activos y la forma como deben ser tratados.')

    p.mb-4(data-aos="fade-down") De acuerdo a la anterior figura se explicará cada uno de los aspectos o pasos que se deben definir y cuál es su función.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-8.svg' alt='')
        h4.text-center Identificar activos de información
        p.mb-0 Son todos aquellos activos como infraestructura, equipos, así mismo intelectuales o informativos como ideas, proyectos. También la marca y la reputación de la organización.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-9.svg' alt='')
        h4.text-center Vulnerabilidades
        p.mb-0 Identificar aquellas debilidades de los activos de la información que lo hacen susceptibles a sufrir ataques o daños. 
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-10.svg' alt='')
        h4.text-center Amenazas
        p.mb-0 Son aquellos sucesos que pueden presentar vulnerabilidad y dañan la información, tales como desastres naturales, incendios o ataques de virus informáticos, espionaje, etc.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-11.svg' alt='')
        h4.text-center Requisitos legales
        p.mb-0 Se deben identificar los requisitos legales y contractuales que están obligados a cumplir con sus clientes, proveedores y socios.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-12.svg' alt='')
        h4.text-center Identificar los riesgos
        p.mb-0 definir para cada activo las probabilidades de amenazas o vulnerabilidades que puedan causar un daño total o parcial comprometiendo su disponibilidad, confidencialidad e integridad.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-13.svg' alt='')
        h4.text-center Cálculo del riesgo
        p.mb-1 Este se realiza a partir de la probabilidad de ocurrencia del riesgo y el impacto que este tiene sobre la organización.
        p.mb-0 Teniendo en cuenta que el riesgo es el resultado de la multiplicación del impacto y la probabilidad de suceso. 
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-14.svg' alt='')
        h4.text-center Plan de tratamiento del riesgo
        p.mb-0 En este punto se define la política de tratamiento de los riesgos en función de los puntos anteriores.

    p.mb-4(data-aos="fade-down") En la siguiente figura, se revisarán las fases para la implementación de un adecuado Sistema de Gestión de Seguridad de la Información (SGSI) basado en ISO 27001. A través de una elaboración y recopilación adecuadas, es posible garantizar la confidencialidad, integridad y disponibilidad de la información relacionada con este SGSI.

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Fases para implementar un SGSI</i>
        figure 
          img(src='@/assets/curso/temas/tema2/fig-5a.png', alt='En la figura 5 se muestran las 7 fases para la implementación de SGSI y la manera como interactúan entre ellas.')
          
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Requisitos aplicables según la norma

    p.mb-4(data-aos="fade-down") Un Sistema de Gestión de la Seguridad de la Información (SGSI), es un conjunto de políticas y procedimientos que sirven para estandarizar la gestión de la Seguridad de la Información. Esta estandarización contiene las definiciones y los términos que se utilizarán durante toda la serie 27000. Para aplicar cualquier normativa se necesita conocer un vocabulario perfectamente definido, por lo que así se evitará cualquier mala interpretación de conceptos técnicos y gestión. 
 
    p.mb-4(data-aos="fade-down") A continuación, se dejará algunos detalles de cada uno de los estándares que están incluidos en la familia de ISO 27000.

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 6. </b> <i>Familia de las Normas ISO 27000</i>
        .tabla-b.color-acento-contenido
          table(style="max-width:100%")
            caption Nota. La familia de normas ISO 27000. ISOTools (2022).
            thead.text-center(style="background-color:#BCF987")
              tr
                th(style="width:30%") Tipo
                th(style="width:25%") Norma
                th Descripción
            tbody
              tr(style="background-color:#F6F6F6")
                th.text-center.p-3 Vocabulario común.
                th.text-center.p-3 ISO 27000.
                td.p-3 Especifica los requerimientos y necesidades para implantar y gestionar un SGSI. Es una norma certificable.
              tr(style="background-color:#BBEFF9")
                th.text-center.p-3(rowspan="2") Vocabulario común.
                th.text-center.p-3 ISO 27006.
                td.p-3 Establece los requisitos que deben cumplir aquellas organizaciones que quieran ser acreditadas para certificar a otras en el cumplimiento de la ISO 27001.
              tr(style="background-color:#BBEFF9")
                th.text-center.p-3 ISO 27009.
                td.p-3 Complementa la norma 27001 para incluir requisitos y nuevos controles añadidos que son de aplicación en sectores específicos, con el objetivo de hacer más eficaz su implantación.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3(rowspan="10") Guía de aprendizaje.
                th.text-center.p-3 ISO 27002.
                td.p-3 Define un conjunto de buenas prácticas para la implantación del SGSI, a través de 114 controles, estructurados en 14 dominios y 35 objetivos de controles.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27003.
                td.p-3 Proporciona una guía para la implantación de forma correcta un SGSI, centrándose en los aspectos importantes para realizar con éxito dicho proceso.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27004.
                td.p-3 Proporciona pauta orientadas a la correcta definición y establecimiento de métricas que permitan evaluar de forma correcta el rendimiento del SGSI.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27005.
                td.p-3 Define cómo se debe realizar la gestión de riesgos vinculados a los sistemas de gestión de la información orientado en cómo establecer la metodología a emplear.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27007.
                td.p-3 Es una guía que establece los procedimientos para realizar auditorías internas o externas con el objetivo de verificar y certificar.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27008.
                td.p-3 Define cómo se deben evaluar los controles del SGSI con el fin de revisar la adecuación técnica de los mismos, de forma que sean eficaces para la mitigación de riesgos.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27013.
                td.p-3 Establece una guía para la integración de las normas 27001 (SGSI) y 20000 Sistema de Gestión de Servicios (SGS) en aquellas organizaciones que implementan ambas.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27014.
                td.p-3 Establece principios para el gobierno de la seguridad de la información, para que las organizaciones puedan evaluar, monitorizar y comunicar las actividades relacionadas con la seguridad de la información.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27015.
                td.p-3 Facilita los principios de implantación de un SGSI en empresas que prestan servicios financieros, tales como servicios bancarios o banca electrónica.
              tr(style="background-color:#FFFACF")
                th.text-center.p-3 ISO 27016.
                td.p-3 Proporciona una guía para la toma de decisiones económicas vinculadas a la gestión de la seguridad de la información, como apoyo a la dirección de las organizaciones.
              tr(style="background-color:#E8FDD5")
                th.text-center.p-3(rowspan="5") Requisitos específicos.
                th.text-center.p-3 ISO 27010.
                td.p-3 Indica cómo debe ser tratada la información cuando es compartida entre varias organizaciones, qué riesgos pueden aparecer y los controles que se deben emplear para mitigarlos, especialmente cuando están relacionados con la gestión de la seguridad en infraestructuras críticas.
              tr(style="background-color:#E8FDD5")
                th.text-center.p-3 ISO 27011.
                td.p-3 Establece los principios para implantar, mantener y gestionar un SGSI en organizaciones de telecomunicaciones, indicando como implantar los controles de manera eficiente.
              tr(style="background-color:#E8FDD5")
                th.text-center.p-3 ISO 27017.
                td.p-3 Proporciona una guía de 37 controles específicos para los servicios #[em cloud], estos controles están basados en la norma 27002.
              tr(style="background-color:#E8FDD5")
                th.text-center.p-3 ISO 27018.
                td.p-3 Complementa a las normas 27001 y 27002 en la implantación de procedimientos y controles para proteger datos personales en aquellas organizaciones que proporcionan servicios en #[em cloud] para terceros.
              tr(style="background-color:#E8FDD5")
                th.text-center.p-3 ISO 27019.
                td.p-3 Facilita una guía basada en la norma 27002 para aplicar a las industrias vinculadas al sector de la energía, de forma que puedan implantar un SGSI.


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
