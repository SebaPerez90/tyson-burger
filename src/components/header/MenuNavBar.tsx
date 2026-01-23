"use client";

import { useEffect, useState } from "react";

const MenuNavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("burgers-section");

  const menuSections = [
    { id: "burgers-section", label: "Burgers" },
    { id: "starters-section", label: "Entradas" },
    // { id: "drinks-section", label: "Bebidas" },
    // { id: "deserts-section", label: "Postres" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }, // 40% visible = sección activa
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <ul className="flex justify-center gap-10 py-5 text-sm font-medium text-white">
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
      </ul>
    </nav>
  );
};

export default MenuNavBar;
