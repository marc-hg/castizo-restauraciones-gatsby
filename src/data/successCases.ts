export interface SuccessCase {
  title: string;
  initialState: string;
  clientNeeds: string;
  techniques: string[];
  materials: string[];
  timeInvested: string;
  challenges: string[];
  results: string;
  clientQuote?: string;
  beforeImage?: string;
  afterImage?: string;
}

export const successCases: SuccessCase[] = [
  {
    title: 'Restauración de Ángeles',
    initialState: 'Dorado deteriorado y pérdida de detalles',
    clientNeeds: 'Restauración completa del dorado y recuperación de detalles',
    beforeImage: '/images/trabajos-realizados/angeles/antes.JPG',
    afterImage: '/images/trabajos-realizados/angeles/despues.jpg',
    techniques: [
      'Dorado al agua',
      'Limpieza de superficie',
      'Consolidación de soporte',
      'Reintegración de detalles',
    ],
    materials: [
      'Pan de oro de 23.75 quilates',
      'Bol rojo',
      'Gesso',
      'Cola de conejo',
    ],
    timeInvested: '60 horas',
    challenges: [
      'Recuperación de detalles finos',
      'Matching del tono dorado original',
      'Conservación de la pátina',
    ],
    results: 'Recuperación completa del dorado original con preservación de la pátina histórica.',
    clientQuote: 'Los ángeles han recuperado su esplendor original. El trabajo es excepcional.',
  },
  {
    title: 'Restauración de Reloj',
    initialState: 'Mecanismo dañado y dorado deteriorado',
    clientNeeds: 'Restauración funcional y estética completa',
    beforeImage: '/images/trabajos-realizados/reloj/antes.JPG',
    afterImage: '/images/trabajos-realizados/reloj/despues.jpg',
    techniques: [
      'Restauración de mecanismo',
      'Dorado al agua',
      'Limpieza de bronces',
      'Ajuste de engranajes',
    ],
    materials: [
      'Pan de oro de 23.75 quilates',
      'Aceites especiales para mecanismo',
      'Bronce original',
      'Goma laca',
    ],
    timeInvested: '80 horas',
    challenges: [
      'Reparación del mecanismo original',
      'Conservación de los bronces',
      'Sincronización de engranajes',
    ],
    results: 'Reloj completamente funcional con dorado restaurado y mecanismo en perfecto estado.',
    clientQuote: 'El reloj funciona mejor que nunca y el dorado es espectacular.',
  },
  {
    title: 'Restauración de Espejo Meiras',
    initialState: 'Daños estructurales severos y dorado deteriorado',
    clientNeeds: 'Conservar la estructura original y restaurar el dorado',
    beforeImage: '/images/trabajos-realizados/espejo-meiras/antes.JPG',
    afterImage: '/images/trabajos-realizados/espejo-meiras/despues.jpg',
    techniques: [
      'Consolidación de ensambles',
      'Tratamiento antixilófagos',
      'Restauración de dorados',
      'Conservación de cristal',
    ],
    materials: [
      'Madera de haya para refuerzos',
      'Pan de oro de 23.75 quilates',
      'Cola de conejo tradicional',
      'Cristal original',
    ],
    timeInvested: '120 horas',
    challenges: [
      'Conservación de la estructura original',
      'Reparación de elementos decorativos',
      'Recuperación de dorados originales',
    ],
    results: 'Recuperación completa de la estabilidad estructural y el dorado original.',
    clientQuote: 'El resultado superó todas mis expectativas. Han conseguido preservar la historia de esta pieza familiar.',
  },
  {
    title: 'Restauración de Mesa',
    initialState: 'Pérdida de chapa y problemas estructurales',
    clientNeeds: 'Restaurar la funcionalidad y estética original',
    beforeImage: '/images/trabajos-realizados/mesa/antes.JPG',
    afterImage: '/images/trabajos-realizados/mesa/despues.jpg',
    techniques: [
      'Reintegración de chapas',
      'Refuerzo estructural',
      'Limpieza de bronces',
      'Acabado a muñequilla',
    ],
    materials: [
      'Chapa de palisandro',
      'Cola de hueso',
      'Goma laca',
      'Cera virgen',
    ],
    timeInvested: '85 horas',
    challenges: [
      'Reproducción exacta de chapas faltantes',
      'Refuerzo de estructura sin alterar diseño',
      'Conservación de elementos decorativos',
    ],
    results: 'Restauración completa de la funcionalidad y estética, respetando las técnicas y materiales de la época.',
    clientQuote: 'La mesa ha recuperado todo su esplendor y es completamente funcional.',
  },
  {
    title: 'Restauración de Lámpara',
    initialState: 'Cristales rotos y estructura oxidada',
    clientNeeds: 'Restauración completa con actualización eléctrica',
    beforeImage: '/images/trabajos-realizados/lampara/antes.JPG',
    afterImage: '/images/trabajos-realizados/lampara/despues.jpg',
    techniques: [
      'Limpieza de cristales',
      'Tratamiento antioxido',
      'Dorado al agua',
      'Actualización eléctrica',
    ],
    materials: [
      'Pan de oro de 23.75 quilates',
      'Cristales originales',
      'Cableado moderno',
      'Componentes eléctricos seguros',
    ],
    timeInvested: '70 horas',
    challenges: [
      'Limpieza de cristales sin dañarlos',
      'Tratamiento de oxidación',
      'Mantenimiento de estética original',
    ],
    results: 'Lámpara completamente funcional con cristales restaurados y sistema eléctrico moderno.',
    clientQuote: 'La lámpara luce espectacular y funciona perfectamente con la instalación moderna.',
  },
]; 