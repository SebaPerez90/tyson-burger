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
import ConfirmOrderModal from "../ui/modals/ConfirmOrderModal";
import DeliveryToggle from "./DeliveryToggle";
import OrderDetail from "./OrderDetail";
import EmptyCart from "./EmptyCart";
import CheckoutDeliveryData from "./CheckoutDeliveryData";

const OrderCart = () => {
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

  // const deleteThisFn = () => {
  //   const orderId = generateShortId(5);

  //   // Fecha y hora en formato 24 horas
  //   const now = new Date();
  //   const day = now.toLocaleDateString("es-AR", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "2-digit",
  //   });
  //   const time = now.toLocaleTimeString("es-AR", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: false,
  //   });

  //   const cartData = {
  //     orderId,
  //     date: day,
  //     time,
  //   };

  //   const storedCart = localStorage.getItem("clientOrder");
  //   const currentCart = storedCart ? JSON.parse(storedCart) : [];

  //   // push nueva orden
  //   const updatedCart = [...currentCart, cartData];

  //   // guarda array actualizado
  //   localStorage.setItem("clientOrder", JSON.stringify(updatedCart));
  // };

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
        className="w-[800px] bg-zinc-900 border-0 py-10 px-16"
      >
        {clientOrder.length === 0 || !clientOrder ? (
          <EmptyCart setOpen={setOpen} />
        ) : (
          <div className="flex flex-col gap-5 overflow-y-scroll px-10 pb-10">
            <SheetHeader>
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
            <OrderDetail clientOrder={clientOrder} />

            {/* checkout delivery data */}
            <CheckoutDeliveryData />

            {/* confirm order modal */}
            <ConfirmOrderModal />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default OrderCart;
