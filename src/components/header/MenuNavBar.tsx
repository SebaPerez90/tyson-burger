"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MenuNavBar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("burgers-section");
  const [isAtTop, setIsAtTop] = useState(true);

  const menuSections = [
    { id: "burgers-section", label: "Burgers" },
    { id: "starters-section", label: "Entradas" },
    // { id: "drinks-section", label: "Bebidas" },
    // { id: "deserts-section", label: "Postres" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 }, // 20% visible = sección activa
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  if (isAtTop) return null;

  // 🔴 Si está en /promos → solo botón volver al menú
  if (pathname === "/promos") {
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 
transition-transform duration-300 ease-in-out will-change-transform
${isAtTop ? "-translate-y-full" : "translate-y-0"}`}
      >
        <ul className="flex justify-end items-center p-5 text-sm font-medium text-white">
          <li>
            <a
              href="https://tyson-burger.vercel.app/menu"
              className="transition-colors duration-200 hover:text-red-500"
            >
              ← Volver al Menú
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 
transition-transform duration-300 ease-in-out will-change-transform
${isAtTop ? "-translate-y-full" : "translate-y-0"}`}
    >
      <ul className="flex justify-between items-center px-10 py-5 text-sm font-medium text-white">
        {/* Secciones - Izquierda */}
        <div className="flex gap-10">
          {menuSections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors duration-200 ${
                  activeSection === id ? "text-red-500" : "hover:text-red-500"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </div>

        {/* Promos - Derecha */}
        <li className="px-4 py-1.5 rounded-md bg-red-500">
          <a
            href="https://tyson-burger.vercel.app/promos"
            className="transition-colors duration-200 text-white"
          >
            Promos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavBar;
