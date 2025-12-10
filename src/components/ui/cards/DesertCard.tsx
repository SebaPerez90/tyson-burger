"use client";

import Image from "next/image";
import { useState } from "react";

import { generateShortId } from "@/src/utils/uuidGenerator";
import { Button } from "../button";
import { noStockStyle } from "@/src/constants/noStockStyle";

const DesertCard = ({ item }: { item: DesertItem }) => {
  const [count, setCount] = useState(1);

  const total = item.price * count;

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (count > 0) {
      const cartData = {
        id: generateShortId(4),
        quantity: count,
        productName: item.name,
        total: item.price * count,
        image: item.image,
      };

      const storedCart = localStorage.getItem("clientOrder");
      const currentCart = storedCart ? JSON.parse(storedCart) : [];

      // push nueva orden
      const updatedCart = [...currentCart, cartData];

      // guarda array actualizado
      localStorage.setItem("clientOrder", JSON.stringify(updatedCart));
      localStorage.setItem("clientOrder_ts", Date.now().toString());

      // notifica a listeners (Cart)
      window.dispatchEvent(new Event("client-order-updated"));
    }
  };

  const noStock = item.stock < 10;

  return (
    <div
      key={item.id}
      className={`${
        noStock && noStockStyle
      } bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/15 flex flex-row lg:flex-col justify-between h-auto lg:h-auto transition-all select-none`}
    >
      {/* IMAGE */}
      <div className="p-2 md:p-0 lg:p-4 w-1/2 md:w-[70%] lg:w-full">
        <div className="overflow-hidden rounded-2xl md:rounded-none lg:rounded-2xl w-full h-[200px] lg:h-[300px]">
          <Image
            width={400}
            height={208}
            src={item.image}
            alt={item.name}
            loading="eager"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="p-3 lg:p-6 lg:pt-0 flex flex-col justify-between grow w-full z-40">
        <span className="text-lg md:text-xl lg:text-3xl text-orange-100 font-bold mb-3 block">
          {item.name}
        </span>
        <p className="text-sm lg:text-base text-white/70 min-h-[60px]">
          {item.description}
        </p>

        {/* Precio */}
        <div className="flex flex-col gap-0.5 mt-auto pt-4 lg:h-auto lg:min-h-[82px]">
          <span className="text-xl font-bold font-baloo text-white">
            ${item.price.toLocaleString()}
          </span>

          {/* Botones */}
          <div className="flex flex-col gap-2 pt-3 border-t border-white/10 ">
            {/* CONTADOR */}
            <div className="flex items-center bg-secondary justify-between px-6 rounded-md py-1">
              <button
                onClick={handleDecrement}
                className="text-xl  hover:bg-inherit hover:text-zinc-700 antialiased cursor-pointer font-black"
              >
                –
              </button>
              <span className="font-medium pointer-events-none cursor-default text-sm">
                {count}u
              </span>
              <button
                onClick={handleIncrement}
                className="text-xl hover:bg-inherit hover:text-zinc-700 antialiased cursor-pointer font-black"
              >
                +
              </button>
            </div>
            {/* BOTÓN AGREGAR */}
            <Button
              onClick={handleAddToCart}
              variant={"destructive"}
              className="flex items-center justify-center"
            >
              Agregar
              <span className="font-semibold">${total.toLocaleString()}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesertCard;
