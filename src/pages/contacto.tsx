import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';

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
                <h3 className="text-xl font-bold mb-4 text-center">1. Contacto Inicial</h3>
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
                <h3 className="text-xl font-bold mb-4 text-center">2. Presupuesto</h3>
                <p className="text-gray-600 text-center">
                  Evaluamos su pieza y le proporcionamos un presupuesto detallado sin compromiso.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4 text-center">🚚</div>
                <h3 className="text-xl font-bold mb-4 text-center">3. Recogida</h3>
                <p className="text-gray-600 text-center">
                  Organizamos la recogida y entrega a domicilio de su pieza.
                </p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Formulario de Contacto</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="Su nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="su.email@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="Su número de teléfono"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
                      Servicio de Interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-500"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="restauracion">Restauración de Muebles</option>
                      <option value="dorados">Dorados con Pan de Oro</option>
                      <option value="reproduccion">Reproducción de Muebles</option>
                      <option value="lamparas">Restauración de Lámparas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="Describa su proyecto o consulta"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                
                <div className="space-y-6">
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
                      <a href="tel:+34698126236" className="hover:text-amber-600">
                        698 12 62 36
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:castizorestauraciones@gmail.com" className="hover:text-amber-600">
                        castizorestauraciones@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Ubicación</h3>
                    <p className="text-gray-600 mb-4">
                      Madrid, España
                      <br />
                      Servicio de recogida y entrega en toda la Comunidad de Madrid
                    </p>
                    {/* Google Maps Embed */}
                    <div className="aspect-w-16 aspect-h-9">
                      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">
                        <span className="text-gray-500">Mapa de Ubicación</span>
                      </div>
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
                  <h3 className="font-bold mb-2">¿Cuál es el proceso de trabajo?</h3>
                  <p className="text-gray-600">
                    Comenzamos con una evaluación inicial de su pieza, seguida de un presupuesto detallado. Una vez
                    aprobado, procedemos con la restauración, manteniéndole informado durante todo el proceso.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">¿Ofrecen garantía en sus trabajos?</h3>
                  <p className="text-gray-600">
                    Sí, todos nuestros trabajos cuentan con garantía. La duración específica dependerá del tipo de
                    restauración realizada.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">¿Cuánto tiempo tarda una restauración?</h3>
                  <p className="text-gray-600">
                    El tiempo varía según la complejidad del trabajo y el estado de la pieza. Proporcionamos una
                    estimación detallada en nuestro presupuesto inicial.
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
      content="Contacte con nosotros para restauración de muebles antiguos en Madrid. Presupuesto sin compromiso y servicio de recogida a domicilio."
    />
  </>
); 