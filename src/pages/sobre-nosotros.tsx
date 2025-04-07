import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';

const teamMembers = [
  {
    name: 'Antonio García',
    role: 'Maestro Restaurador',
    description: 'Con más de 30 años de experiencia en restauración de muebles antiguos y especialista en dorados.',
    imagePlaceholder: 'Foto',
  },
  {
    name: 'María Sánchez',
    role: 'Especialista en Dorados',
    description: 'Experta en técnicas tradicionales de dorado al agua y restauración de marcos antiguos.',
    imagePlaceholder: 'Foto',
  },
];

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
              <Card
                title="Tradición"
                description="Mantenemos vivas las técnicas artesanales tradicionales, transmitidas de generación en generación."
              />
              <Card
                title="Calidad"
                description="Cada pieza recibe el máximo cuidado y atención, garantizando resultados excepcionales."
              />
              <Card
                title="Respeto"
                description="Preservamos la historia y el carácter único de cada pieza, respetando su origen y época."
              />
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  title={member.name}
                  subtitle={member.role}
                  description={member.description}
                  imagePlaceholder={member.imagePlaceholder}
                />
              ))}
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
      content="Conoce nuestra historia, valores y equipo de expertos en restauración de muebles antiguos y dorados con pan de oro."
    />
  </>
); 