"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface AddOrderBtnsProps {
  total: number; // suma que viene del padre
}

const AddOrderBtns = ({ total }: AddOrderBtnsProps) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (count > 0) {
      const cartData = {
        quantity: count,
        total,
        date: new Date().toISOString(),
      };
      localStorage.setItem("userCart", JSON.stringify(cartData));
    }
  };

  return (
    <div className="flex items-center justify-center gap-10 fixed bottom-10 mx-auto left-0 right-0">
      {/* CONTADOR */}
      <div className="flex items-center bg-secondary border border-white/30 rounded-full p-[0.3rem_0rem!important]  text-black overflow-hidden">
        <Button
          onClick={handleDecrement}
          variant={"secondary"}
          className="text-5xl relative -top-1.5 hover:bg-inherit hover:text-zinc-700 antialiased"
        >
          –
        </Button>
        <span className="font-medium mx-4 text-sm">{count}u</span>
        <Button
          onClick={handleIncrement}
          variant={"secondary"}
          className="text-5xl relative -top-1.5 hover:bg-inherit hover:text-zinc-700 antialiased"
        >
          +
        </Button>
      </div>

      {/* BOTÓN AGREGAR */}
      <Button
        onClick={handleAddToCart}
        variant={"destructive"}
        className="flex items-center justify-center rounded-full p-[1.4rem_3rem!important]"
      >
        Agregar
        <span className="font-semibold text-lg">${total.toLocaleString()}</span>
      </Button>
    </div>
  );
};

export default AddOrderBtns;
