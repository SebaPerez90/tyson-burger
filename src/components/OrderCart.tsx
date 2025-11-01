import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Button } from "./ui/button";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import StatusBadge from "@/src/components/header/StatusBadge";
import ConfirmOrderModal from "./ui/modals/ConfirmOrderModal";
import DeliveryToggle from "./DeliveryToggle";

const OrderCart = () => {
  const [isDelivery, setIsDelivery] = useState(true);
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
    <Sheet>
      <SheetTrigger asChild>
        <PiShoppingCartSimpleBold
          size={26}
          className="text-background hover:text-red-500 transition-colors cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className="w-[800px] bg-zinc-900 border-0 py-10 px-16">
        <SheetHeader>
          <SheetTitle className="text-white flex justify-between items-center w-full">
            <span>Pedido para {isDelivery ? "Delivery" : "Retirar"}</span>
            <StatusBadge />
          </SheetTitle>
        </SheetHeader>
        <DeliveryToggle isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
        <div className="grid flex-1 auto-rows-min gap-6 px-4"></div>

        {/* footer */}
        {/* <div className="flex items-center gap-7 justify-center">
          <SheetClose asChild>
            <Button
              variant={"outline"}
              className="px-14 text-white bg-inherit hover:bg-zinc-800 hover:text-white"
            >
              Cerrar
            </Button>
          </SheetClose>
          <ConfirmOrderModal />
        </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default OrderCart;
