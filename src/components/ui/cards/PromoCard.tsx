"use client";

import Image from "next/image";
import { Button } from "../button";
import { noStockStyle } from "@/src/constants/noStockStyle";
import { generateShortId } from "@/src/utils/uuidGenerator";
import { useState } from "react";

const PromoCard = ({ item }: { item: PromoItem }) => {
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
      } bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/15 flex flex-col justify-between h-auto `}
    >
      {/* IMAGE */}
      <div className="p-2 md:p-0 lg:p-4 w-full h-auto">
        <div className="overflow-hidden rounded-2xl md:rounded-none lg:rounded-2xl size-full">
          <Image
            width={500}
            height={500}
            src={item.image}
            alt={item.name}
            loading="eager"
            className="object-cover size-full saturate-[1.2]"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="p-3 lg:p-6 lg:pt-0 flex flex-col justify-between grow z-40">
        <div>
          <span className="text-lg md:text-xl lg:text-3xl text-orange-100 font-bold mb-3 block">
            {item.name} -
            <span className="text-xs text-white font-light ml-2">
              (no se puede modificar)
            </span>
          </span>

          {/* INGREDIENTES */}
          <ul className="flex flex-col w-max pb-2 marker:text-green-500 text-[10px] text-white/60 lg:block list-disc list-inside lg:text-sm ">
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio + Botones */}
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
                {count} combo
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

export default PromoCard;
