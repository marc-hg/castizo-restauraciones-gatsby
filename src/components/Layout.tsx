import React, { useState } from "react";
import { Link } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Dorados y Restauraciones El Madrileño
          </h1>
          <p className="text-xl text-center mt-2">
            Artesanía y Tradición en Restauración de Muebles en toda España
          </p>
          <Link to="/contacto" className="block mt-6 text-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Contáctanos Ahora
            </button>
          </Link>
        </div>
      </header>

      <nav className="bg-amber-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold">
                El Madrileño
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-amber-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/servicios" className="text-white hover:text-amber-200">
                Servicios
              </Link>
              <Link
                to="/casos-de-exito"
                className="text-white hover:text-amber-200"
              >
                Trabajos Realizados
              </Link>
              <Link
                to="/sobre-nosotros"
                className="text-white hover:text-amber-200"
              >
                Sobre Nosotros
              </Link>
              <Link to="/contacto" className="text-white hover:text-amber-200">
                Contacto
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/servicios"
                className="block text-white hover:text-amber-200 py-2"
              >
                Servicios
              </Link>
              <Link
                to="/casos-de-exito"
                className="block text-white hover:text-amber-200 py-2"
              >
                Trabajos Realizados
              </Link>
              <Link
                to="/sobre-nosotros"
                className="block text-white hover:text-amber-200 py-2"
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/contacto"
                className="block text-white hover:text-amber-200 py-2"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p>WhatsApp/Phone: 698 12 62 36</p>
              <p>Email: castizorestauraciones@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/servicios" className="hover:text-amber-200">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/casos-de-exito" className="hover:text-amber-200">
                    Trabajos Realizados
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-amber-200">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horario</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="text-xs text-gray-300 space-y-2 mb-6 max-w-4xl mx-auto">
              <p>
                Los precios pueden variar según la complejidad del trabajo, el
                estado de la pieza y los materiales necesarios. Todos los
                presupuestos son personalizados.
              </p>
              <p>
                Las imágenes mostradas son ejemplos de trabajos anteriores y no
                garantizan resultados idénticos. Cada pieza es única y el
                resultado final puede variar.
              </p>
              <p>
                El tiempo de entrega es estimado y puede variar según la carga
                de trabajo y la complejidad del proyecto.
              </p>
              <p>
                No nos hacemos responsables de daños preexistentes o deterioros
                naturales de las piezas. Se recomienda informar de cualquier
                condición especial de la pieza antes de iniciar el trabajo.
              </p>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Dorados y Restauraciones El
              Madrileño. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
