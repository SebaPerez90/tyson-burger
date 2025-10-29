"use client";

import Link from "next/link";
// import { IoCartOutline } from "react-icons/io5";
import { GrCircleInformation } from "react-icons/gr";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="shrink-0 text-2xl font-bold">LOGO</span>
          </Link>

          {/* Navegación */}
          <div className="hidden md:flex space-x-8">
            <Link href="/menu" className="text-gray-700 hover:text-gray-900">
              Menú
            </Link>
            <Link href="/promos" className="text-gray-700 hover:text-gray-900">
              Promos
            </Link>
            <Link
              href="/delivery"
              className="text-gray-700 hover:text-gray-900"
            >
              Delivery
            </Link>
          </div>

          {/* Carrito */}
          <button className="relative cursor-pointer">
            {/* <IoCartOutline size={30} /> */}
            <GrCircleInformation size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};
