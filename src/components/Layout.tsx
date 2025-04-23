import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta
          property="og:title"
          content="Dorados y Restauraciones El Madrileño - Restauración de Muebles"
        />
        <meta
          property="og:description"
          content="Expertos en restauración de muebles, reproducción de muebles, dorados con pan de oro, pulido de bronze y restauración de casas en A Coruña y en toda España"
        />
        <meta
          property="og:image"
          content="https://castizorestauraciones.com/icon.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://castizorestauraciones.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Dorados y Restauraciones El Madrileño
          </h1>
          <h2 className="text-xl text-center mt-2">
            Restauración de Muebles en A Coruña y en toda España
          </h2>
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
              <p className="mt-2">
                Rúa José Baldomir, 6, bajo
                <br />
                15010 A Coruña, España
              </p>
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
          <div className="mt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Castizo Restauraciones - Restaurador
              de Muebles en A Coruña
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
