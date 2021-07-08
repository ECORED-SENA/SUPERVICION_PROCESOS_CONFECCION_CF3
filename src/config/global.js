export default {
  global: {
    componenteFormativo: 'Patronaje de prendas de vestir',
    descripcionCurso:
      'Entender el patronaje dentro de sus diferentes líneas permite guiar los procesos de producción en planta, por ello, se abordan los diferentes tipos de patronaje, así como el proceso de escalado, haciendo hincapié en la estructura corporal y las diferentes técnicas de toma de medidas antropométricas comprendiendo la figura humana, vista desde los patrones y moldes que conforman una prenda.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Patronaje de prendas de vestir',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de patronaje y escalado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estructura corporal y cuadro de tallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis y clasificación de las medidas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Análisis de medidas y cuadros de tallas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Introducción al escalado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de escalado',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Análisis de cuadros de tallas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Patronaje femenino',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Trazo de falda',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Trazo de base superior femenina',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'El pantalón femenino y sus variantes',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Mangas',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Patronaje masculino',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Patrón base de camisa',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Patrones básicos masculinos',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Pantalón base',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Escalado manual de prendas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Alarcón, J. (2012). Patronaje industrial femenino. Lima: Método Alarcón.',
    },
    {
      referencia:
        'Armstrong, J.  (2009). Patternmaking for fashion design. 5ta edición. Pearson: Nueva Jersey',
    },
    {
      referencia:
        'Blázquez, I.  (2009). Patronaje industrial y escalado. Madrid: Isa – Escuela de diseño y moda.',
    },
    {
      referencia: 'Chunman, D. (2011). Patronaje. Barcelona: Blume.',
    },
    {
      referencia:
        'Cole, J.  (2010). Professional sewing techniques for designers. 4ta Edición. Nueva York: Fairchild publications',
    },
    {
      referencia:
        'Domingo, E. (2012). El gran libro de la costura. 3ra edición. Madrid: El Drac S. L.',
    },
    {
      referencia:
        'Domingo, J.  (2012). Manual completo de costura. 5ta edición. Madrid: El Drac S. L.',
    },
    {
      referencia:
        'Gilewska, T.  (2012). Patronaje: Las bases. Madrid: El Drac S. L.',
    },
    {
      referencia:
        'Gómez, G.  (2012). El lenguaje de los patrones en la moda. Buenos Aires: Nobuko',
    },
    {
      referencia:
        'Gutiérrez Rengifo, Lucy Alejandra, Moncayo Velazco, Adriana Ximena Instructora, Tanaka, Kenji Instructora, Kimura, Funiyo Experta, and Moreno Brand, Diana Coordinadora. Manual de Patronaje Básico e Interpretación de Diseños. Bogotá: SENA, Japan Inernational Cooperation Agency "jica", 2011. Print.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000025496&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L&isFrbr=true',
    },
    {
      referencia:
        'Hermenegildo, Z; Poratto, M.  (2008). Corte y Confección. 3ra Edición. Buenos Aires: Atlántida S. A.',
    },
    {
      referencia:
        'Hollahan, L.  (2010). Patrones de costura. Madrid: El Drac S. L.',
    },
    {
      referencia: 'Fashion Snoops, Sistema de Bibliotecas SENA:',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.fashionsnoops.com/Default.aspx',
    },
    {
      referencia:
        'Misrahi, A.  (2009). El gran libro de la costura. Madrid: El Drac S. L.',
    },
    {
      referencia:
        'Newman, A. y Shariff, Z. (2012). Moda A-Z: Diccionario Ilustrado. Barcelona: Blume.',
    },
    {
      referencia:
        'Rossen, A. (2004). Pattermaking a reference for fashion design. Nueva Jersey: Pearson.',
    },
    {
      referencia:
        'Origen del Patronaje y Patrones - Evolución | CurioSfera-Historia. (2021).',
      link:
        'https://curiosfera-historia.com/historia-del-patronaje-y-patrones-de-papel/',
    },
    {
      referencia:
        'Patronaje básico: sus inicios / Basic patterns: the beginning | mil dedales. (2015).',
      link:
        'http://mildedales.com/?p=453#:~:text=Si%20ahora%20buscamos%20su%20origen,persas%20(siglo%20V%20a.C.).&text=Ser%C3%A1%20durante%20la%20Edad%20Media,incuestionable%20la%20utilizaci%C3%B3n%20de%20patrones',
    },
    {
      referencia:
        'SENA. (2021). Manual de patronaje básico de interpretación de diseños. Repositorios SENA.',
      link: 'https://repositorio.sena.edu.co/',
    },
    {
      referencia:
        'SENA.  (1996).  Patronaje y escalado línea ropa interior y deportiva.',
      link: 'https://repositorio.sena.edu.co/',
    },
  ],
  glosario: [
    {
      termino: 'Bidimensional',
      significado:
        'Que posee dos dimensiones en modulo geométrico de proyección plana, cuenta con ancho y largo pero no con profundidad.',
    },
    {
      termino: 'Escalado',
      significado:
        'Método aplicado para la ampliación o reducción de tallas en moldería de prendas de vestir a partir de técnicas numéricas basándose en cuadros de tallas.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Sistema metódico enfocado en la creación de moldes para prendas de vestir sobre papel o en software en 2D.',
    },
    {
      termino: 'Patronista',
      significado:
        'Persona cuyo oficio es el de elaborar patronaje y moldería de prendas de vestir.',
    },
    {
      termino: 'Planos',
      significado:
        'Desarrollados en patronaje que plasman la construcción de moldería de prendas de vestir.',
    },
    {
      termino: 'Tallas',
      significado:
        'Término empleado para la asignación de un número o letra que reúne medidas antropométricas de la figura humana.',
    },
    {
      termino: 'Tridimensional',
      significado:
        'Qué posee tres dimensiones, cuenta con anchura, altura y profundidad. ',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Ledy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria para la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia ',
        cargo: 'Revisor pedagógico y metodológico',
        centro:
          'Centro Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
