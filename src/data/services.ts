export interface ServiceStep {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  steps: ServiceStep[];
}

export const services: Service[] = [
  {
    icon: '🛠️',
    title: 'Restauración de Muebles Antiguos',
    description: 'Restauramos y preservamos muebles con técnicas tradicionales.',
    steps: [
      {
        title: 'Evaluación inicial',
        description: 'Analizamos el estado actual del mueble para determinar el mejor proceso de restauración.',
        imageUrl: '/images/evaluacion-inicial.jpg',
      },
      {
        title: 'Limpieza y tratamiento',
        description: 'Eliminación de barnices antiguos y tratamiento contra agentes dañinos.',
        imageUrl: '/images/limpieza.jpg',
      },
      {
        title: 'Reparación estructural',
        description: 'Refuerzo de estructuras y reparación de elementos dañados.',
        imageUrl: '/images/reparacion.jpg',
      },
      {
        title: 'Acabados',
        description: 'Aplicación de acabados tradicionales respetando la época del mueble.',
        imageUrl: '/images/acabados.jpg',
      },
    ],
  },
  {
    icon: '✨',
    title: 'Dorados con Pan de Oro',
    description: 'Aplicación artesanal de pan de oro con técnicas tradicionales.',
    steps: [
      {
        title: 'Preparación de la superficie',
        description: 'Limpieza y preparación del soporte para asegurar una adherencia óptima.',
        imageUrl: '/images/preparacion-dorado.jpg',
      },
      {
        title: 'Aplicación del bol',
        description: 'Aplicación de capas de bol rojo/negro según la técnica tradicional.',
        imageUrl: '/images/aplicacion-bol.jpg',
      },
      {
        title: 'Colocación del pan de oro',
        description: 'Aplicación hoja por hoja del pan de oro con máxima precisión.',
        imageUrl: '/images/pan-oro.jpg',
      },
      {
        title: 'Bruñido',
        description: 'Pulido con piedra de ágata para lograr el brillo característico.',
        imageUrl: '/images/brunido.jpg',
      },
    ],
  },
  {
    icon: '💡',
    title: 'Restauración de Lámparas',
    description: 'Restauración completa de lámparas antiguas.',
    steps: [
      {
        title: 'Evaluación del sistema eléctrico',
        description: 'Inspección y diagnóstico del sistema eléctrico.',
        imageUrl: '/images/evaluacion-electrica.jpg',
      },
      {
        title: 'Limpieza de cristales',
        description: 'Limpieza especializada de elementos decorativos.',
        imageUrl: '/images/limpieza-cristales.jpg',
      },
      {
        title: 'Restauración de estructura',
        description: 'Reparación y refuerzo de la estructura metálica.',
        imageUrl: '/images/estructura-lampara.jpg',
      },
      {
        title: 'Actualización eléctrica',
        description: 'Modernización del sistema eléctrico manteniendo la estética original.',
        imageUrl: '/images/actualizacion-electrica.jpg',
      },
    ],
  },
]; 