import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import SuccessCase from '../components/SuccessCase';

const services = [
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

const successCases = [
  {
    title: 'Espejo Pazo de Meiras',
    era: 'Siglo XVIII',
    initialState: 'Daños estructurales severos y tapicería deteriorada',
    clientNeeds: 'Conservar la tapicería original y reforzar la estructura',
    techniques: [
      'Consolidación de ensambles',
      'Tratamiento antixilófagos',
      'Restauración de dorados',
      'Conservación de tapicería',
    ],
    materials: [
      'Madera de haya para refuerzos',
      'Pan de oro de 23.75 quilates',
      'Cola de conejo tradicional',
      'Telas de época para parches',
    ],
    timeInvested: '120 horas',
    challenges: [
      'Conservación de la tapicería original del siglo XVIII',
      'Reparación de patas severamente dañadas',
      'Recuperación de dorados originales',
    ],
    results: 'Recuperación completa de la estabilidad estructural manteniendo el 90% de los materiales originales.',
    clientQuote: 'El resultado superó todas mis expectativas. Han conseguido preservar la historia de esta pieza familiar.',
  },
  {
    title: 'Cómoda Isabelina',
    era: 'Mediados del Siglo XIX',
    initialState: 'Pérdida de chapa y problemas en los cajones',
    clientNeeds: 'Restaurar la funcionalidad y estética original',
    techniques: [
      'Reintegración de chapas',
      'Ajuste de guías de cajones',
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
      'Recuperación del sistema de guías original',
      'Conservación de cerraduras de época',
    ],
    results: 'Restauración completa de la funcionalidad y estética, respetando las técnicas y materiales de la época.',
    clientQuote: 'La cómoda ha recuperado todo su esplendor, y los cajones funcionan mejor que nunca.',
  },
  {
    title: 'Marco Dorado Rococó',
    era: 'Siglo XVIII',
    initialState: 'Pérdida del 40% de dorados y ornamentación',
    clientNeeds: 'Recuperar el aspecto original',
    techniques: [
      'Talla en madera',
      'Dorado al agua',
      'Bruñido tradicional',
      'Pátinas envejecidas',
    ],
    materials: [
      'Pan de oro de diferentes quilates',
      'Bol rojo y negro',
      'Madera de tilo para tallas',
      'Cola de conejo',
    ],
    timeInvested: '160 horas',
    challenges: [
      'Reproducción de elementos decorativos perdidos',
      'Integración de dorados nuevos con antiguos',
      'Conservación de pátinas originales',
    ],
    results: 'Recuperación completa de la ornamentación y dorados, manteniendo la pátina histórica en las zonas originales.',
  },
];

const testimonials = [
  {
    text: "Excelente trabajo, mi mueble quedó como nuevo.",
    author: "María García",
    role: "Cliente Particular",
  },
  {
    text: "Profesionales y detallistas en cada paso del proceso.",
    author: "Juan Pérez",
    role: "Anticuario",
  },
  {
    text: "Muy recomendados por su atención y calidad en el trabajo.",
    author: "Ana Martínez",
    role: "Interiorista",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      {/* Services Section */}
      <section id="servicios" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos-de-exito" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Éxito</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((successCase, index) => (
              <SuccessCase key={index} {...successCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonios" className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">1. Contacto Inicial</h3>
              <p className="mb-4">Envíenos fotos de su mueble para una evaluación inicial.</p>
              <a
                href="https://wa.me/34698126236"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">2. Proceso de Presupuesto</h3>
              <p>Evaluamos su pieza y le proporcionamos un presupuesto detallado sin compromiso.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">3. Servicio de Recogida</h3>
              <p>Ofrecemos servicio de recogida y entrega a domicilio.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Dorados y Restauraciones El Madrileño - Restauración de Muebles</title>
    <meta
      name="description"
      content="Expertos en restauración de muebles antiguos, dorados con pan de oro y reproducción de muebles históricos en Madrid."
    />
  </>
);
