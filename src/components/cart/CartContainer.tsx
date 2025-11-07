"use client";

import { useEffect, useState } from "react";
import Cart from "./Cart";
import { usePathname } from "next/navigation";

const CartContainer = () => {
  const pathname = usePathname();
  const [clientOrder, setClientOrder] = useState<Order[]>([]);

  const isDetail = pathname.startsWith("/menu/") && pathname !== "/menu";

  const EXP_MIN = 120; // 2horas

  const isExpired = () => {
    const timeStamp = localStorage.getItem("clientOrder_ts");
    if (!timeStamp) return false;
    const diff = Date.now() - Number(timeStamp);
    return diff > EXP_MIN * 60_000;
  };

  const hardClear = () => {
    localStorage.removeItem("clientOrder");
    localStorage.removeItem("clientOrder_ts");
    setClientOrder([]);
  };

  const loadOrder = () => {
    if (isExpired()) return hardClear();

    const raw = localStorage.getItem("clientOrder");
    if (!raw) return setClientOrder([]);

    try {
      const parsed = JSON.parse(raw);
      setClientOrder(parsed ?? []);
    } catch {
      hardClear();
    }
  };

  // mount
  useEffect(() => {
    loadOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // listen events
  useEffect(() => {
    const updateClientOrder = () => {
      loadOrder();
    };

    window.addEventListener("client-order-updated", updateClientOrder);

    return () =>
      window.removeEventListener("client-order-updated", updateClientOrder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDetail) return null;

  return (
    <div
      className={`${
        clientOrder.length === 0 || !clientOrder
          ? "hidden"
          : "fixed sm:scale-100 scale-75 block cursor-pointer top-[93%] sm:top-[90%] sm:right-4 right-0 z-50 max-w-[1400px]"
      } `}
    >
      {/* wrapper para el ícono y badge */}
      <span
        className="
              absolute bottom-11 -right-2 z-60
              bg-red-600 text-white text-[13px] font-semibold 
              h-8 w-8 rounded-full 
              flex items-center justify-center
              shadow-sm border border-white/40
            "
      >
        {clientOrder.length}
      </span>

      <Cart clientOrder={clientOrder} />
    </div>
  );
};

export default CartContainer;
