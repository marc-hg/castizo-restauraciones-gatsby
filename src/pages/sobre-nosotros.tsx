import * as React from "react";
import { HeadFC, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";

const teamMembers = [
  {
    name: "Francisco Javier Horno Escribano",
    role: "Maestro Restaurador",
    description:
      "Con más de 40 años de experiencia en restauración de muebles y especialista en dorados. Su dedicación y maestría artesanal le han convertido en un referente en el sector.",
    imageUrl: "/images/paco/paco.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Sobre Nosotros
          </h1>

          {/* Historia Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Nuestra Historia</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Dorados y Restauraciones El Madrileño nace de una pasión por
                  la artesanía y la preservación del patrimonio mueble. Con más
                  de cuatro décadas de experiencia, nos hemos especializado en
                  la restauración de muebles y la aplicación de técnicas
                  tradicionales de dorado.
                </p>
              </div>
            </div>
          </section>

          {/* Maestro Artesano Hero Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-[500px]">
                  <img
                    src={withPrefix("/images/paco/paco.jpg")}
                    alt="Francisco Javier Horno Escribano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Francisco Javier Horno Escribano
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-4">
                    Maestro Restaurador
                  </h3>
                  <p className="text-gray-600">
                    Con más de 40 años de experiencia en restauración de muebles
                    antiguos y especialista en dorados. Su dedicación y maestría
                    artesanal le han convertido en un referente en el sector.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Nuestros Valores
            </h2>
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
      content="Conoce nuestra historia, valores y al maestro artesano Francisco Javier Horno Escribano con más de 40 años de experiencia en restauración."
    />
  </>
);
