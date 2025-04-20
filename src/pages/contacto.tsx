import * as React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contacto</h1>

          {/* Contact Process */}
          <section className="mb-16">
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
                  Evaluamos su pieza y le proporcionamos un presupuesto
                  detallado sin compromiso.
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
          </section>

          <div className="grid grid-cols-1 gap-8">
            {/* Contact Information */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Información de Contacto
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-2">Área de Servicio</h3>
                      <p className="text-gray-600">
                        Servicio de recogida y entrega en toda la provincia de A
                        Coruña
                        <br />
                        (Consultar para otras localidades)
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Horario de Atención</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Lunes a Viernes: 9:00 - 18:00</li>
                        <li>Sábados: 10:00 - 14:00</li>
                        <li>Domingos: Cerrado</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Teléfono y WhatsApp</h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+34698126236"
                          className="hover:text-amber-600"
                        >
                          698 12 62 36
                        </a>
                      </p>
                      <div className="mt-2">
                        <a
                          href="https://wa.me/34698126236"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                          Contactar por WhatsApp
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:castizorestauraciones@gmail.com"
                          className="hover:text-amber-600"
                        >
                          castizorestauraciones@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold mb-2">Ubicación</h3>
                        <p className="text-gray-600 mb-4">
                          Rúa José Baldomir, 6, bajo
                          <br />
                          15010 A Coruña, España
                        </p>
                      </div>
                    </div>
                    {/* Google Maps Embed */}
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.644493009752!2d-8.4190863!3d43.3635464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7d8020fdad31%3A0x63a8642d32089e69!2sDorados%20y%20Restauraciones%20El%20Madrile%C3%B1o!5e0!3m2!1sen!2ses!4v1745047154563!5m2!1sen!2ses"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">
                    ¿Cuál es el proceso de trabajo?
                  </h3>
                  <p className="text-gray-600">
                    Comenzamos con una evaluación inicial de su pieza, seguida
                    de un presupuesto detallado. Una vez aprobado, procedemos
                    con la restauración, manteniéndole informado durante todo el
                    proceso.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">
                    ¿Cuánto tiempo tarda una restauración?
                  </h3>
                  <p className="text-gray-600">
                    El tiempo varía según la complejidad del trabajo y el estado
                    de la pieza. Proporcionamos una estimación detallada en
                    nuestro presupuesto inicial.
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

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <title>Contacto - Dorados y Restauraciones El Madrileño</title>
    <meta
      name="description"
      content="Contacte con nosotros para restauración de muebles antiguos en toda España. Presupuesto sin compromiso y servicio de recogida a domicilio."
    />
  </>
);
