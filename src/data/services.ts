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
    title: 'Restauración de Muebles',
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
        imageUrl: '/images/servicios/dorados/1.jpeg',
      },
      {
        title: 'Aplicación del bol',
        description: 'Aplicación de capas de bol rojo o negro según la técnica tradicional. El bol proporciona la base perfecta para el dorado.',
        imageUrl: '/images/servicios/dorados/2.jpeg',
      },
      {
        title: 'Colocación del pan de oro',
        description: 'Aplicación hoja por hoja del pan de oro con máxima precisión. Utilizamos oro de diferentes quilates según las necesidades.',
        imageUrl: '/images/servicios/dorados/3.jpeg',
      },
      {
        title: 'Bruñido',
        description: 'Pulido con piedra de ágata para lograr el brillo característico del oro. Este proceso requiere gran habilidad y experiencia.',
        imageUrl: '/images/servicios/dorados/4.jpeg',
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
        imageUrl: '/images/servicios/lamparas/1.jpeg',
      },
      {
        title: 'Limpieza de cristales',
        description: 'Limpieza especializada de elementos decorativos y cristales. Utilizamos productos específicos para cada material.',
        imageUrl: '/images/servicios/lamparas/2.jpeg',
      },
      {
        title: 'Restauración de estructura',
        description: 'Reparación y refuerzo de la estructura metálica. Incluye soldaduras y tratamientos contra la oxidación.',
        imageUrl: '/images/servicios/lamparas/3.jpeg',
      },
      {
        title: 'Actualización eléctrica',
        description: 'Modernización del sistema eléctrico manteniendo la estética original. Cumplimos con todas las normativas de seguridad.',
        imageUrl: '/images/servicios/lamparas/4.jpeg',
      },
    ],
  },
  {
    icon: '🏠',
    title: 'Restauraciones de Interior de Casas Rústicas',
    description: 'Rehabilitación y tratamiento de elementos estructurales y decorativos en casas rústicas.',
    steps: [
      {
        title: 'Diagnóstico integral',
        description: 'Evaluación completa de vigas, mobiliario y elementos estructurales. Identificamos daños por polilla, humedad y otros agentes.',
        imageUrl: '/images/servicios/casas-rusticas/1.jpeg',
      },
      {
        title: 'Tratamiento antipolilla',
        description: 'Aplicación de tratamientos preventivos y curativos contra xilófagos. Utilizamos productos de alta eficacia y durabilidad.',
        imageUrl: '/images/servicios/casas-rusticas/2.jpeg',
      },
      {
        title: 'Restauración de vigas',
        description: 'Recuperación y refuerzo de vigas antiguas manteniendo su aspecto original. Combinamos técnicas tradicionales con soluciones modernas.',
        imageUrl: '/images/servicios/casas-rusticas/3.jpeg',
      },
      {
        title: 'Acabados rústicos',
        description: 'Aplicación de acabados que respetan y realzan la estética rústica original. Trabajamos con materiales naturales y tradicionales.',
        imageUrl: '/images/servicios/casas-rusticas/4.jpeg',
      },
    ],
  },
  {
    icon: '🪑',
    title: 'Reproducción de Muebles',
    description: 'Creación de réplicas exactas de muebles históricos con técnicas artesanales.',
    steps: [
      {
        title: 'Estudio y documentación',
        description: 'Análisis detallado del mueble original o documentación histórica. Estudiamos materiales, técnicas y características específicas.',
        imageUrl: '/images/servicios/reproduccion/1.jpeg',
      },
      {
        title: 'Selección de materiales',
        description: 'Búsqueda y selección de maderas y materiales que coincidan con el original. Priorizamos calidad y autenticidad.',
        imageUrl: '/images/servicios/reproduccion/2.jpeg',
      },
      {
        title: 'Construcción artesanal',
        description: 'Fabricación siguiendo técnicas tradicionales de la época. Utilizamos herramientas y métodos fieles a los originales.',
        imageUrl: '/images/servicios/reproduccion/3.jpeg',
      },
      {
        title: 'Acabados históricos',
        description: 'Aplicación de acabados que reproducen fielmente la pátina y aspecto del mueble original. Cada pieza es única y auténtica.',
        imageUrl: '/images/servicios/reproduccion/4.jpeg',
      },
    ],
  },
  {
    icon: '🧶',
    title: 'Restauración de Rejillas de Mimbre',
    description: 'Recuperación artesanal de asientos y respaldos de rejilla en sillas antiguas.',
    steps: [
      {
        title: 'Retirada de rejilla deteriorada',
        description: 'Eliminación cuidadosa del material dañado preservando el marco. Limpiamos y preparamos la estructura para el nuevo tejido.',
        imageUrl: '/images/servicios/rejillas/1.jpeg',
      },
      {
        title: 'Preparación del marco',
        description: 'Acondicionamiento y reparación del marco que soportará la nueva rejilla. Reforzamos puntos débiles y tratamos la madera.',
        imageUrl: '/images/servicios/rejillas/2.jpeg',
      },
      {
        title: 'Tejido artesanal',
        description: 'Realización del nuevo tejido de mimbre siguiendo patrones tradicionales. Cada pieza se teje a mano con materiales naturales.',
        imageUrl: '/images/servicios/rejillas/3.jpeg',
      },
      {
        title: 'Acabado y protección',
        description: 'Aplicación de tratamientos para proteger y prolongar la vida útil de la rejilla. Equilibramos durabilidad y estética original.',
        imageUrl: '/images/servicios/rejillas/4.jpeg',
      },
    ],
  },
  {
    icon: '🔶',
    title: 'Renovación de Pieles con Grabados de Oro',
    description: 'Sustitución y embellecimiento artesanal de tapicerías de piel con detalles dorados.',
    steps: [
      {
        title: 'Retirada de cuero antiguo',
        description: 'Eliminación cuidadosa del material deteriorado preservando la estructura. Documentamos patrones y características para la replicación.',
        imageUrl: '/images/servicios/pieles/1.jpeg',
      },
      {
        title: 'Selección y preparación de la piel',
        description: 'Elección de pieles de alta calidad y preparación para el trabajo de tapizado. Cortamos y tratamos el material según las necesidades específicas.',
        imageUrl: '/images/servicios/pieles/2.jpeg',
      },
      {
        title: 'Colocación de piel nueva',
        description: 'Instalación artesanal de la nueva tapicería siguiendo técnicas tradicionales. Cuidamos cada detalle para un acabado perfecto.',
        imageUrl: '/images/servicios/pieles/3.jpeg',
      },
      {
        title: 'Ruleteado con oro',
        description: 'Aplicación de grabados y decoraciones con oro utilizando herramientas especializadas. Creamos diseños personalizados o reproducimos los originales.',
        imageUrl: '/images/servicios/pieles/4.jpeg',
      },
    ],
  },
  {
    icon: '✨',
    title: 'Pulido de Bronce',
    description: 'Restauración y pulido de piezas de bronce como atriles, candelabros y candeleros.',
    steps: [
      {
        title: 'Evaluación inicial',
        description: 'Examinamos el estado actual de la pieza de bronce, identificando pátinas, oxidaciones y daños estructurales que requieran atención especial.',
        imageUrl: '/images/servicios/bronce/1.jpeg',
      },
      {
        title: 'Limpieza profunda',
        description: 'Eliminación de suciedad, óxido y residuos acumulados utilizando productos específicos para bronce que respetan la integridad del metal.',
        imageUrl: '/images/servicios/bronce/2.jpeg',
      },
      {
        title: 'Pulido artesanal',
        description: 'Aplicación de técnicas tradicionales de pulido para recuperar el brillo y textura originales del bronce, respetando la pátina histórica cuando sea apropiado.',
        imageUrl: '/images/servicios/bronce/3.jpeg',
      },
      {
        title: 'Protección final',
        description: 'Aplicación de tratamientos protectores que preservan el acabado y previenen futuras oxidaciones, manteniendo la belleza del bronce a largo plazo.',
        imageUrl: '/images/servicios/bronce/4.jpeg',
      },
    ],
  },
]; 