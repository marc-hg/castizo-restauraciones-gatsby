import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import SuccessCase from '../components/SuccessCase';

const successCases = [
  {
    title: 'Espejo dorado del Pazo de Meiras',
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
    beforeImage: '/images/sillon-antes.jpg',
    afterImage: '/images/sillon-despues.jpg',
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
    beforeImage: '/images/comoda-antes.jpg',
    afterImage: '/images/comoda-despues.jpg',
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
    beforeImage: '/images/marco-antes.jpg',
    afterImage: '/images/marco-despues.jpg',
  },
  {
    title: 'Lámpara Art Nouveau',
    era: 'Principios del Siglo XX',
    initialState: 'Sistema eléctrico obsoleto y cristales rotos',
    clientNeeds: 'Actualización eléctrica y restauración estética',
    techniques: [
      'Restauración de metales',
      'Reposición de cristales',
      'Actualización eléctrica',
      'Limpieza especializada',
    ],
    materials: [
      'Cristales soplados artesanales',
      'Componentes eléctricos modernos',
      'Productos específicos para latón',
      'Soldadura de plata',
    ],
    timeInvested: '75 horas',
    challenges: [
      'Fabricación de cristales a medida',
      'Integración de sistema LED manteniendo la estética',
      'Restauración de elementos metálicos oxidados',
    ],
    results: 'Restauración completa con actualización a tecnología LED y recuperación de todos los elementos decorativos.',
    beforeImage: '/images/lampara-antes.jpg',
    afterImage: '/images/lampara-despues.jpg',
  },
  {
    title: 'Bargueño Español',
    era: 'Siglo XVII',
    initialState: 'Pérdida de incrustaciones y herrajes',
    clientNeeds: 'Recuperación de la decoración original',
    techniques: [
      'Marquetería',
      'Forja tradicional',
      'Dorado a la mixtión',
      'Restauración de carey',
    ],
    materials: [
      'Maderas nobles variadas',
      'Hierro forjado',
      'Pan de oro',
      'Carey natural',
    ],
    timeInvested: '200 horas',
    challenges: [
      'Reproducción de incrustaciones perdidas',
      'Fabricación de herrajes según modelos originales',
      'Restauración de secretos y mecanismos',
    ],
    results: 'Recuperación completa de la funcionalidad y decoración, manteniendo el carácter histórico de la pieza.',
    beforeImage: '/images/bargueno-antes.jpg',
    afterImage: '/images/bargueno-despues.jpg',
  },
];

const SuccessCasesPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Casos de Éxito</h1>

          {/* Overview Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Nuestros Proyectos</h2>
              <p className="text-gray-600 mb-4">
                Cada proyecto es único y requiere un enfoque personalizado. En esta sección presentamos algunos de nuestros
                trabajos más destacados, donde podrá apreciar el antes y después de cada restauración, así como los
                detalles técnicos del proceso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">500+</div>
                  <p className="text-gray-600">Piezas Restauradas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">20+</div>
                  <p className="text-gray-600">Años de Experiencia</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">100%</div>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((successCase, index) => (
              <SuccessCase key={index} {...successCase} />
            ))}
          </div>

          {/* Call to Action */}
          <section className="mt-16">
            <div className="bg-amber-100 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Tiene un Proyecto Similar?</h2>
              <p className="text-gray-600 mb-6">
                Contáctenos para discutir su proyecto de restauración. Ofrecemos presupuestos personalizados y asesoramiento
                profesional.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="/contacto"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Solicitar Presupuesto
                </a>
                <a
                  href="https://wa.me/34698126236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessCasesPage;

export const Head: HeadFC = () => (
  <>
    <title>Casos de Éxito - Dorados y Restauraciones El Madrileño</title>
    <meta
      name="description"
      content="Explore nuestros casos de éxito en restauración de muebles antiguos. Antes y después de restauraciones profesionales en Madrid."
    />
  </>
); 