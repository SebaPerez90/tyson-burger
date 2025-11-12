"use client";

import { useEffect, useState } from "react";

const MenuNavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("burgers-section");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // 40% visible = sección activa
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0  z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <ul className="flex justify-center gap-10 py-5 text-sm font-medium text-white">
        <li>
          <a
            href="#burgers-section"
            className={`transition-colors duration-200 ${
              activeSection === "burgers-section"
                ? "text-red-400"
                : "hover:text-red-400"
            }`}
          >
            Burgers
          </a>
        </li>
        <li>
          <a
            href="#starters-section"
            className={`transition-colors duration-200 ${
              activeSection === "starters-section"
                ? "text-red-400"
                : "hover:text-red-400"
            }`}
          >
            Entradas
          </a>
        </li>
        <li>
          <a
            href="#drinks-section"
            className={`transition-colors duration-200 ${
              activeSection === "drinks-section"
                ? "text-red-400"
                : "hover:text-red-400"
            }`}
          >
            Bebidas
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavBar;
