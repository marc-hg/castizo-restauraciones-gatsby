export interface SuccessCase {
  title: string;
  initialState: string;
  clientNeeds: string;
  techniques: string[];
  materials: string[];
  results: string;
  beforeImage?: string;
  afterImage?: string;
}

export const successCases: SuccessCase[] = [
  {
    title: 'Restauración de Consola Tallada',
    initialState: 'Estructura debilitada con ensambles sueltos, pérdida de elementos decorativos y acabado deteriorado',
    clientNeeds: 'Recuperar la estabilidad estructural y restaurar la belleza original de los elementos tallados',
    beforeImage: '/images/trabajos-realizados/mesa/antes2.jpg',
    afterImage: '/images/trabajos-realizados/mesa/despues2.jpg',
    techniques: [
      'Consolidación de ensambles',
      'Restauración de tallas',
      'Acabado tradicional con goma laca',
    ],
    materials: [
      'Madera de caoba para reintegración de piezas',
      'Cola orgánica tradicional',
      'Goma laca para acabado',
    ],
    results: 'Recuperación completa de la estructura y la decoración tallada, devolviendo a la consola su belleza original con un acabado brillante que resalta las tallas.',
  },
  {
    title: 'Lámpara de Cristal Colgante',
    initialState: 'Lámpara de latón dañada por el fuego, con cristales sucios y faltantes, y cableado eléctrico quemado',
    clientNeeds: 'Restauración de la estructura de latón, limpieza y reposición de cristales, y actualización del sistema eléctrico',
    beforeImage: '/images/trabajos-realizados/lampara/antes.jpg',
    afterImage: '/images/trabajos-realizados/lampara/despues.jpg',
    techniques: [
      'Desmontaje completo de componentes',
      'Limpieza y restauración de cristales',
      'Restauración y pulido del latón',
      'Renovación del sistema eléctrico',
    ],
    materials: [
      'Productos para restauración de latón',
      'Cristales facetados de reposición',
      'Sistema eléctrico certificado',
      'Productos específicos para limpieza de cristal',
    ],
    results: 'Transformación completa de la lámpara recuperando el brillo del latón y la transparencia de los cristales, combinando la estética original con un sistema eléctrico moderno y seguro.',
  },
  {
    title: 'Restauración de Espejo Dorado',
    initialState: 'Marco con estructura comprometida, roturas en las esquinas y pérdida extensa del dorado original',
    clientNeeds: 'Reconstrucción estructural del marco y recuperación del dorado manteniendo la riqueza decorativa original',
    beforeImage: '/images/trabajos-realizados/espejo-meiras/antes2.jpg',
    afterImage: '/images/trabajos-realizados/espejo-meiras/despues4.jpg',
    techniques: [
      'Reconstrucción del bastidor interno',
      'Restauración de tallas decorativas',
      'Dorado al agua con bruñido',
      'Instalación de espejo restaurado',
    ],
    materials: [
      'Madera de pino para bastidor',
      'Pan de oro de 23.75 quilates',
      'Bol rojo tradicional',
    ],
    results: 'Restauración completa del espejo recuperando toda la ornamentación dorada y proporcionando una estructura sólida que garantiza su conservación a largo plazo.',
  },
  {
    title: 'Querubines Barrocos',
    initialState: 'Pareja de esculturas de querubines con pérdida severa del dorado original, policromía deteriorada y suciedad acumulada',
    clientNeeds: 'Recuperación de la ornamentación dorada y conservación de la policromía original de los rostros',
    beforeImage: '/images/trabajos-realizados/angeles/antes2.jpg',
    afterImage: '/images/trabajos-realizados/angeles/despues2.jpg',
    techniques: [
      'Limpieza de superficies policromadas',
      'Consolidación de la base de madera',
      'Aplicación de dorado al agua',
      'Conservación de policromía original de los rostros',
    ],
    materials: [
      'Pan de oro de alta calidad',
      'Bol rojo tradicional',
      'Base de preparación tradicional',
      'Productos específicos para limpieza de policromía',
    ],
    results: 'Espectacular transformación recuperando el brillo dorado de las tallas decorativas mientras se preserva la expresividad y carácter original de los rostros policromados.',
  },
  {
    title: 'Reloj de Pie Inglés',
    initialState: 'Caja severamente dañada con estructura interna comprometida, pérdida de elementos decorativos y acabado degradado',
    clientNeeds: 'Reconstrucción estructural completa de la caja y restauración del acabado original respetando su estilo',
    beforeImage: '/images/trabajos-realizados/reloj/antes2.jpg',
    afterImage: '/images/trabajos-realizados/reloj/despues2.jpg',
    techniques: [
      'Reconstrucción de estructura interna',
      'Restauración de la caja de madera',
      'Reproducción de elementos faltantes',
      'Acabado tradicional con tinte y barniz',
    ],
    materials: [
      'Maderas nobles seleccionadas',
      'Cola orgánica para ensambles',
      'Tintes tradicionales',
      'Barniz de acabado satinado',
    ],
    results: 'Completa recuperación estructural y estética del reloj, devolviendo su dignidad y elegancia original con un acabado cálido que realza la belleza de la madera.',
  },
  {
    title: 'Creación de Cubreradiador a Medida',
    initialState: 'Necesidad de ocultar un radiador moderno en un entorno decorativo tradicional',
    clientNeeds: 'Diseñar y fabricar un mueble a medida para cubrir el radiador que combine funcionalidad con estética tradicional',
    beforeImage: '/images/trabajos-realizados/radiador/antes.jpeg',
    afterImage: '/images/trabajos-realizados/radiador/despues.jpeg',
    techniques: [
      'Diseño y planificación a medida',
      'Construcción de estructura en madera maciza',
      'Elaboración de rejilla de cañizo tradicional',
      'Acabado a tono con la decoración existente',
    ],
    materials: [
      'Madera de roble seleccionada',
      'Cañizo natural para la rejilla',
      'Cola de carpintero para ensambles',
      'Tintes y barnices para acabado',
    ],
    results: 'Mueble funcional que oculta perfectamente el radiador mientras aporta elegancia al espacio, permitiendo la circulación del calor y complementando la decoración tradicional de la estancia.',
  },
  {
    title: 'Marco Dorado con Crucifijo',
    initialState: 'Marco con dorado deteriorado, estructura debilitada y pérdida significativa de ornamentación',
    clientNeeds: 'Restauración completa del marco dorado y conservación del crucifijo y fondo ornamental',
    beforeImage: '/images/trabajos-realizados/crucifijo/antes.jpeg',
    afterImage: '/images/trabajos-realizados/crucifijo/despues.jpeg',
    techniques: [
      'Consolidación estructural del marco',
      'Restauración de ornamentos tallados',
      'Dorado al agua con bruñido',
      'Conservación de elementos decorativos originales',
    ],
    materials: [
      'Pan de oro de 23.75 quilates',
      'Bol rojo tradicional',
      'Colas orgánicas para restauración',
      'Masillas de reparación especiales para tallas',
    ],
    results: 'Espléndida recuperación del marco dorado con todos sus detalles decorativos, realzando la belleza del crucifijo y la tapicería ornamental del fondo para crear un conjunto armonioso de alto valor artístico y religioso.',
  },
]; 