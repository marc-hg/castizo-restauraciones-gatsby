import * as React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import SuccessCase from "../components/SuccessCase";
import { successCases } from "../data/successCases";
import SEO from "../components/SEO";

const SuccessCasesPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Trabajos Realizados
          </h1>

          {/* Overview Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Nuestros Proyectos</h2>
              <p className="text-gray-600 mb-4">
                Cada proyecto es único y requiere un enfoque personalizado. En
                esta sección presentamos algunos de nuestros trabajos más
                destacados, donde podrá apreciar el antes y después de cada
                restauración, así como los detalles técnicos del proceso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">500+</div>
                  <p className="text-gray-600">Piezas Restauradas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">40+</div>
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
              <h2 className="text-2xl font-bold mb-4">
                ¿Tiene un Proyecto Similar?
              </h2>
              <p className="text-gray-600 mb-6">
                Contáctenos para discutir su proyecto de restauración. Ofrecemos
                presupuestos personalizados y asesoramiento profesional.
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
  <SEO
    title="Trabajos Realizados - Dorados y Restauraciones El Madrileño"
    description="Descubre nuestros trabajos realizados en restauración de muebles y dorados con pan de oro."
    keywords="portafolio, trabajos realizados, antes y después, restauración de muebles, dorado con pan de oro, Castizo Restauraciones"
  />
);
