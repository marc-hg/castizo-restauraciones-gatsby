import * as React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import ServiceGallery from "../components/ServiceGallery";
import { services } from "../data/services";
import SEO from "../components/SEO";

const ServicesPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h1>

          {/* Services Overview */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                Servicios Especializados
              </h2>
              <p className="text-gray-600 mb-4">
                En Dorados y Restauraciones El Madrileño, nos especializamos en
                la restauración y conservación de muebles, utilizando técnicas
                tradicionales y materiales de la más alta calidad. Nuestro
                compromiso es preservar el valor histórico y artístico de cada
                pieza.
              </p>
            </div>
          </section>

          {/* Detailed Services */}
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <section
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-8">{service.description}</p>

                  <h3 className="text-xl font-bold mb-4">Proceso de Trabajo</h3>

                  {/* Service Gallery */}
                  <ServiceGallery title={service.title} steps={service.steps} />
                </div>
              </section>
            ))}
          </div>

          {/* Contact CTA */}
          <section className="mt-16">
            <div className="bg-amber-100 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                ¿Necesita Nuestros Servicios?
              </h2>
              <p className="text-gray-600 mb-6">
                Contáctenos para una evaluación gratuita de su pieza. Ofrecemos
                presupuestos sin compromiso y asesoramiento profesional.
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
  <SEO
    title="Servicios de Restauración | Castizo Restauraciones"
    description="Servicios especializados en restauración de muebles, dorados con pan de oro, pulido de bronce, restauración de lámparas, reproducción de muebles, tratamiento antipolilla, rejillas de mimbre y renovación de pieles con grabados de oro."
    keywords="restauración profesional, pulido de bronce, dorado con pan de oro, tratamiento antipolilla, restauración de vigas, restauración de muebles rústicos, reproducción de muebles, rejillas de mimbre, renovación de pieles"
    pathname="/servicios"
  />
);
