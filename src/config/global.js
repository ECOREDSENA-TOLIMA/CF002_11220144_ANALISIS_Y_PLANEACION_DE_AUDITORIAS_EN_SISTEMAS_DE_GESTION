export default {
  global: {
    componenteFormativo:
      'Técnicas de comunicación, evaluación, seguridad y confidencialidad',
    descripcionCurso:
      'Este componente se centra en identificar las técnicas de comunicación, evaluación de la seguridad y confidencialidad de la información según la norma ISO 27000, requisitos y aplicación. Así mismo como implementar la verificación del sistema de auditoría.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Revisión del proceso',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Verificación del sistema',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguridad y confidencialidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'ISO 27000',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Requisitos aplicables según la norma',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_11220144.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de comunicación',
      referencia:
        'Herrera, P. (2021). Técnicas de comunicación Asertiva ¡Así logras llegar a un acuerdo! [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wUVWHRYJkNo',
    },
    {
      tema: 'Revisión de proceso a técnicas de aplicación',
      referencia:
        'El administrador 3.0. (2021). Técnicas de auditoría administrativa / aprender técnicas de auditoría administrativa 2021. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KQHFFKfqmAY',
    },
    {
      tema: 'Verificación del sistema',
      referencia:
        'Mesa, A. (2020). Listas de Verificación en auditorías. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=G7o_yIC2dL4',
    },
    {
      tema: 'Seguridad y confidencialidad de la información',
      referencia:
        'nqa.com. (2013). ISO 27001 Guía de implantación para la seguridad de la información. ',
      tipo: 'Norma',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      tema: 'ISO 27000',
      referencia:
        'Procem Consultores. (2018). ISO 27001- Seguridad de la Información. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BNdPQU32p2Y',
    },
  ],
  glosario: [
    {
      termino: 'Amenazas',
      significado:
        'son aquellas cosas que pueden suceder que dañan los activos de la información, tales como desastres naturales, incendios o ataques de virus, espionaje, etc.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'la cualidad de la información para no ser divulgada a personas o sistemas no autorizados.',
    },
    {
      termino: 'Diálogo',
      significado:
        'es la comunicación en la que ocurre un intercambio de información entre dos o más personas.',
    },
    {
      termino: 'Emisor',
      significado: 'la persona (o personas) que emite un mensaje.',
    },
    {
      termino: 'Receptor',
      significado: 'la persona (o personas) que recibe el mensaje.',
    },
    {
      termino: 'Redacción',
      significado:
        'es el proceso por medio del cual se compone un discurso escrito siendo la redacción un arte, pero sin embargo además siendo una técnica.',
    },
    {
      termino: 'SGSI',
      significado:
        '<span>Sistema de Gestión de la Seguridad de la Información.</span>',
    },
  ],
  referencias: [
    {
      referencia: 'Arenas Ramírez, A. (2016). Información difusa. ',
      link: 'https://www.gestiopolis.com/informacion-difusa/',
    },
    {
      referencia: 'Coelho, F. (2017). Comunicación oral. ',
      link: 'https://www.significados.com/comunicacion-oral/',
    },
    {
      referencia:
        'EALDE, (2020). Elaborar la lista de verificación en auditorías internas ISO 9001:2015. ',
      link: 'https://www.ealde.es/lista-verificacion-auditoria-iso-9001/',
    },
    {
      referencia:
        'Firma-e (2014). Pilares de la Seguridad de la Información: confidencialidad, integridad y disponibilidad. ',
      link:
        'https://www.firma-e.com/blog/pilares-de-la-seguridad-de-la-informacion-confidencialidad-integridad-y-disponibilidad/',
    },
    {
      referencia:
        'Huerta Zamora, A. (2016). El arte del manejo de la información y la información difusa. ',
      link:
        'https://www.gestiopolis.com/arte-del-manejo-la-informacion-la-informacion-difusa/',
    },
    {
      referencia:
        'Intedya, (2015). ISO 27000 y el conjunto de estándares de Seguridad de la Información. ',
      link:
        'https://www.intedya.com/internacional/757/noticia-iso-27000-y-el-conjuntode-estandares-de-seguridad-de-la-informacion.html',
    },
    {
      referencia:
        'Isotools, (s.f.). ISO 27000. Normas para la Seguridad de la Información. ',
      link: 'https://www.isotools.cl/iso27000/',
    },
    {
      referencia: 'Morales, A. (2019). Qué es la comunicación. ',
      link: 'https://www.todamateria.com/que-es-la-comunicacion/',
    },
    {
      referencia: 'Normas ISO. (s.f). ISO 27001 Seguridad de la información. ',
      link: 'https://www.normas-iso.com/iso-27001/',
    },
    {
      referencia: 'Oracle. (2011). Gestión de registros de auditoría. ',
      link:
        'https://docs.oracle.com/cd/E24842_01/html/E23286/audittask-91.html',
    },
    {
      referencia:
        'Oracle. (s.f.). Guía de administración del sistema: servicios de seguridad. ',
      link:
        'https://docs.oracle.com/cd/E24842_01/html/E23286/auditref-20.html#:~:text=Un%20registro%20de%20auditor%C3%ADa%20es,token%20opcional%20trailer%2C%20lo%20concluye.',
    },
    {
      referencia:
        'Rosas, Sánchez, L. (2012). El uso de información difusa en la toma de decisiones empresariales. ',
      link:
        'https://www.gestiopolis.com/el-uso-de-informacion-difusa-en-la-toma-de-decisiones-empresariales/',
    },
    {
      referencia:
        'Vaca López, Andrea, (2017). Auditar la comunicación, un paso adelante en la evaluación de intangibles. ',
      link:
        'https://www.ugc.edu.co/sede/armenia/files/editorial/auditar_la_comunicacion_un_paso_adelante_en_la_evaluacion_de_intangibles.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
