import { Button } from "@/src/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PromosPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 h-[50vh] flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center text-white">
        Promociones Especiales
      </h1>
      <p className="text-center text-gray-200">
        ¡Próximamente más detalles sobre nuestras promociones!
      </p>
      <div className="flex gap-2 items-center  w-max mx-auto mt-15">
        <Link href="/menu">
          <Button variant={"link"} className="text-white">
            <ArrowLeft />
            Volver al inicio
          </Button>
        </Link>

        <Link href="/">
          <Button size={"xl"} variant={"destructive"}>
            Ir al menú 🍔
          </Button>
        </Link>
      </div>
    </main>
  );
}
