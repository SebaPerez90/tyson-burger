"use client";

import { useEffect, useState } from "react";
import Cart from "./Cart";

const CartContainer = () => {
  const [clientOrder, setClientOrder] = useState<Order[]>([]);

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

  console.log(clientOrder.length);

  return (
    //
    <div
      className={`${
        clientOrder.length === 0 || !clientOrder
          ? "hidden"
          : "fixed block cursor-pointer top-188 right-4 z-50"
      } `}
    >
      {/* wrapper para el ícono y badge */}
      <span
        className="
              absolute bottom-11 -right-2 z-60
              bg-red-600 text-white text-[13px] font-semibold 
              h-8 w-8 rounded-full 
              flex items-center justify-center
              shadow-sm border border-white/70
            "
      >
        {clientOrder.length}
      </span>

      <Cart clientOrder={clientOrder} />
    </div>
  );
};

export default CartContainer;
