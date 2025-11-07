"use client";

// import Image from "next/image";
import Link from "next/link";

import { FaTiktok, FaInstagram } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const socialLinks = [
  {
    label: "Tiktok",
    path: "https://www.tiktok.com/@tysonburguers",
    icon: <FaTiktok size={15} />,
  },
  {
    label: "Instagram",
    path: "https://www.instagram.com/tyson__burgers/",
    icon: <FaInstagram size={15} />,
  },
];

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* social links */}
        <div className="flex flex-col items-start gap-4 justify-center">
          <p className="text-white font-semibold text-lg">
            Siguenos en las redes
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <li key={index} className="group">
                <a
                  href={link.path}
                  aria-label="link de red social"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex flex-col justify-center items-center relative"
                >
                  <span
                    className={`${
                      link.label === "Tiktok"
                        ? "bg-zinc-800"
                        : "bg-linear-to-r from-pink-500 via-red-500 to-yellow-500"
                    } hover:duration-150 duration-150 hover:opacity-80 p-3  text-white rounded-full`}
                  >
                    {link.icon}
                  </span>
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 row-center gap-1 transition-opacity duration-150 text-custom-black dark:text-white absolute top-14 translate-x-[10%] flex items-center">
                    {link.label}
                    <HiOutlineExternalLink size={14} />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Logo / Branding */}
          {/* <div className="rounded-full border border-white/10 overflow-hidden h-14 w-14">
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
          </p> */}
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
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Tyson Burger 🍔
      </div>
    </footer>
  );
};

export default Footer;
