import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: '🛠️',
    title: 'Restauración de Muebles Antiguos',
    description: 'Restauramos y preservamos muebles con técnicas tradicionales.',
    steps: [
      {
        title: 'Evaluación inicial',
        description: 'Analizamos el estado actual del mueble para determinar el mejor proceso de restauración. Evaluamos daños estructurales, estado de la madera, y problemas específicos que requieran atención.',
        imageUrl: '/images/evaluacion-inicial.jpg',
      },
      {
        title: 'Limpieza y tratamiento',
        description: 'Eliminación de barnices antiguos y tratamiento contra agentes dañinos. Aplicamos productos específicos para cada tipo de madera y acabado.',
        imageUrl: '/images/limpieza.jpg',
      },
      {
        title: 'Reparación estructural',
        description: 'Refuerzo de estructuras y reparación de elementos dañados. Utilizamos técnicas tradicionales de carpintería para garantizar la durabilidad.',
        imageUrl: '/images/reparacion.jpg',
      },
      {
        title: 'Acabados',
        description: 'Aplicación de acabados tradicionales respetando la época del mueble. Utilizamos productos naturales como goma laca y ceras.',
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
    icon: '🪑',
    title: 'Reproducción de Muebles',
    description: 'Creación de réplicas exactas de muebles históricos.',
    steps: [
      {
        title: 'Estudio de la pieza original',
        description: 'Análisis detallado del diseño, medidas y técnicas constructivas originales. Documentamos cada aspecto del mueble.',
        imageUrl: '/images/estudio.jpg',
      },
      {
        title: 'Selección de materiales',
        description: 'Elección de maderas y materiales de la más alta calidad, similares a los originales. Trabajamos con proveedores especializados.',
        imageUrl: '/images/materiales.jpg',
      },
      {
        title: 'Construcción',
        description: 'Fabricación siguiendo técnicas tradicionales y respetando los métodos de la época. Utilizamos herramientas y técnicas auténticas.',
        imageUrl: '/images/construccion.jpg',
      },
      {
        title: 'Acabados históricos',
        description: 'Aplicación de acabados fieles a la época, utilizando productos y técnicas tradicionales. Conseguimos una pátina auténtica.',
        imageUrl: '/images/acabados-historicos.jpg',
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

const ServicesPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>

          {/* Services Overview */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Servicios Especializados</h2>
              <p className="text-gray-600 mb-4">
                En Dorados y Restauraciones El Madrileño, nos especializamos en la restauración y conservación de muebles
                antiguos, utilizando técnicas tradicionales y materiales de la más alta calidad. Nuestro compromiso es
                preservar el valor histórico y artístico de cada pieza.
              </p>
            </div>
          </section>

          {/* Detailed Services */}
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <section key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-8">{service.description}</p>

                  <h3 className="text-xl font-bold mb-4">Proceso de Trabajo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="border rounded-lg p-6">
                        <h4 className="font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Contact CTA */}
          <section className="mt-16">
            <div className="bg-amber-100 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Necesita Nuestros Servicios?</h2>
              <p className="text-gray-600 mb-6">
                Contáctenos para una evaluación gratuita de su pieza. Ofrecemos presupuestos sin compromiso y asesoramiento
                profesional.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => (
  <>
    <title>Servicios - Dorados y Restauraciones El Madrileño</title>
    <meta
      name="description"
      content="Servicios especializados en restauración de muebles antiguos, dorados con pan de oro, reproducción de muebles históricos y restauración de lámparas en Madrid."
    />
  </>
); 