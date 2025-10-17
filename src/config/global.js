export default {
  global: {
    componenteFormativo: 'Configuración de estilos en Microsoft Word',
    descripcionCurso:
      'Por medio de este componente formativo, aprenderás a utilizar funcionalidades esenciales como formatos, estilos, secciones y encabezados para transformar textos simples en informes, manuales y propuestas de alta calidad. Al finalizar, serás capaz de gestionar la estructura y apariencia de cualquier documento, asegurando una presentación clara, coherente y alineada con los requerimientos institucionales o académicos según el contexto de aplicación',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Procesadores de texto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de procesadores de texto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Licenciamiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Formato de documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fuente',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Alineación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sangría',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Interlineado y espaciado',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estilos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto e importancia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de estilos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estilos para títulos, párrafos y caracteres',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Secciones y saltos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y tipos de saltos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de saltos de sección',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estructura del documento con secciones',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Encabezados y pies de página',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto e inserción',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Numeración de página',
            hash: 't_5_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: '1. Procesadores de texto',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022, 26 de marzo). <em>Herramientas ofimáticas</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hs7UG7RO3_M',
    },
    {
      tema: '1. Procesadores de texto',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023, 23 de marzo). <em>Los sistemas y los paquetes ofimáticos</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7hoOWcOyH-s',
    },
    {
      tema: '1. Procesadores de texto',
      referencia:
        'Fisher, E., Mandich, L., Kegg, D. & Guilmette, A. (2017). <em>Microsoft office 365 administration inside out.</em> Microsoft Press. ',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=I_Y-DwAAQBAJ&oi=fnd&pg=PP20&dq=microsoft+office+365+&ots=gu5TZRAo0Y&sig=U1yKbwkyIRYPqitjc-nFpx9OUzs&redir_esc=y#v=onepage&q=microsoft%20office%20365&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Alineación',
      significado:
        'disposición del texto de un párrafo con respecto a los márgenes izquierdo y derecho. Puede ser a la izquierda, a la derecha, centrada o justificada.',
    },
    {
      termino: 'Encabezado',
      significado:
        'área ubicada en el margen superior de una página. El contenido insertado aquí, como el título del documento o el logotipo, se repite en todas las páginas de una sección.',
    },
    {
      termino: 'Estilo',
      significado:
        'conjunto de características de formato (fuente, tamaño, color, alineación, espaciado, etc.) guardado con un nombre. Permite aplicar un formato consistente a diferentes partes de un documento con un solo clic.',
    },
    {
      termino: 'Fuente',
      significado:
        'diseño tipográfico de un conjunto de letras, números y símbolos. También conocida como "tipo de letra" (ej. Arial, Calibri, Times New Roman).',
    },
    {
      termino: 'Interlineado',
      significado:
        'espacio vertical que existe entre las líneas de texto dentro de un mismo párrafo.',
    },
    {
      termino: 'Justificar',
      significado:
        'tipo de alineación que ajusta el espaciado entre palabras para que el texto se alinee perfectamente con los márgenes izquierdo y derecho, creando bordes de párrafo rectos.',
    },
    {
      termino: 'Planilla (.docx)',
      significado:
        'archivo maestro de Microsoft Word que almacena estilos, formatos, encabezados y estructura predefinida. Se utiliza como base para crear nuevos documentos con una apariencia y organización consistentes.',
    },
    {
      termino: 'Salto de sección',
      significado:
        'marcador invisible que divide un documento en partes independientes (secciones), permitiendo que cada una tenga su propio formato de página, como márgenes, orientación o numeración distintos.',
    },
    {
      termino: 'Sangría',
      significado:
        'espacio horizontal que se deja entre el margen de la página y el comienzo del texto de un párrafo.',
    },
    {
      termino: 'Sección',
      significado:
        'una parte del documento, delimitada por saltos de sección, que puede ser formateada de manera independiente del resto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, J. F. & Gisbert, M. (2015). Grado de alfabetización informacional del profesorado de Secundaria en España: Creencias y autopercepciones. <em>Comunicar: Revista Científica Iberoamericana de Comunicación y Educación= Scientific Journal of Media Education: 45, 2, 2015,</em> 187-202.',
    },
    {
      referencia:
        'American Psychological Association. (2020). <em>Publication manual of the American Psychological Association</em> (7th ed.).',
      link: 'https://psycnet.apa.org/record/2019-59141-000',
    },
    {
      referencia:
        'Barrera Rea, V. F. & Guapi Mullo, A. (2018). La importancia del uso de las plataformas virtuales en la educación superior. <em>Revista Atlante: Cuadernos de Educación y Desarrollo.</em>',
      link:
        'https://www.eumed.net/rev/atlante/2018/07/plataformas-virtuales-educacion.html',
    },
    {
      referencia:
        'Cassany, D. (2019). <em>Laboratorio lector: para entender la lectura. Anagrama.</em>',
    },
    {
      referencia:
        'Frutiger, A. (2012). <em>El libro de la tipografía.</em> Editorial GG.',
    },
    {
      referencia:
        'García-Peñalvo, F. J. (2017). Ecosistemas tecnológicos universitarios. <em>UnIVERSITIC, 28,</em> 164-170.',
    },
    {
      referencia:
        'De Sousa, J. M. (2001). <em>Manual de estilo de la lengua española</em> (Vol. 38). Ediciones Trea.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ligia del Rosario Arregocés Osorio',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
