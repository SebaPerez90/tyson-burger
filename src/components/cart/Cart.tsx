import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import StatusBadge from "@/src/components/header/StatusBadge";
import DeliveryToggle from "./DeliveryToggle";
import EmptyCart from "./EmptyCart";
import Checkout from "./Checkout";
import ProductCheckout from "./ProductCheckout";
import CloseSheetModal from "../ui/modals/CloseSheetModal ";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [isDelivery, setIsDelivery] = useState(true);
  const [clientOrder, setClientOrder] = useState<Order[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    const raw = localStorage.getItem("clientOrder");
    if (raw) {
      try {
        const data = JSON.parse(raw);
        setClientOrder(data);
      } catch (err) {
        console.error("clientOrder malformed", err);
      }
    }
  }, []);

  useEffect(() => {
    const updateClientOrder = () => {
      const raw = localStorage.getItem("clientOrder");
      const parsed = raw ? JSON.parse(raw) : [];
      setClientOrder(parsed ?? []);
    };

    window.addEventListener("client-order-updated", updateClientOrder);
    return () => {
      window.removeEventListener("client-order-updated", updateClientOrder);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/menu") setOpen(false);
    if (pathname === "/promos") setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <PiShoppingCartSimpleBold
          size={23}
          className="text-background hover:text-red-500 transition-colors cursor-pointer"
        />
      </SheetTrigger>

      <SheetContent
        aria-describedby={undefined}
        className="w-[800px] z-50 bg-zinc-900 border-0 py-10 px-16"
      >
        {clientOrder.length === 0 || !clientOrder ? (
          <EmptyCart setOpen={setOpen} />
        ) : (
          <>
            {open && (
              <div className="fixed w-full h-dvh left-0 top-0 bg-transparent cursor-default z-30" />
            )}
            <div className="flex flex-col gap-5 overflow-y-scroll px-10 pb-10 z-50">
              <SheetHeader>
                {/* close sheet modal */}
                <CloseSheetModal setOpen={setOpen} />

                <SheetTitle className="text-white flex justify-between items-center w-full">
                  <span>
                    Pedido {isDelivery ? "de Delivery" : "para Retirar"}
                  </span>

                  {/* work status badge */}
                  <StatusBadge />
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
