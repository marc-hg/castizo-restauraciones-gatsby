import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h1>

          {/* Historia Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Nuestra Historia</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Dorados y Restauraciones El Madrileño nace de una pasión por la artesanía y la preservación del patrimonio
                  mueble. Con más de dos décadas de experiencia, nos hemos especializado en la restauración de muebles
                  antiguos y la aplicación de técnicas tradicionales de dorado.
                </p>
                <p className="mb-4">
                  Nuestro taller, ubicado en el corazón de Madrid, se ha convertido en un referente para coleccionistas,
                  anticuarios y amantes de los muebles antiguos que buscan un trabajo meticuloso y respetuoso con las
                  técnicas originales.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4 text-center">🎨</div>
                <h3 className="text-xl font-bold mb-4 text-center">Artesanía</h3>
                <p className="text-gray-600">
                  Mantenemos vivas las técnicas tradicionales de restauración, adaptándolas a las necesidades actuales sin
                  perder su esencia.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4 text-center">🔍</div>
                <h3 className="text-xl font-bold mb-4 text-center">Atención al Detalle</h3>
                <p className="text-gray-600">
                  Cada pieza recibe una atención meticulosa, cuidando hasta el más mínimo detalle para garantizar
                  resultados excepcionales.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4 text-center">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-center">Compromiso</h3>
                <p className="text-gray-600">
                  Nos comprometemos con cada proyecto, estableciendo una relación de confianza con nuestros clientes y
                  garantizando su satisfacción.
                </p>
              </div>
            </div>
          </section>

          {/* Workshop Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Nuestro Taller</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    Nuestro taller está equipado con herramientas tradicionales y modernas, creando el ambiente perfecto
                    para la restauración de muebles antiguos. Disponemos de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Zona de carpintería tradicional</li>
                    <li>Área especializada para dorados</li>
                    <li>Espacio de acabados y tratamientos</li>
                    <li>Almacén climatizado para materiales delicados</li>
                  </ul>
                </div>
                <div className="bg-amber-100 h-64 rounded-lg flex items-center justify-center">
                  {/* Placeholder for workshop image */}
                  <span className="text-amber-800">Imagen del Taller</span>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-amber-100 h-48 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <span className="text-amber-800">Foto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Antonio García</h3>
                  <p className="text-gray-500 mb-4">Maestro Restaurador</p>
                  <p className="text-gray-600">
                    Con más de 30 años de experiencia en restauración de muebles antiguos y especialista en dorados.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-amber-100 h-48 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <span className="text-amber-800">Foto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">María Sánchez</h3>
                  <p className="text-gray-500 mb-4">Especialista en Dorados</p>
                  <p className="text-gray-600">
                    Experta en técnicas tradicionales de dorado al agua y restauración de marcos antiguos.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-amber-100 h-48 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <span className="text-amber-800">Foto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Carlos Martín</h3>
                  <p className="text-gray-500 mb-4">Carpintero Restaurador</p>
                  <p className="text-gray-600">
                    Especializado en restauración estructural y reproducción de muebles históricos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => (
  <>
    <title>Sobre Nosotros - Dorados y Restauraciones El Madrileño</title>
    <meta
      name="description"
      content="Conozca nuestra historia, valores y equipo de expertos restauradores en Madrid. Más de dos décadas de experiencia en restauración de muebles antiguos."
    />
  </>
); 