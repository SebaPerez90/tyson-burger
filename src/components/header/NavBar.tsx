"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import OpenStatusBadge from "./OpenStatusBadge";

const links = [
  { href: "/menu", label: "Menú" },
  { href: "/promos", label: "Promos" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const isDetail = pathname.startsWith("/menu/") && pathname !== "/menu";
  if (isDetail) return null;

  return (
    <header className="sticky bg-foreground/60 top-0 w-full z-50 px-10 sm:px-16 lg:px-24 py-4 backdrop-blur-xl shadow-md">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" className="flex items-center cursor-pointer">
                <div className=" size-10 rounded-full">
                  <Image
                    priority
                    className="size-full object-cover saturate-150"
                    src="/logo-transparent.webp"
                    alt="Tyson Burger Logo"
                    width={50}
                    height={50}
                  />
                </div>
                <span className="font-baloo font-bold text-white">
                  Tyson Burger
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ir al inicio</p>
            </TooltipContent>
          </Tooltip>

          {/* Navegación */}
          <nav className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500 pb-1"
                      : "text-background hover:text-background/70"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <OpenStatusBadge />
        </div>
      </div>
    </header>
  );
};
