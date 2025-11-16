import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { IoCartOutline } from "react-icons/io5";

import DeliveryToggle from "./DeliveryToggle";
import EmptyCart from "./EmptyCart";
import Checkout from "./Checkout";
import ProductCheckout from "./ProductCheckout";
import CloseSheetModal from "../ui/modals/CloseSheetModal ";
import OpenStatusBadge from "../header/OpenStatusBadge";

const Cart = ({ clientOrder }: { clientOrder: Order[] }) => {
  const [open, setOpen] = useState(false);
  const [isDelivery, setIsDelivery] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/menu") setOpen(false);
    if (pathname === "/promos") setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="bg-background flex items-center gap-2 rounded-xl px-6 py-3.5">
          <IoCartOutline size={24} className="relative -top-0.5" />
          <span className="font-medium font-baloo">Ver carrito</span>
        </div>
      </SheetTrigger>

      <SheetContent
        aria-describedby={undefined}
        className="w-full lg:w-[800px] z-50 bg-zinc-900 border-0 py-10 md:px-16 px-5"
      >
        {clientOrder.length === 0 || !clientOrder ? (
          <EmptyCart setOpen={setOpen} />
        ) : (
          <>
            {open && (
              <div className="fixed w-full h-dvh left-0 top-0 bg-transparent cursor-default z-30" />
            )}
            <div className=" flex flex-col gap-5 overflow-y-scroll  md:px-10 sm:px-4 px-2 pb-10 z-50">
              <SheetHeader>
                {/* close sheet modal */}
                <CloseSheetModal setOpen={setOpen} />

                <SheetTitle className="text-white flex justify-between items-center w-full">
                  <span>
                    Pedido {isDelivery ? "de Delivery" : "para Retirar"}
                  </span>

                  {/* work status badge */}
                  <OpenStatusBadge />
                </SheetTitle>
              </SheetHeader>

              {/* delivery toggle button */}
              <DeliveryToggle
                isDelivery={isDelivery}
                setIsDelivery={setIsDelivery}
              />
              {/* orders detail */}
              <ProductCheckout clientOrder={clientOrder} />

              {/* checkout delivery data */}
              <Checkout clientOrder={clientOrder} isDelivery={isDelivery} />
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
