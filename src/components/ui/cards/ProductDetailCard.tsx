"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { parsePriceStringToNumber } from "@/src/utils/priceConverter";

import SubMenuAcordeon from "@/src/components/ui/acordeons/SubMenuAcordeon";
import AddToCart from "@/src/components/menu/AddToCart";
import BurgerSizeSelector from "../../menu/BurgerSizeSelector";

type Extra = { id: string; label: string; price: string };

const ProductDetailCard = ({ product }: { product: HamburgerItem }) => {
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [burgerSize, setBurgerSize] = useState<"simple" | "doble" | "triple">(
    "simple"
  );

  useEffect(() => {
    const extrasSum = selectedExtras.reduce(
      (sum, ex) => sum + parsePriceStringToNumber(ex.price),
      0
    );
    setTotalPrice(basePrice + extrasSum);
  }, [selectedExtras, basePrice, burgerSize]);

  useEffect(() => {
    setBasePrice(parsePriceStringToNumber(String(product.price[burgerSize])));
  }, [burgerSize, product.price]);

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
    <div className="">
      <div className="flex flex-col justify-center items-center grow w-full sm:max-w-[500px] mx-auto">
        {/* Imagen */}
        <div className="w-full">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt={product.name}
            className="rounded-none sm:rounded-2xl object-cover saturate-[1.2] size-full"
          />
        </div>

        <div className="sm:px-0 px-8">
          {/* Información del producto */}
          <div className="flex flex-col justify-center w-full mt-10 sm:mt-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-orange-100 mb-4">
              {product.name}
            </h1>

            <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* ingredientes */}
            <h3 className="textlg sm:text-xl font-semibold text-white my-3">
              Ingredientes:
            </h3>
            <ul className="list-disc list-inside marker:text-green-500 text-white/70 space-y-1">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="sm:text-base text-sm">
                  {ingredient}
                </li>
              ))}
            </ul>

            {/* Tamaños de hamburguesas */}
            <BurgerSizeSelector
              burgerSize={burgerSize}
              setBurgerSize={setBurgerSize}
            />

            {/* precio   */}
            <span className="text-3xl font-bold text-white mt-8">
              ${basePrice.toLocaleString()}
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
              className="block text-lg sm:text-xl text-white font-medium mb-2"
            >
              Nota al producto
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Aclar&aacute; lo que necesites para tu hamburguesa"
              className="w-full rounded-lg bg-transparent mt-5 border border-white/20 text-white placeholder:text-white/50 p-3 outline-none resize-none focus:border-white transition placeholder:text-xs sm:placeholder:text-base"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Botones de compra y cantidad de productos */}
      <AddToCart
        total={totalPrice * count}
        quantity={count}
        selectedExtras={selectedExtras}
        productName={product.name}
        productSize={burgerSize}
        note={note}
        productImage={product.image}
        setCount={setCount}
      />
    </div>
  );
};

export default ProductDetailCard;
