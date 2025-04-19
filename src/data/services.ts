import { ServiceStep } from "../components/ServiceGallery";

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
        description: 'Analizamos el estado actual del mueble para determinar el mejor proceso de restauración. Evaluamos daños estructurales, estado de la madera, y problemas específicos que requieran atención.',
        imageUrl: '/images/servicios/restauracion-muebles/1.jpg',
      },
      {
        title: 'Limpieza y tratamiento',
        description: 'Eliminación de barnices antiguos y tratamiento contra agentes dañinos. Aplicamos productos específicos para cada tipo de madera y acabado.',
        imageUrl: '/images/servicios/restauracion-muebles/2.jpg',
      },
      {
        title: 'Reparación estructural',
        description: 'Refuerzo de estructuras y reparación de elementos dañados. Utilizamos técnicas tradicionales de carpintería para garantizar la durabilidad.',
        imageUrl: '/images/servicios/restauracion-muebles/3.jpg',
      },
      {
        title: 'Acabados',
        description: 'Aplicación de acabados tradicionales respetando la época del mueble. Utilizamos productos naturales como goma laca y ceras.',
        imageUrl: '/images/servicios/restauracion-muebles/4.jpg',
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
        description: 'Limpieza y preparación del soporte para asegurar una adherencia óptima. Incluye la aplicación de varias capas de yeso mate y fino.',
        imageUrl: '/images/preparacion-dorado.jpg',
      },
      {
        title: 'Aplicación del bol',
        description: 'Aplicación de capas de bol rojo o negro según la técnica tradicional. El bol proporciona la base perfecta para el dorado.',
        imageUrl: '/images/aplicacion-bol.jpg',
      },
      {
        title: 'Colocación del pan de oro',
        description: 'Aplicación hoja por hoja del pan de oro con máxima precisión. Utilizamos oro de diferentes quilates según las necesidades.',
        imageUrl: '/images/pan-oro.jpg',
      },
      {
        title: 'Bruñido',
        description: 'Pulido con piedra de ágata para lograr el brillo característico del oro. Este proceso requiere gran habilidad y experiencia.',
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
        description: 'Inspección y diagnóstico del sistema eléctrico. Identificamos componentes a reemplazar y actualizaciones necesarias.',
        imageUrl: '/images/evaluacion-electrica.jpg',
      },
      {
        title: 'Limpieza de cristales',
        description: 'Limpieza especializada de elementos decorativos y cristales. Utilizamos productos específicos para cada material.',
        imageUrl: '/images/limpieza-cristales.jpg',
      },
      {
        title: 'Restauración de estructura',
        description: 'Reparación y refuerzo de la estructura metálica. Incluye soldaduras y tratamientos contra la oxidación.',
        imageUrl: '/images/estructura-lampara.jpg',
      },
      {
        title: 'Actualización eléctrica',
        description: 'Modernización del sistema eléctrico manteniendo la estética original. Cumplimos con todas las normativas de seguridad.',
        imageUrl: '/images/actualizacion-electrica.jpg',
      },
    ],
  },
]; 