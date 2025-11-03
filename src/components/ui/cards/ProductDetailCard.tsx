"use client";

import Image from "next/image";

import SubMenuAcordeon from "@/src/components/ui/acordeons/SubMenuAcordeon";
import AddOrderBtns from "@/src/components/menu/AddOrderBtns";
import { useEffect, useState } from "react";
import { parsePriceStringToNumber } from "@/src/utils/priceConverter";

type Extra = { id: string; label: string; price: string };

const ProductDetailCard = ({ product }: { product: HamburgerItem }) => {
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const basePrice = parsePriceStringToNumber(product.price);

  useEffect(() => {
    const extrasSum = selectedExtras.reduce(
      (sum, ex) => sum + parsePriceStringToNumber(ex.price),
      0
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalPrice(basePrice + extrasSum);
  }, [selectedExtras, basePrice]);

  const handleExtraChange = (extra: Extra) => {
    setSelectedExtras((prev) => {
      const exists = prev.find((e) => e.id === extra.id);
      if (exists) {
        // lo saca
        return prev.filter((e) => e.id !== extra.id);
      } else {
        // lo agrega
        return [...prev, extra];
      }
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center grow max-w-[500px] mx-auto">
        {/* Imagen */}
        <div className="w-full ">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt={product.name}
            className="rounded-2xl object-cover saturate-[1.2] size-full"
          />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col justify-center w-full mt-6">
          <h1 className="text-4xl font-bold text-orange-100 mb-4">
            {product.name}
          </h1>

          <p className="text-white/80 text-lg mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* ingredientes */}
          <h3 className="text-xl font-semibold text-white my-3">
            Ingredientes:
          </h3>
          <ul className="list-disc list-inside marker:text-green-500 text-white/70 space-y-1">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          {/* precio   */}
          <span className="text-3xl font-bold text-white mt-8">
            {product.price}
          </span>
        </div>

        {/* Acordeón de extras */}
        <SubMenuAcordeon
          selectedExtras={selectedExtras}
          onExtraChange={handleExtraChange}
        />

        {/* Nota al producto */}
        <div className="mt-10 w-full border border-white/10 rounded-2xl p-4 bg-[#1a1a1a]">
          <label
            htmlFor="note"
            className="block text-xl text-white font-medium mb-2"
          >
            Nota al producto
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Aclar&aacute; lo que necesites "
            className="w-full rounded-lg bg-transparent border border-white/20 text-white placeholder:text-white/50 p-3 outline-none resize-none focus:border-red-300 transition"
            rows={7}
          />
        </div>
      </div>

      {/* CTA´s */}
      <AddOrderBtns
        total={totalPrice * count}
        quantity={count}
        selectedExtras={selectedExtras}
        productName={product.name}
        productSize={"simple"}
        note={note}
        productImage={product.image}
        setCount={setCount}
      />
    </>
  );
};

export default ProductDetailCard;
