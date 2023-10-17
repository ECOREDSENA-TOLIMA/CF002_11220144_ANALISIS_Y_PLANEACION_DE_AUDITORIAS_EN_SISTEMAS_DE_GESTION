<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de comunicación

    p.mb-5(data-aos="fade-left") Cuando se habla de técnicas de comunicación, es fundamental comprender primero el significado de la comunicación. La comunicación es el medio a través del cual una persona establece contacto con otra, dando lugar a un intercambio de información y creando una comprensión mutua al transmitir un mensaje entre el emisor y el receptor. La comunicación es la manera en que las personas se comprenden entre sí y consta de cuatro elementos esenciales, los cuales se mencionan en el siguiente video:

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uyfkdAMQAI8" title="Elementos de la comunicación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    p.mb-5(data-aos="fade-left") Estos elementos permiten que la comunicación sea parte fundamental de nuestra vida diaria. Una comunicación eficaz requiere el dominio de buenas técnicas para interactuar con los demás, ya que la forma en que expresamos un mensaje puede influir en cómo se interpreta y se comprende. Es importante tener en cuenta que no se aplican las mismas reglas de comunicación al hablar con un amigo que al redactar un trabajo para la clase. Reconocer las diferencias entre estos dos contextos ayudará a lograr una comunicación exitosa en todas las circunstancias. A continuación, se definen los tipos de comunicación que se utilizan en las empresas: 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 #[b La comunicación oral] es una forma de expresión de los seres humanos que implica el uso de palabras habladas. Esta comunicación puede variar en tono, volumen, velocidad y claridad. Se produce cuando dos o más personas que comparten el mismo idioma interactúan y se transmite a través del aire o, en algunos casos, mediante dispositivos electrónicos.

    p.mb-4(data-aos="fade-right") La comunicación escrita se lleva a cabo a través de palabras y códigos escritos. En este tipo de comunicación, tanto el emisor como el receptor deben compartir el conocimiento del código utilizado para lograr una comunicación efectiva. La buena ortografía y la comprensión lectora son fundamentales para transmitir el mensaje con éxito según lo previsto.

    p.mb-5(data-aos="fade-right") Es importante tener en cuenta las siguientes técnicas a la hora de querer comunicar.

    SlyderB.mb-5(:datos="datosSlyder" data-aos="fade-down-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 La información en una organización

    p.mb-4(data-aos="fade-down") La información es un grupo de datos que al ser organizados tienen la posibilidad de generar un mensaje con base en hechos. La información es el mensaje que un emisor busca transmitir a través de un conjunto de datos que conforman un reporte pretendiendo ser llegado al receptor, la información siempre se da por medio de un canal entre el emisor y el receptor. 

    p.mb-4(data-aos="fade-down") En una organización la información juega un papel muy importante ya que permite que las personas requieran de conocimientos previos para la toma de decisiones. Para que la información pueda ser de gran utilidad es necesario que tenga:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-8.png')})`}"
      )
      .bloque-texto-g__texto_2.p-4
        .row.justify-content-center
          .col-12.col-md-6.col-lg-5
            p.mb-0 • Exactitud 
            p.mb-0 • Oportunidad
            p.mb-0 • Pertinencia
            p.mb-0 • Integridad 
          .col-12.col-md-6.col-lg-5 
            p.mb-0 • Frecuencia
            p.mb-0 • Margen de tiempo
            p.mb-0 • Alcance 
            p.mb-0 • Origen 
            p.mb-0 • Presentación 

    p.mb-4(data-aos="fade-down") La necesidad de la información de una organización cambia dependiendo de la naturaleza del trabajo, la actividad a hacer y las metas que se quieran obtener, varían de consenso al grado que ocupen los individuos en la organización, o sea, los directivos necesitan de más información que los técnicos para lograr desarrollar su trabajo y estar sujetos a la naturaleza interna o externa.
    p.mb-4(data-aos="fade-down") Por otro lado, la necesidad de contar con información es de gran importancia para las organizaciones, al mismo tiempo toda empresa necesita tener acceso a la mayor cantidad de información posible. No importa el área funcional de la empresa, cada uno de los elementos que la integran necesitan en mayor o menor grado.
    p.mb-4(data-aos="fade-down") Para el nivel directivo en una empresa, la información es utilizada para diseñar estrategias y trazar el camino que se debe seguir, por tal motivo es de vital importancia que esta información sea oportuna y especifica. En el área intermedia de la información se utiliza para diseñar estrategias específicas que permitan el logro de los objetivos que se establecieron en el nivel directivo. Por otro lado, en el área operativa la información que se maneja es detallada en los procesos, productos, actividades que los trabajadores necesitan para llevar a cabo las tareas de cada área.

    p.mb-4(data-aos="fade-down") A continuación, se revisará cómo es el manejo de la información en una organización en los diferentes niveles.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Manejo de la información</i>
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.png', alt='En la figura 1 se muestra la manera como se debe manejar la información teniendo en cuenta los niveles: operativos, medio y directivo.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.png', alt='En la figura 1 se muestra la manera como se debe manejar la información teniendo en cuenta los niveles: operativos, medio y directivo.')
          figcaption.mt-2 Nota. El arte del manejo de la información y la información difusa. Huerta. (2016).

    p.mb-4(data-aos="fade-down") La información está inmersa en cualquier actividad de la vida cotidiana y por tanto es de gran importancia para entender un asunto a realizar en cualquier ámbito, ya sea en el trabajo o en cualquier otro campo. La información es necesaria e importante para cualquier proceso que realice una organización, pues permite que se evite cometer errores, existen cinco (5) tipos de información, los cuales son:
    
    TabsC.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="Información confidencial")
        .row
          .col-md-5.col-lg-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-9.svg', alt='')
          .col-md-7.col-lg-8.col-12
            h4 Información confidencial
            p Es un tipo de información sensible que está restringida por las leyes o regulada para clases particulares de individuos. Hace falta una habilitación formal de estabilidad para manejar y entrar a documentos clasificados. Hay habitualmente 4 grados de sensibilidad de la información, cada cual con diversos tipos de autorizaciones de estabilidad.
      .py-3.py-md-4(titulo="Información pública")
        .row
          .col-md-5.col-lg-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.svg', alt='')
          .col-md-7.col-lg-8.col-12
            h4 Información pública
            p Es aquella información que, cualquier persona que sea su soporte y forma de expresión, obre en poder de las Administraciones Públicas a las que hace referencia la ley y los organismos públicos vinculados o dependientes en su poder.
      .py-3.py-md-4(titulo="Información personal")
        .row
          .col-md-5.col-lg-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-11.svg', alt='')
          .col-md-7.col-lg-8.col-12
            h4 Información personal
            p Se refiere a los datos que vinculan potencialmente a un sujeto específico. Cualquier información que podría ser usada para diferenciar una persona de otra, y que podría ser utilizada para quitarle el anonimato a los datos anónimos.
      .py-3.py-md-4(titulo="Información interna")
        .row
          .col-md-5.col-lg-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.svg', alt='')
          .col-md-7.col-lg-8.col-12
            h4 Información interna
            p La información interna son datos que se generan a partir dentro del comercio, que cubre zonas como operaciones, mantenimiento, personal y finanzas.
      .py-3.py-md-4(titulo="Información externa")
        .row
          .col-md-5.col-lg-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-13.svg', alt='')
          .col-md-7.col-lg-8.col-12
            h4 Información externa
            p La información externa es la que proviene del mercado,  consumidores y participantes. Es algo como estadísticas de encuestas, formularios, averiguaciones y comentarios de los consumidores.

    p.mb-4(data-aos="fade-down") La información tiene como características.

    .row.justify-content-center.tarjeta.color-primario.p-3.mb-5(data-aos="fade-left")
      .col-12.col-lg-3.col-xl-2.col-md-4
        span.p-2 #[i.fas.fa-check.text-white ] Su significado
      .col-12.col-lg-3.col-xl-2.col-md-4
        span.p-2 #[i.fas.fa-check.text-white ] Su importancia
      .col-12.col-lg-2.col-xl-2.col-md-4
        span.p-2 #[i.fas.fa-check.text-white ] Vigencia
      .col-12.col-lg-2.col-xl-2.col-md-4
        span.p-2 #[i.fas.fa-check.text-white ] Validez
      .col-12.col-lg-2.col-xl-2.col-md-4
        span.p-2 #[i.fas.fa-check.text-white ] Valor

    p.mb-5(data-aos="fade-down") La evaluación de la información es un proceso que se utiliza para decidir de forma sistemática, el mérito, el costo y el sentido de un trabajo, alguna capacidad intelectual, física o de alguien en funcionalidad de ciertos criterios en relación con un grupo de reglas. Comúnmente se utiliza para caracterizar y ver el rendimiento que se lleva dentro de una organización, verificando que la información con la que se trabaja es confiable. Cuando se habla del manejo de la información, se habla también de la información difusa, así que por lo tanto la información difusa es, según Rosas Sánchez (2012), “es el conjunto organizado de datos que constituye un mensaje sobre un cierto fenómeno o entidad pero que tiene la característica de ser poco clara, exacta o concreta”.
        
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La información difusa se comprende como el grupo de datos que difícilmente tienen la posibilidad de ser procesados o analizados para obtener información veraz que logre ofrecer los instrumentos elementales a las personas y los guíe en la toma de elecciones. Es fundamental que en el funcionamiento de los datos acerca de la información difusa, participen las piezas que se delegan de generarla. Además, se necesita que la alta dirección de la organización logre procesar la información para establecer su nivel de utilidad. Hay ciertos puntos que tienen la posibilidad de tener en cuenta para ofrecer claridad en el desempeño de la información difusa, los cuales son:

    ul.lista-ul.mb-3.ms-md-4.ms-3(data-aos="fade-down")
      li ✔	Inquietud de conocimiento.
      li ✔	Búsqueda de información.
      li ✔	Obtención de información difusa.
      li ✔	Uso de herramientas.

    p.mb-5(data-aos="fade-down") A continuación, se puede observar el proceso del manejo de la información difusa para las organizaciones.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-15.svg' alt='')
        h4.text-center Necesidad de información
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-16.svg' alt='')
        h4.text-center Búsqueda de información
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-17.svg' alt='')
        h4.text-center Obtención de todo tipo de información
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-18.svg' alt='')
        h4.text-center Uso de herramientas para localizar y obtener información clara y precisa
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-19.svg' alt='')
        h4.text-center Evaluación de la información
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-20.svg' alt='') 
        h4.text-center Procesamiento y producción de la información
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-21.svg' alt='')
        h4.text-center Toma de decisiones

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Preparación de la información documentada para la auditoría

    p.mb-4(data-aos="fade-down") La preparación de la información documentada es una actividad clave en la planificación de las auditorías. En esta etapa, el equipo auditor se encarga de recopilar y revisar la información de la empresa que se va a auditar, lo que les permite:
    
    ul.lista-ul.mb-4.ms-md-4.ms-3(data-aos="fade-down")
      li ✔	Preparar la realización de la auditoría mediante listas de chequeo, ya sean físicas o digitales.
      li ✔	Definir técnicas y detalles de muestreo apropiados de acuerdo al tamaño de la organización y sus procesos.
      li ✔	Garantizar que al final de la auditoría se disponga de la información documentada y que se cumplan con los requisitos.

    p.mb-5(data-aos="fade-down") La imagen y expresión corporal del auditor es vital en esta relación con sus auditados, por lo que es importante tener en cuenta:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down-left")
      .row.justify-content-center(titulo="Puntualidad")
        .col-md-8.col-12.mb-4.mb-md-0
          p El auditor debe llegar a la hora acordada, ni antes ni después, para cumplir con el cronograma de la auditoría y respetar el tiempo de las personas involucradas en el proceso.
        .col-md-3.col-lg-2.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-22.svg', alt='')
      .row.justify-content-center(titulo="Vestuario")
        .col-md-8.col-12.mb-4.mb-md-0
          p El auditor debe adecuarse al entorno de auditoría, los procesos o departamentos a visitar, utilizando la vestimenta apropiada según la normativa y las prácticas de la empresa auditada.
        .col-md-3.col-lg-2.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-23.svg', alt='')
      .row.justify-content-center(titulo="Imagen del auditor")
        .col-md-8.col-12.mb-4.mb-md-0
          p Debe transmitir seguridad, control, orden y limpieza, para establecer una impresión profesional y generar confianza en el auditado durante el proceso de auditoría.
        .col-md-3.col-lg-2.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-24.svg', alt='')
      .row.justify-content-center(titulo="Comunicación verbal")
        .col-md-8.col-12.mb-4.mb-md-0
          p El auditor debe cuidar su tono de voz transmitiendo seguridad y tranquilidad, con el fin de evitar poner nervioso al auditado y fomentar una interacción efectiva durante la auditoría.
        .col-md-3.col-lg-2.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-25.svg', alt='')
      .row.justify-content-center(titulo="Comunicación no verbal")
        .col-md-8.col-12.mb-4.mb-md-0
          p El auditor debe cuidar en todo momento su expresión corporal, ya que esta puede influir significativamente en la percepción de los auditados y en la efectividad de la comunicación durante la auditoría.
        .col-md-3.col-lg-2.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-26.svg', alt='')

    p.mb-4(data-aos="fade-down") Los métodos y técnicas de auditoría son variables y dependen de factores como la organización, los procesos, la ubicación o los lugares de la auditoría, así como los objetivos y criterios establecidos.
    p.mb-4(data-aos="fade-down") En este sentido, es recomendable que el auditor inicie con preguntas abiertas y luego vaya cerrándolas para confirmar y verificar la información.
    p.mb-4(data-aos="fade-down") Cuando se seleccionan los tipos de preguntas para la auditoría, es importante conocer algunas metodologías que ayudarán al auditor a alcanzar los objetivos planificados.
    p.mb-5(data-aos="fade-down") Las preguntas pueden clasificarse según su finalidad funcional, como se muestra en la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Tipos de preguntas para realizar auditorías</i>
        .tabla-b.color-acento-contenido.mb-5
          table 
            thead.text-center(style="background-color:#BCF987")
              tr
                th Tipos de preguntas
                th Definición
            tbody
              tr
                th.p-3 Preguntas abiertas.
                td.p-3 Permiten conocer las generalidades de los procesos. 
              tr
                th.p-3 Preguntas cerradas.
                td.p-3 El auditor utiliza esta pregunta para obtener información concreta, realizar verificación o comprobación de los datos obtenidos, son preguntas que no dan opciones al auditado, solo debe responder “sí” o “no”.
              tr
                th.p-3 Preguntas hipotéticas.
                td.p-3 Se utilizan para comprobar la planificación de un proceso, una actividad o situación que no ha ocurrido pero que el sistema de gestión debe tener en cuenta.
              tr
                th.p-3 Preguntas de aclaración.
                td.p-3 Son preguntas realizadas por el auditor para aclarar la respuesta recibida con anterioridad.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Técnicas de redacción

    p.mb-4(data-aos="fade-down") La redacción es el proceso por medio del cual se compone un discurso escrito, definiéndose como un arte, pero sin embargo constituyéndose como una técnica. Es la medida que se usa para comprobar que un escrito tenga coherencia. Es el acto en el que se pone por escrito un grupo de ideas ordenadas de manera lógica y coherentemente, teniendo como objetivo la creación de un texto en el cual el mensaje se transmita con una intención definida. De acuerdo a lo mencionado, se pueden definir las siguientes técnicas de redacción:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-27.svg' alt='')
        h4.text-center Descripción
        p.mb-0 Es un discurso (oral o escrito) que detalla y explica las propiedades de un espacio, persona, cosa o situación.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-28.svg' alt='')
        h4.text-center Búsqueda de información
        p.mb-0 Es el relato de unos hechos reales o imaginarios que les suceden a unos personajes en un espacio.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-29.svg' alt='')
        h4.text-center Exposición
        p.mb-0 El acto de exponer de forma oral o redactada un asunto o tema para un auditorio.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-30.svg' alt='')
        h4.text-center Argumentación
        p.mb-0 Es una exposición de información cuya finalidad es enseñar, por medio de razonamientos lógicos, la validez de un criterio, una crítica o una visión, y paralelamente persuadir a los interlocutores o llamarlos a la acción.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-31.svg' alt='')
        h4.text-center Diálogo
        p.mb-0 Es la comunicación en la que ocurre un intercambio de información entre dos o más personas. Podría ser oral o escrito.
      .tarjeta.color-primario-b.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-32.svg' alt='')
        h4.text-center Resumen
        p.mb-0 Es un escrito que se usa para sintetizar las ideas más resaltantes de un texto  de manera concisa, estructurada y coherente.

    p.mb-4(data-aos="fade-down") La ortografía es una sección de la gramática que se encarga de la manera más adecuada de redactar los vocablos, cuyo primordial uso es la comunicación, y para lograr esta conexión con la realidad, se necesita que se elaboren los mensajes de manera idónea y comprensible.

    p.mb-4(data-aos="fade-down") Las técnicas de la ortografía son muchas, por lo cual una buena ortografía parte directamente de cada una de las personas en su deseo de mejorar y ser cada día más perfecto a la hora de escribir, por lo tanto, unas de las técnicas para tener en cuenta son:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-33.png')})`}"
      )
      .bloque-texto-g__texto_2.p-4
        ul.lista-ul.mb-0
          li.mb-1 ✔	Realizar un listado de palabras que generen dificultad al escribir.
          li.mb-1 ✔	Revisar y conocer las reglas para prefijos y sufijos.
          li.mb-1 ✔	Memorizar los conjuntos de palabras especiales.
          li.mb-1 ✔	Leer.
          li.mb-1 ✔	Fortalecer la memoria visual.
          li.mb-1 ✔	Practicar la redacción.
          li.mb-1 ✔	Conocer la utilización de signos de puntuación.
          li.mb-1 ✔	Conocer el significado de las palabras.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Revisión del proceso

    p.mb-4(data-aos="fade-down") Un proceso es una serie de ocupaciones que conducen a construir un fin definido. Un proceso se trata entonces, generalmente, de una sucesión de operaciones llevadas a cabo en orden específico y con un objetivo.
    p.mb-4(data-aos="fade-down") En las auditorías, existe un proceso en el cual la teoría y la práctica son ocupaciones administrativas de revisión de documentos y de labores ejecutadas dentro del sistema benéfico de la organización, para la verificación de cumplimiento de la normativa y los métodos internos en sus rutinas cotidianas. 
    p.mb-4(data-aos="fade-down") En este sentido, el auditor debería utilizar ciertas técnicas, como entrevistas con todos los jefes departamentales, observación directa de las ocupaciones y los procesos de ejecución y, finalmente, la revisión de todos los registros accesibles para asegurar el cumplimiento de los sistemas de calidad, legislación del gobierno y fiscal, así como de las reglas de estabilidad internas.
    p.mb-5(data-aos="fade-down") Como todo proceso auditor, este proceso consta de 6 etapas, las cuales son fundamentales para poder realizar el proceso de auditoría de manera correcta, esos puntos son:

    .tarjeta.color-primario-b.p-4.mb-5(data-aos="fade-down-left")
      SlyderB(:datos="datosSlyderB")
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Aplicación de métodos de auditoría

    p.mb-4(data-aos="fade-down") Para la realización de auditorías, se puede utilizar una variedad de métodos de auditoría. El método por utilizar dependerá del objetivo, alcance, criterios, duración, ubicación, entre otros factores. La norma ISO 19011 proporciona en la siguiente tabla 2, ejemplos de métodos de auditoría que se pueden usar, solos o en combinación, para alcanzar los objetivos:

    .row.justify-content-center.mb-4
      .col-12.col-xl-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Ejemplos de métodos de auditoría</i>
        .tabla-b.color-acento-contenido
          table 
            thead.text-center
              tr
                th(rowspan="2" style="background-color:#E8FDD5") Alcance de la participación entre el auditor y el auditado
                th(colspan="2" style="background-color:#BCF987") Ubicación del auditor
              tr(style="background-color: #EEE0FF")
                th En el sitio
                th Remota
            tbody
              tr
                th.p-3.text-center Interacción humana
                td.p-3 
                  ul.lista-ul
                    li ●	Realización de entrevistas.
                    li ●	Completar listas de verificación y cuestionarios con participación del auditado.
                    li ●	Realización de una revisión de documentos con participación del auditado.
                    li ●	Muestreo.             
                td.p-3 
                  p A través de comunicación interactiva significa:
                  ul.lista-ul
                    li ●	Realización de entrevistas.
                    li ●	Observar el trabajo realizado con guía remota.
                    li ●	Completando lista de verificación y cuestionarios.
                    li ●	Realización de revisión de documentos con participación de los propietarios.
              tr
                th.p-3.text-center Sin interacción humana
                td.p-3 
                  ul.lista-ul
                    li ●	Realización de revisión de documentos (por ejemplo, registros, análisis de datos).
                    li ●	Observar el trabajo realizado y llevando a cabo una visita #[em #[b in-situ]]. Complementando listas de verificación.
                td.p-3 
                  ul.lista-ul
                    li ●	Realizar revisión de documentos (por ejemplo, registros, análisis de datos). 
                    li ●	Observar el trabajo realizado a través de medios de vigilancia, teniendo en cuenta los requisitos sociales, estatutarios y normativos del análisis de datos.
              tr
                td.p-3(colspan="3")
                  p Las actividades de auditoría en el sitio se realizan en la ubicación del auditado.
                  p Las actividades de auditoría remota se realizan en cualquier lugar que no sea la ubicación del auditado, independientemente de la distancia. 
                  p Las actividades de auditoría interactiva implican la interacción entre el personal auditado y el equipo de auditoría.
                  p Las actividades de auditoría no interactivas no implican interacción humana con las personas que representan al auditado, pero sí implican la interacción con el equipo, las instalaciones y la documentación.

    p.mb-4(data-aos="fade-down") La información es el grupo de datos que configuran un mensaje que emite un emisor y que se pretende llegue al receptor para que pueda quedar reportado. Continuamente se realiza por medio de un canal que es el que uno de los dos interlocutores eligió.
    p.mb-4(data-aos="fade-down") Las técnicas de recolección de información son herramientas de la auditoría empresarial, en la que se usan procedimientos de recolección, para detectar de forma estricta y concreta las fallas en las zonas, en sistemas, sobre los cuales se practicarán las respectivas pruebas. A continuación, se presenta la recopilación de información en la auditoría.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-9(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Recopilación de información en una auditoría</i>
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.png', alt='En la figura 2 se muestran las etapas establecidas para la recopilación de información.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.png', alt='En la figura 2 se muestran las etapas establecidas para la recopilación de información.')
          figcaption.mt-2 Nota. SENA (2022).

    p.mb-4(data-aos="fade-down") Dentro de las auditorías, se pueden encontrar diversas técnicas de recolección de información, entre las cuales se incluyen:
    
    ul.lista-ul.mb-4.ms-md-4.ms-3(data-aos="fade-down")
      li ✔ #[b Técnicas de verificación ovular o visual:] estas técnicas involucran la observación directa, la comparación de documentos o la confrontación de información, así como la revisión selectiva.
      li ✔ #[b Técnicas de verificación oral o verbal:] en esta categoría se incluyen la indagación a través de preguntas, encuestas y cuestionarios, así como las entrevistas con el personal relevante.
      li ✔ #[b Técnicas de verificación documental:] esta técnica abarca la comprobación, la computación, el rastreo, la revisión analítica y el estudio general (exploración). Dentro de esta categoría se engloban las siguientes técnicas:
      
    .row.justify-content-center.mb-5
      .col-12.col-md-10
        .cajon.color-secundario(data-aos="fade-down-left")
          .p-4
            ul.lista-ul.ms-md-4.ms-3
              li ● #[b Técnicas de verificación física:] implican la revisión de documentos físicos, como facturas, recibos o registros en papel.
              li ● #[b Técnicas de verificación escrita:] incluyen la revisión de documentos escritos, como contratos, acuerdos o políticas de la organización.

    p.mb-4(data-aos="fade-down") El tipo de información que se maneja en un proceso de auditoría, debe tener características especiales para garantizar un proceso satisfactorio. Es importante que la información sea:

    ul.lista-ul.mb-4.ms-md-4.ms-3(data-aos="fade-down")
      li ✔ #[b Relevante:] la información debe ser pertinente para los objetivos de la auditoría y estar relacionada con los criterios establecidos.
      li ✔ #[b Suficiente:] debe existir la cantidad adecuada de información para respaldar las conclusiones y hallazgos de la auditoría.
      li ✔ #[b Confiable:] la información debe ser precisa y verificable, proveniente de fuentes fiables y procesos confiables.
      li ✔ #[b Oportuna:] debe estar disponible cuando se necesita para la auditoría y no debe haber demoras significativas.
      li ✔ #[b Clara y comprensible:] la información debe ser presentada de manera que sea fácilmente entendible por quienes la utilizan.
      li ✔ #[b Sensible a los riesgos:] debe incluir información sobre los riesgos significativos relacionados con los objetivos de la auditoría.
      li ✔ #[b Sensible a la importancia relativa:] debe priorizarse la información más relevante y significativa.
      li ✔ #[b Completa:] debe abordar todos los aspectos relevantes de los objetivos de la auditoría.
      li ✔ #[b No sesgada:] la información no debe estar influenciada por sesgos o intereses particulares.

    p.mb-4(data-aos="fade-down") Estos principios aseguran que la información utilizada en una auditoría sea sólida, confiable y útil para la toma de decisiones y la evaluación de procesos y sistemas. En resumen, se pueden definir los siguientes cuatro aspectos que se utilizan comúnmente y que abarcan lo que un auditor necesita para su proceso:

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-9(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Características de la información</i>
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-3a.png', alt='Figura 3. Características de la información  debe ser completa, correcta, consistente y actual.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-3b.png', alt='Figura 3. Características de la información  debe ser completa, correcta, consistente y actual.')

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Verificación del sistema

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-40.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Las listas de verificación son documentos que integran anotaciones claves para la ejecución de las ocupaciones de auditoría. Principalmente hechas como un formulario, cuestionario o planilla, estas listas son como una ayuda para que el auditor siga una sucesión estructurada de visualizaciones a lo largo de la ejecución de la auditoría. Si se emplean, dichas listas tienen que fundamentarse en un procedimiento conveniente de recolección de datos y el auditor tendrá que estar entrenado en su uso. Las listas de verificación tienen que contestar a la especificidad de cada auditoría. Éstas tienen que ser primordiales, objetivas y de simple uso, lectura y conocimiento, además de detectar datos y hechos.

    p.mb-4(data-aos="fade-down") La lista de verificación se ha diseñado para supervisar la ejecución de actividades repetitivas en las organizaciones, como revisar el cumplimiento de una lista de requisitos. Esto permite recopilar información y datos de manera organizada. Se utiliza para verificar actividades que están estandarizadas, como se presenta a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="fade-down-left")
      .row.justify-content-center(titulo="¿Para qué sirven las listas de verificación?")
        .col-md-11.col-12.mb-4.mb-md-0
          ul.lista-ul.mb-4.ms-md-4.ms-2(data-aos="fade-down")
            li ✔ Revisar que todas las actividades se realicen de forma organizada y en el orden establecido.
            li ✔ Inspeccionar la propiedad.
            li ✔ Verificar productos y/o procesos.
            li ✔ Analizar los problemas identificados.
            li ✔ Examinar las causas de los defectos.
            li ✔ Verificar las operaciones en la organización.
            li ✔ Recolectar datos para futuros análisis. 
      .row.justify-content-center(titulo="¿Qué necesita para crear una lista de verificación?")
        .col-md-11.col-12.mb-4.mb-md-0
          ul.lista-ul.mb-4.ms-md-4.ms-2(data-aos="fade-down")
            li ✔ Deben estar diseñadas de acuerdo con el tipo de auditoria implementado en la organización para verificar y recopilar la información o datos.
            li ✔ Deben ser efectivas estableciendo cuáles son los criterios que se deben verificar, si es de cumplimiento o no conformidad y su frecuencia de seguimiento o verificación.
            li ✔ Tener un mecanismo de observación que proporcione información adicional.
            li ✔ Deben informar sobre el estado de las operaciones de la organización y evaluar los procesos sin necesidad de estadísticas o gráficos más complejos.
            li ✔ Deben ser simples y fáciles de leer y comprender.
      .row.justify-content-center(titulo="¿Cuáles son los objetivos de las listas de verificación?")
        .col-md-11.col-12.mb-4.mb-md-0
          ul.lista-ul.mb-4.ms-md-4.ms-2(data-aos="fade-down")
            li ✔ Promover en la organización la auditoría.
            li ✔ Actuar como proyecto de muestreo y administrador del tiempo.
            li ✔ Dar pruebas sobre las notas recopiladas para el proceso de auditoría de campo.
            li ✔ Facilitar la continuación del proceso de auditoría.
            li ✔ Proporcionar una base de información para planear futuras auditorías.
      .row.justify-content-center(titulo="¿Cuáles son los posibles aspectos a verificar?")
        .col-md-11.col-12.mb-4.mb-md-0
          ul.lista-ul.mb-4.ms-md-4.ms-2(data-aos="fade-down")
            li ✔ Verificar si se han seguido los procedimientos.
            li ✔ Revisar si los productos cumplen con las especificaciones.
            li ✔ Determinar si las medidas dimensionales, como color, peso, rugosidad, etc., se encuentran dentro de las tolerancias.
            li ✔ Comprobar si ha cumplido los ensayos de resistencia, impermeabilidad, etc.
            li ✔ Examinar si se han llenado los registros.
            li ✔ Chequear si ha existido alguna incidencia.
            li ✔ Verificar si los equipos se encuentran en correcto estado de mantenimiento.

    p.mb-4(data-aos="fade-down") Después de comprender qué es una lista de verificación y su importancia en los procesos de auditoría, y tras revisar los objetivos y los posibles aspectos que deben verificarse, examinaremos un ejemplo de una lista de verificación diseñada para auditar la norma ISO 9001:2015:

    .row.justify-content-center.mb-5
      .col-12.col-xl-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Ejemplo de lista de verificación</i>
        .tabla-b.color-acento-contenido.mb-5
          table 
            thead.text-center(style="background-color:#BCF987")
              tr
                th.text-bold(colspan="3") Lista de verificación para el proceso de auditoría
            tbody
              tr
                th.p-3.text-center Criterios de auditoría
                th.p-3.text-center Notas del auditor
                th.p-3
                  p.mb-0.text-bold.text-center Hallazgos
                  p.mb-0.text-bold C: conformidad
                  p.mb-0.text-bold NC: no conformidad
                  p.mb-0.text-bold O: observación
              tr 
                td.p-3 En este espacio se diligencian las políticas o procedimientos que se van a evaluar.
                td.p-3 En este espacio se diligencian todas las cuestiones internas y externas, preguntas, muestras u otra información que le sirva al auditor como ayuda para la búsqueda de evidencias.
                td.p-3 En este espacio se diligencian los diferentes hallazgos encontrados, especificando el numeral de la norma auditada y clasificándolos en conformidad, no conformidad y observaciones.
              tr(style="background-color:#BCF987")
                td.p-3.text-bold Fecha:
                td.p-3.text-bold Nombre del auditor:
                td.p-3.text-bold Página:


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Preparar el mensaje',
        texto:
          'Es necesario tener muy claro lo que se piensa decir, trasmitir e influir por medio de lo que estás hablando por eso tener un buen mensaje estructurado permite la fluidez y la comunicación clara y precisa entre el emisor y el receptor.',
        imagen: require('@/assets/curso/temas/tema1/tema1-2.png'),
      },
      {
        titulo: 'Mirar y practicar',
        texto:
          'En la mayoría de los casos todos tenemos un factor en contra y nos juega una mala pasada a la hora de comunicarnos, haciendo que tengamos nervios y nos enredemos a la hora de dar el mensaje, es por eso que es muy importante detectar nuestros defectos y poder ir mejorando poco a poco, de este modo, poder tener una buena oratoria a la hora de expresarse ante los demás.',
        imagen: require('@/assets/curso/temas/tema1/tema1-3.png'),
      },
      {
        titulo: 'Ser preciso y claro con el mensaje',
        texto:
          'Es  necesario tener un mensaje preciso y claro sobre la idea que se quiere decir, sin alargar tanto el mensaje con solo palabras de rellenos que no conducen al mensaje directo y hace que el receptor se incomode o moleste.',
        imagen: require('@/assets/curso/temas/tema1/tema1-4.png'),
      },
      {
        titulo: 'Tener confianza',
        texto:
          'La confianza es algo muy importante a la hora de expresarnos, si no confiamos en nosotros mismos no podremos ser  fluidos en la comunicación, ya que seremos muy tímidos a la hora de  expresarnos.',
        imagen: require('@/assets/curso/temas/tema1/tema1-5.png'),
      },
      {
        titulo: 'Escuchar al receptor',
        texto:
          'El saber escuchar es algo muy importante a la hora de comunicarnos, ya que, si la persona no es capaz de respetar el espacio del emisor a la hora de comunicarse o dar el mensaje, posiblemente nunca vaya a entender nada y ocurran desacuerdos por falta de compresión.',
        imagen: require('@/assets/curso/temas/tema1/tema1-6.png'),
      },
      {
        titulo: 'Dominar gestos',
        texto:
          'Muchas veces no nos damos cuenta de los gestos que realizamos a la hora de hablar, por lo cual estos gestos son mal vistos por el receptor o los receptores, es por eso que debemos tener un control de nuestros propios gestos que inconscientemente hacemos.',
        imagen: require('@/assets/curso/temas/tema1/tema1-7.png'),
      },
    ],
    datosSlyderB: [
      {
        titulo: 'Reunión inicial',
        texto:
          'Es un paso forzoso y, más allá de aquello, sustancial para una auditoría. En esta junta deberían estar presentes los representantes o directores de la organización auditada, en el instante que sea más apropiado para cada una de las piezas, así como los ayudantes de la compañía que permanecen al mando de los procesos auditables. El valor de eso radica en el hecho, de brindarle a las piezas relacionadas en el proceso una guía inicial empero breve de las ocupaciones siguientes. Para evadir la mayor parte de los malentendidos o conflictos que logren surgir en esta actividad.',
        imagen: require('@/assets/curso/temas/tema1/tema1-34.png'),
      },
      {
        titulo: 'Abrir los canales de comunicación',
        texto:
          'El segundo paso es implantar claridad en el hecho de que el auditado o auditados tienen la posibilidad de manifestar en todo instante sus preocupaciones y dudas al equipo responsable para borrar cada una de las preguntas o confusiones del proceso. Asimismo, los auditores tienen que comunicarle al equipo de la organización o a los relacionados en la junta inicial de los progresos de la actividad y tenerlos al tanto de los adelantos y descubrimientos a fin de brindar transparencia en todo instante.',
        imagen: require('@/assets/curso/temas/tema1/tema1-35.png'),
      },
      {
        titulo: 'Establecer las responsabilidades del equipo auditor',
        texto:
          'Así sea que una sola persona o un equipo de auditores, es importante establecer el papel de cada uno a lo largo del proceso de auditoría para facilitar todo su desarrollo. En esta actividad, hay observadores que su labor se resume en el registro visual de las ocupaciones y procesos en la productividad rutinaria de la compañía y decidir probables malas prácticas o incumplimientos de la normativa. Son profesionales en que intervienen en las ocupaciones cotidianas de la organización y ajustan las prácticas para asegurar la total legalidad y calidad de los procesos.',
        imagen: require('@/assets/curso/temas/tema1/tema1-36.png'),
      },
      {
        titulo: 'Recopilación y verificación de la información',
        texto:
          'Para los estándares de todo el mundo, solo la información verificable es válida como prueba en un proceso de auditoría. En este sentido, se necesita registrar cada descubrimiento a modo de muestra y establecer que cumpla con los estándares para ser guardada como prueba. Ciertos de los procedimientos más clásicos son las entrevistas y la observación de las labores cotidianas, así como de la revisión de los documentos de administración interna.',
        imagen: require('@/assets/curso/temas/tema1/tema1-37.png'),
      },
      {
        titulo: 'Generación de incumplimientos',
        texto:
          'El siguiente paso es decidir qué proceso o archivo no cumple con las reglas, estándares o la legislación presente. Asimismo, además tienen la posibilidad de ser considerados procesos fuertes o positivos en este periodo, previa a la generación de las conclusiones.',
        imagen: require('@/assets/curso/temas/tema1/tema1-38.png'),
      },
      {
        titulo: 'Conclusiones de la auditoría',
        texto:
          'Nuevamente se debería formar una junta con los guías y observadores del proceso de auditoría para compartir las conclusiones de esta. Aquí, se presentan los hallazgos y la información importante a lo largo de la observación, revisión y verificación. Esto a fin de debatir y concertar las conclusiones en un archivo que va a ser transmitido a las piezas relacionadas o auditados que forma parte del proceso de preparación y repartición que sirve como la última fase.',
        imagen: require('@/assets/curso/temas/tema1/tema1-39.png'),
      },
    ],
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
