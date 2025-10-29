"use client";

import Link from "next/link";
import Image from "next/image";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

const links = [
  { href: "/menu", label: "Menú" },
  { href: "/promos", label: "Promos" },
  { href: "/delivery", label: "Delivery" },
];

export const Navbar = () => {
  return (
    <header className="bg-inherit shadow-md fixed top-0 left-0 w-full mx-auto px-4 sm:px-10 lg:px-12 border-b-background/40 border-b">
      <div className="flex justify-between h-16 items-center">
        {/* Logo */}
        <Link href="/" className="size-14 rounded-full overflow-hidden">
          <Image
            priority
            className="size-full object-cover"
            src="/logo.webp"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-background hover:text-background/70 font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button type="button">
          <PiShoppingCartSimpleBold size={26} className="text-background" />
        </button>
      </div>
    </header>
  );
};
