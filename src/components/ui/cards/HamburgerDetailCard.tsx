"use client";

import { useMemo, useState } from "react";

import { parsePriceStringToNumber } from "@/src/utils/priceConverter";
import { burgerExtras } from "@/src/constants/burgerExtras";

import SubMenuAcordeon from "@/src/components/ui/acordeons/SubMenuAcordeon";
import AddToCart from "@/src/components/menu/AddToCart";
import BurgerSizeSelector from "../../menu/BurgerSizeSelector";
import Image from "next/image";
import { specialProducts } from "@/src/constants/specialProducts";
import { specialProductExtras } from "@/src/constants/specialProductExtras";
import { slugify } from "@/src/utils/slugify";

const HamburgerDetailCard = ({ product }: { product: HamburgerItem }) => {
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);
  const [burgerSize, setBurgerSize] = useState<
    "simple" | "doble" | "triple" | "cuadruple" | "quintuple"
  >("simple");

  const productSlug = slugify(product.name);
  const productSpecialExtras = specialProductExtras[productSlug];
  const extrasToShow = productSpecialExtras ?? burgerExtras;

  // 🇦🇷 Día actual Argentina
  const argentinaTime = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  );

  const day = argentinaTime.getDay();

  // 👉 Detectar si tiene descuento
  const hasDiscount = product.discount && product.discount > 0;

  const activePrices =
    hasDiscount && product.discountedPrices
      ? product.discountedPrices
      : product.price;

  // 👉 Precio base con recargo aplicado
  const calculatedBasePrice = useMemo(() => {
    if (!activePrices) return 0;

    let price = parsePriceStringToNumber(String(activePrices[burgerSize]));

    // Lunes (1), Martes (2), Miércoles (3) → +10%
    if (day === 1 || day === 2 || day === 3) {
      price = Math.round(price * 1.1);
    }

    return price;
  }, [activePrices, burgerSize, day]);

  // 👉 Suma de extras
  const extrasSum = useMemo(() => {
    return selectedExtras.reduce(
      (sum, ex) => sum + parsePriceStringToNumber(ex.price),
      0,
    );
  }, [selectedExtras]);

  // 👉 Precio total unitario
  const totalPrice = calculatedBasePrice + extrasSum;

  const handleExtraChange = (extra: Extra) => {
    setSelectedExtras((prev) => {
      const exists = prev.find((e) => e.id === extra.id);
      if (exists) {
        return prev.filter((e) => e.id !== extra.id);
      } else {
        return [...prev, extra];
      }
    });
  };

  const isSpecialProduct = specialProducts.some(
    (p) => p.toLowerCase() === product.name.toLowerCase(),
  );

  return (
    <div>
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

        {/* Información */}
        <div className="sm:px-0 px-8">
          <div className="flex flex-col justify-center w-full mt-10 sm:mt-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-orange-100 mb-4">
              {product.name}
            </h1>

            <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <h3 className="textlg sm:text-xl font-semibold text-white my-3">
              Ingredientes:
            </h3>

            <ul className="list-disc list-inside marker:text-green-500 text-white/70 space-y-1">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="sm:text-base text-sm">
                  {ingredient}
                </li>
              ))}
              <li className="sm:text-base text-sm">INCLUYE PAPAS FRITAS</li>
            </ul>

            {!isSpecialProduct && (
              <BurgerSizeSelector
                burgerSize={burgerSize}
                setBurgerSize={setBurgerSize}
              />
            )}

            {/* 💰 Precio (UNA sola fuente de verdad) */}
            <div className="flex flex-row items-center gap-2 mt-8">
              <span className="text-3xl font-bold font-baloo text-white">
                ${totalPrice.toLocaleString("es-AR")}
              </span>

              {hasDiscount && (
                <>
                  <span className="text-sm text-white/40 line-through">
                    $
                    {parsePriceStringToNumber(
                      String(product.price[burgerSize]),
                    ).toLocaleString("es-AR")}
                  </span>

                  <span className="text-sm py-1 px-2 bg-green-600/40 text-green-400 rounded-full">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Extras */}
          {extrasToShow && extrasToShow.length > 0 && (
            <SubMenuAcordeon
              extras={extrasToShow}
              selectedExtras={selectedExtras}
              onExtraChange={handleExtraChange}
            />
          )}

          {/* Nota */}
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

      {/* Botón */}
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

export default HamburgerDetailCard;
// "use client";

// import { useEffect, useState } from "react";

// import { parsePriceStringToNumber } from "@/src/utils/priceConverter";
// import { burgerExtras } from "@/src/constants/burgerExtras";

// import SubMenuAcordeon from "@/src/components/ui/acordeons/SubMenuAcordeon";
// import AddToCart from "@/src/components/menu/AddToCart";
// import BurgerSizeSelector from "../../menu/BurgerSizeSelector";
// import Image from "next/image";
// import { specialProducts } from "@/src/constants/specialProducts";

// import { specialProductExtras } from "@/src/constants/specialProductExtras";
// import { slugify } from "@/src/utils/slugify";

// const HamburgerDetailCard = ({ product }: { product: HamburgerItem }) => {
//   const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
//   const [note, setNote] = useState("");
//   const [count, setCount] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [basePrice, setBasePrice] = useState(0);
//   const [burgerSize, setBurgerSize] = useState<
//     "simple" | "doble" | "triple" | "cuadruple" | "quintuple"
//   >("simple");

//   const productSlug = slugify(product.name);
//   const productSpecialExtras = specialProductExtras[productSlug];
//   const extrasToShow = productSpecialExtras ?? burgerExtras;

//   const activePrices =
//     product.discount && product.discount > 0
//       ? product.discountedPrices
//       : product.price;

//   useEffect(() => {
//     const extrasSum = selectedExtras.reduce(
//       (sum, ex) => sum + parsePriceStringToNumber(ex.price),
//       0,
//     );
//     setTotalPrice(basePrice + extrasSum);
//   }, [selectedExtras, basePrice, burgerSize]);

//   useEffect(() => {
//     if (activePrices)
//       setBasePrice(parsePriceStringToNumber(String(activePrices[burgerSize])));
//   }, [burgerSize, activePrices]);

//   const handleExtraChange = (extra: Extra) => {
//     setSelectedExtras((prev) => {
//       const exists = prev.find((e) => e.id === extra.id);
//       if (exists) {
//         // lo saca
//         return prev.filter((e) => e.id !== extra.id);
//       } else {
//         // lo agrega
//         return [...prev, extra];
//       }
//     });
//   };

//   return (
//     <div className="">
//       <div className="flex flex-col justify-center items-center grow w-full sm:max-w-[500px] mx-auto">
//         {/* Imagen */}
//         <div className="w-full">
//           <Image
//             width={500}
//             height={500}
//             src={product.image}
//             alt={product.name}
//             className="rounded-none sm:rounded-2xl object-cover saturate-[1.2] size-full"
//           />
//         </div>

//         <div className="sm:px-0 px-8">
//           {/* Información del producto */}
//           <div className="flex flex-col justify-center w-full mt-10 sm:mt-6">
//             <h1 className="text-2xl sm:text-4xl font-bold text-orange-100 mb-4">
//               {product.name}
//             </h1>

//             <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
//               {product.description}
//             </p>

//             {/* ingredientes */}
//             <h3 className="textlg sm:text-xl font-semibold text-white my-3">
//               Ingredientes:
//             </h3>
//             <ul className="list-disc list-inside marker:text-green-500 text-white/70 space-y-1">
//               {product.ingredients.map((ingredient, index) => (
//                 <li key={index} className="sm:text-base text-sm">
//                   {ingredient}
//                 </li>
//               ))}
//               <li className="sm:text-base text-sm">INCLUYE PAPAS FRITAS</li>
//             </ul>

//             {/* Tamaños de hamburguesas (solo productos normales) */}
//             {!specialProducts.some(
//               (p) => p.toLowerCase() === product.name.toLowerCase(),
//             ) && (
//               <BurgerSizeSelector
//                 burgerSize={burgerSize}
//                 setBurgerSize={setBurgerSize}
//               />
//             )}

//             {/* precio   */}
//             {product.discount && product.discount > 0 && activePrices ? (
//               <div className="flex  flex-row items-center gap-0.5 mt-8">
//                 <span className="text-3xl font-bold font-baloo text-white">
//                   $
//                   {product.discount && product.discount > 0
//                     ? product.discountedPrices?.[burgerSize]
//                     : product.price?.[burgerSize]?.toLocaleString("es-AR")}
//                 </span>

//                 {product.discount && product.discount > 0 && (
//                   <span className="text-sm ml-2 text-white/40 line-through">
//                     ${product.price[burgerSize]?.toLocaleString("es-AR")}
//                   </span>
//                 )}

//                 {product.discount && product.discount > 0 && (
//                   <span className="text-sm ml-1 lg:ml-0 py-0.5 px-2 lg:py-2 bg-green-600/40 text-green-400 rounded-full w-max">
//                     {product.discount}% OFF
//                   </span>
//                 )}
//               </div>
//             ) : (
//               activePrices && (
//                 <span className="text-3xl font-bold text-white mt-8">
//                   ${activePrices[burgerSize]?.toLocaleString("es-AR")}
//                 </span>
//               )
//             )}
//           </div>

//           {/* Acordeón de extras (no mostrar en productos especiales) */}
//           {extrasToShow && extrasToShow.length > 0 && (
//             <SubMenuAcordeon
//               extras={extrasToShow}
//               selectedExtras={selectedExtras}
//               onExtraChange={handleExtraChange}
//             />
//           )}

//           {/* Nota al producto */}
//           <div className="mt-10 w-full border border-white/10 rounded-2xl p-4 bg-[#1a1a1a]">
//             <label
//               htmlFor="note"
//               className="block text-lg sm:text-xl text-white font-medium mb-2"
//             >
//               Nota al producto
//             </label>
//             <textarea
//               id="note"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               placeholder="Aclar&aacute; lo que necesites para tu hamburguesa"
//               className="w-full rounded-lg bg-transparent mt-5 border border-white/20 text-white placeholder:text-white/50 p-3 outline-none resize-none focus:border-white transition placeholder:text-xs sm:placeholder:text-base"
//               rows={3}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Botones de compra y cantidad de productos */}
//       <AddToCart
//         total={totalPrice * count}
//         quantity={count}
//         selectedExtras={selectedExtras}
//         productName={product.name}
//         productSize={burgerSize}
//         note={note}
//         productImage={product.image}
//         setCount={setCount}
//       />
//     </div>
//   );
// };

// export default HamburgerDetailCard;
