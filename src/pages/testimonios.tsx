import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';

const testimonials = [
  {
    name: 'María García',
    role: 'Cliente Particular',
    rating: 5,
    text: 'Excelente trabajo en la restauración de mi cómoda isabelina. El equipo fue muy profesional y cuidadoso con cada detalle. El resultado superó mis expectativas.',
    project: 'Restauración de Cómoda Isabelina',
    date: 'Marzo 2024',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Juan Pérez',
    role: 'Anticuario',
    rating: 5,
    text: 'Como anticuario, valoro enormemente la precisión y el respeto por las técnicas tradicionales. Su trabajo en dorados es excepcional.',
    project: 'Dorado de Marco Antiguo',
    date: 'Febrero 2024',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Ana Martínez',
    role: 'Interiorista',
    rating: 5,
    text: 'He trabajado con ellos en varios proyectos y siempre entregan resultados excepcionales. Su atención al detalle es impresionante.',
    project: 'Restauración de Mobiliario',
    date: 'Enero 2024',
    image: '/images/testimonial-3.jpg',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Coleccionista',
    rating: 5,
    text: 'Su experiencia en la restauración de piezas antiguas es invaluable. Han restaurado varias piezas de mi colección con resultados extraordinarios.',
    project: 'Restauración de Sillón Luis XV',
    date: 'Diciembre 2023',
    image: '/images/testimonial-4.jpg',
  },
  {
    name: 'Laura Sánchez',
    role: 'Cliente Particular',
    rating: 5,
    text: 'Restauraron un mueble familiar con gran valor sentimental. Su profesionalidad y el resultado final nos emocionaron.',
    project: 'Restauración de Mesa Antigua',
    date: 'Noviembre 2023',
    image: '/images/testimonial-5.jpg',
  },
  {
    name: 'Miguel Ángel Fernández',
    role: 'Galerista',
    rating: 5,
    text: 'Su trabajo en dorados es excepcional. Han restaurado varios marcos para nuestra galería con resultados impecables.',
    project: 'Restauración de Marcos',
    date: 'Octubre 2023',
    image: '/images/testimonial-6.jpg',
  },
];

const TestimonialsPage = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Testimonios de Clientes</h1>

          {/* Overview Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="text-5xl font-bold text-amber-600">5.0</div>
                <div className="flex justify-center my-2">
                  {'★★★★★'.split('').map((star, index) => (
                    <span key={index} className="text-amber-400 text-2xl">
                      {star}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">Basado en más de 100 opiniones</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="font-bold text-xl">100%</div>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
                <div>
                  <div className="font-bold text-xl">150+</div>
                  <p className="text-gray-600">Proyectos Completados</p>
                </div>
                <div>
                  <div className="font-bold text-xl">20+</div>
                  <p className="text-gray-600">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-amber-800 font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Proyecto:</span> {testimonial.project}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Fecha:</span> {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <section className="mt-16">
            <div className="bg-amber-100 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Listo para Restaurar su Mueble?</h2>
              <p className="text-gray-600 mb-6">
                Únase a nuestra lista de clientes satisfechos. Contáctenos hoy para una evaluación gratuita de su pieza.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="/contacto"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Contactar
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

export default TestimonialsPage;

export const Head: HeadFC = () => (
  <>
    <title>Testimonios - Dorados y Restauraciones El Madrileño</title>
    <meta
      name="description"
      content="Descubra lo que nuestros clientes dicen sobre nuestro trabajo de restauración de muebles antiguos en Madrid. Más de 100 clientes satisfechos."
    />
  </>
); 