"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Logo / Branding */}
        <div className="flex flex-col items-center space-y-2  ">
          <div className="rounded-full border border-white/10 overflow-hidden h-14 w-14">
            <Image
              src="/logo.webp"
              alt="Tyson Burger Logo"
              width={50}
              height={50}
              className="object-cover size-full"
            />
          </div>
          <p className="text-sm text-white  w-full text-center">
            Tyson Burger <br />
          </p>
        </div>

        {/* Contacto y direcciones */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">Contacto</h3>
          <p className="text-sm text-gray-400">📍 Calle 1 626, Berazategui</p>
          <p className="text-sm text-gray-400">📞 (011) 3283-0604</p>
          <p className="text-sm text-gray-400">✉️ tysonburguer.co@gmail.com</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">Explorar</h3>
          <Link
            href="/menu"
            className="text-sm text-gray-400 hover:text-red-500 transition"
          >
            Ver Menú
          </Link>
          <Link
            href="/promociones"
            className="text-sm text-gray-400 hover:text-red-500 transition"
          >
            Promociones
          </Link>
          <Link
            href="/#faq"
            className="text-sm text-gray-400 hover:text-red-500 transition"
          >
            Preguntas Frecuentes
          </Link>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tyson Burger. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
