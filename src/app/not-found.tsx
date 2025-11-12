// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main
      data-not-found
      className="flex flex-col items-center justify-center min-h-screen text-center bg-linear-to-b from-black via-neutral-900 to-black text-white px-6"
    >
      <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500">
        <UtensilsCrossed className="w-16 h-16 text-red-500 animate-pulse" />
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="text-gray-400 max-w-md text-lg">
          Ups... parece que esta página no existe o fue movida. Pero no te
          preocupes, ¡todavía podés seguir disfrutando de nuestras burgers!
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <Link href="/">
          <Button variant="link" className="text-white">
            <ArrowLeft />
            Volver al inicio
          </Button>
        </Link>
        <Link href="/menu">
          <Button size={"xl"} variant={"destructive"}>
            Ir al menú 🍔
          </Button>
        </Link>
      </div>
    </main>
  );
}
