import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { SheetHeader, SheetTitle } from "@/src/components/ui/sheet";

const EmptyCart = ({ setOpen }: { setOpen?: (open: boolean) => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
      <SheetHeader>
        <SheetTitle className="text-3xl font-semibold text-white tracking-tight">
          Tu carrito está vacío… por ahora 😏
        </SheetTitle>
      </SheetHeader>

      <Image
        src="/empty-cart.webp"
        width={260}
        height={260}
        alt="empty-cart"
        className="opacity-70"
      />

      <p className="text-stone-300 text-base">
        Agregá tus favoritos y empezá tu pedido
      </p>

      <div className="flex flex-col gap-2 mt-4">
        <Link href="/menu" onClick={() => setOpen?.(false)}>
          <Button size="lg" variant={"secondary"} className="px-10">
            Ir al menú
          </Button>
        </Link>

        <Link href="/promos" onClick={() => setOpen?.(false)}>
          <Button
            variant="link"
            className="text-sm text-stone-400 hover:text-stone-200"
          >
            Ver promos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
