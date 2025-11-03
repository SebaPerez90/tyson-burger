import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import StatusBadge from "@/src/components/header/StatusBadge";
import ConfirmOrderModal from "./ui/modals/ConfirmOrderModal";
import DeliveryToggle from "./DeliveryToggle";
import OrderDetail from "./cart/OrderDetail";
import EmptyCart from "./cart/EmptyCart";

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
        console.log(data);
        setClientOrder(data);
      } catch (err) {
        console.error("clientOrder malformed", err);
      }
    }
  }, []);

  useEffect(() => {
    if (pathname === "/menu") setOpen(false);
    if (pathname === "/promos") setOpen(false);
  }, [pathname]);
  // const generateShortId = (length = 5) => {
  //   const array = new Uint32Array(1);
  //   crypto.getRandomValues(array);
  //   return Array.from(array)[0].toString(36).toUpperCase().slice(0, length);
  // };

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
        {clientOrder.length === 0 ? (
          <EmptyCart setOpen={setOpen} />
        ) : (
          <>
            <SheetHeader>
              <SheetTitle className="text-white flex justify-between items-center w-full">
                <span>Pedido para {isDelivery ? "Delivery" : "Retirar"}</span>
                <StatusBadge />
              </SheetTitle>
            </SheetHeader>
            <DeliveryToggle
              isDelivery={isDelivery}
              setIsDelivery={setIsDelivery}
            />
            <OrderDetail clientOrder={clientOrder} />

            {/* footer */}
            <div className="flex items-center gap-4 justify-center ">
              <SheetClose asChild className="text-white grow">
                <Button
                  variant={"outline"}
                  className="px-14 text-white bg-inherit hover:bg-zinc-800 hover:text-white"
                >
                  Cerrar
                </Button>
              </SheetClose>
              <ConfirmOrderModal />
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default OrderCart;
