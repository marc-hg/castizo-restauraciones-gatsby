import * as React from "react";
import { HeadFC, Link } from "gatsby";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import SuccessCase from "../components/SuccessCase";
import { successCases } from "../data/successCases";
import { services } from "../data/services";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      {/* Services Section */}
      <section id="servicios" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos-de-exito" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Trabajos Realizados
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Desliza para ver antes y después
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((successCase, index) => (
              <SuccessCase key={index} {...successCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold mb-4 text-center">
                1. Contacto Inicial
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Envíenos fotos de su mueble para una evaluación inicial.
              </p>
              <div className="text-center">
                <a
                  href="https://wa.me/34698126236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">📋</div>
              <h3 className="text-xl font-bold mb-4 text-center">
                2. Presupuesto
              </h3>
              <p className="text-gray-600 text-center">
                Evaluamos su pieza y le proporcionamos un presupuesto detallado
                sin compromiso.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">🚚</div>
              <h3 className="text-xl font-bold mb-4 text-center">
                3. Recogida
              </h3>
              <p className="text-gray-600 text-center">
                Organizamos la recogida y entrega a domicilio de su pieza.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/contacto"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Más Información
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Restaurador de Muebles en A Coruña y toda España | Castizo Restauraciones"
    description="Taller especializado en restauración de muebles en A Coruña con servicio en toda España. Dorados con pan de oro, pulido de bronce y restauración de piezas religiosas. Recogida y entrega a domicilio."
    keywords="restaurador de muebles A Coruña, restauración muebles España, Galicia, dorado con pan de oro, pulido de bronce, restauración religiosa, restauración de lámparas, recogida a domicilio"
  />
);
