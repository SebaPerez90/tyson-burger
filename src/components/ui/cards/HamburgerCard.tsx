"use client";

import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { noStockStyle } from "@/src/constants/noStockStyle";

const HamburgerCard = ({ item }: { item: HamburgerItem }) => {
  const router = useRouter();
  const noStock = item.stock < 10;

  // 👉 Detectar día actual (Argentina)
  const argentinaTime = new Date(new Date().toLocaleString("es-AR"));

  const day = argentinaTime.getDay();

  return (
    <div
      key={item.id}
      className={`${
        noStock && noStockStyle
      } bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/15 flex flex-row lg:flex-col justify-between cursor-pointer h-[250px] md:h-auto active:scale-[0.98] active:brightness-90 transition-all select-none active:from-[#310000] active:to-[#430000]`}
      onClick={() =>
        router.push(`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`)
      }
    >
      {/* IMAGE */}
      <div className="p-2 md:p-0 lg:p-4 w-1/2 md:w-[70%] lg:w-full h-auto lg:h-[400px]">
        <div className="overflow-hidden rounded-2xl md:rounded-none lg:rounded-2xl w-full h-full">
          <Image
            width={400}
            height={208}
            src={item.image}
            alt={item.name}
            loading="eager"
            className="object-cover w-full h-full saturate-[1.2] transition-all duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="p-3 lg:p-6 lg:pt-0 flex flex-col justify-between grow z-40">
        <div>
          <span className="text-lg md:text-xl lg:text-3xl text-orange-100 font-bold mb-3 block">
            {item.name}
          </span>

          {/* INGREDIENTES */}
          <ul className="flex flex-col w-max pb-2 marker:text-green-500 text-[10px] text-white/60 lg:block list-disc list-inside lg:text-sm ">
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ACA TRABAJAMOS LOS DESCUENTOS, REVISAR ESTO DESPUES */}
        {/* Precio + Botones */}
        <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-white/10 lg:h-auto lg:min-h-[62px]">
          <div className="flex flex-row items-center gap-0.5">
            <span className="text-xl font-bold font-baloo text-white">
              $
              {(() => {
                const basePrice = item.price.simple;

                // 👉 Lunes (1), Martes (2), Miércoles (3) → +10%
                if (day === 1 || day === 2 || day === 3) {
                  const increasedPrice = basePrice * 1.1;
                  return Math.round(increasedPrice).toLocaleString("es-AR");
                }

                // 👉 Si tiene descuento (jueves y viernes ya lo manejás arriba)
                if (item.discount && item.discount > 0) {
                  return item.discountedPrices?.simple;
                }

                // 👉 Normal
                return basePrice.toLocaleString("es-AR");
              })()}
            </span>

            {item.discount && item.discount > 0 ? (
              <span className="text-xs opacity-40 ml-1 text-white line-through">
                ${item.price.simple.toLocaleString("es-AR")}
              </span>
            ) : null}

            {item.discount && item.discount > 0 ? (
              <span className="text-[10px] ml-1 lg:ml-0 px-0.5 py-0.5 lg:px-2 lg:py-2 bg-green-600/40 text-green-400 rounded-full w-max">
                {item.discount}% OFF
              </span>
            ) : null}
          </div>

          <Link
            className="hidden lg:block"
            href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <Button
              variant="destructive"
              size="lg"
              className="w-full rounded-full cursor-pointer shadow-lg hover:scale-[1.02] transition-transform mt-3"
            >
              Armar pedido 🍔
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerCard;
