// "use client";

// import Image from "next/image";
// import { Button } from "../button";
// import { promosNoStockStyle } from "@/src/constants/noStockStyle";
// import { generateShortId } from "@/src/utils/uuidGenerator";
// import { useState } from "react";

// const PromoCard = ({ item }: { item: PromoItem }) => {
//   const [count, setCount] = useState(1);

//   const total = item.price * count;

//   const handleIncrement = () => setCount((prev) => prev + 1);
//   const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

//   const handleAddToCart = () => {
//     if (count > 0) {
//       const cartData = {
//         id: generateShortId(4),
//         quantity: count,
//         productName: item.name,
//         total: item.price * count,
//         image: item.image,
//       };

//       const storedCart = localStorage.getItem("clientOrder");
//       const currentCart = storedCart ? JSON.parse(storedCart) : [];

//       // push nueva orden
//       const updatedCart = [...currentCart, cartData];

//       // guarda array actualizado
//       localStorage.setItem("clientOrder", JSON.stringify(updatedCart));
//       localStorage.setItem("clientOrder_ts", Date.now().toString());

//       // notifica a listeners (Cart)
//       window.dispatchEvent(new Event("client-order-updated"));
//     }
//   };

//   const noStock = item.stock < 10;

//   return (
//     <div
//       key={item.id}
//       className={`${
//         noStock && promosNoStockStyle
//       } bg-linear-to-b from-[#1a0000] grow max-w-[500px] to-[#2b0000] rounded-2xl overflow-hidden border border-white/15 flex flex-col justify-between h-auto `}
//     >
//       {/* IMAGE */}
//       <div className="p-3 md:p-0 lg:p-4 w-full h-auto">
//         <div className="overflow-hidden rounded-md md:rounded-none lg:rounded-2xl size-full">
//           <Image
//             width={1000}
//             height={1000}
//             src={item.image}
//             alt={item.name}
//             loading="eager"
//             className="object-cover size-full saturate-[1.2]"
//           />
//         </div>
//       </div>

//       {/* BODY */}
//       <div className="p-3 lg:p-6 lg:pt-0 flex flex-col justify-between grow z-40">
//         <div>
//           <span className="text-lg lg:text-xl text-orange-200 font-bold block mb-2 leading-5">
//             {item.name}
//           </span>
//           {/* INGREDIENTES */}
//           <ul className="flex flex-col w-max pb-2 marker:text-green-500 text-[10px] text-white/80 lg:block list-disc list-inside lg:text-sm ">
//             {item.ingredients.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Botones */}
//         <div className="flex flex-col gap-2 pt-3 border-t border-white/10 ">
//           {/* CONTADOR */}
//           <div className="flex items-center bg-secondary justify-between px-6 rounded-md py-1">
//             <button
//               onClick={handleDecrement}
//               className="text-xl  hover:bg-inherit hover:text-zinc-400 antialiased cursor-pointer font-black"
//             >
//               –
//             </button>
//             <span className="font-medium pointer-events-none cursor-default text-sm">
//               {count} combo
//             </span>
//             <button
//               onClick={handleIncrement}
//               className="text-xl hover:bg-inherit hover:text-zinc-400 antialiased cursor-pointer font-black"
//             >
//               +
//             </button>
//           </div>
//           {/* BOTÓN AGREGAR */}
//           <Button
//             onClick={handleAddToCart}
//             variant={"destructive"}
//             className="flex items-center justify-center"
//           >
//             Agregar
//             <span className="font-semibold">${total.toLocaleString()}</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoCard;
'use client';

import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useArgentinaBusinessRules } from '@/src/hooks/UseArgentinaBusinessRules';

const PromoCard = ({ item }: { item: PromoItem }) => {
  const { hasSurcharge } = useArgentinaBusinessRules();
  const router = useRouter();

  return (
    <div
      key={item.id}
      style={item.stock < 10 ? { display: 'none' } : {}}
      className='bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/15 flex flex-row md:flex-col justify-between cursor-pointer h-[170px] sm:h-[300px] md:h-auto active:scale-[0.98] active:brightness-90 transition-all select-none active:from-[#310000] active:to-[#430000] w-full'
      onClick={() =>
        router.push(`/menu/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
      }>
      {/* IMAGE */}
      <div className='p-2 md:p-4 w-[60%] md:w-auto h-auto md:h-[400px]'>
        <div className='overflow-hidden rounded-2xl md:rounded-none lg:rounded-2xl size-full'>
          <Image
            width={800}
            height={800}
            src={item.image}
            alt={item.name}
            loading='eager'
            className='object-cover size-full scale-9aaa5 sm:scale-100 saturate-[1.2] transition-all duration-300 ease-in-out hover:scale-110 rounded-xl'
          />
        </div>
      </div>

      {/* BODY */}
      <div className='p-3 pl-1 lg:p-6 lg:pt-0 flex flex-col justify-between grow z-40'>
        <div>
          <span className='text-lg md:text-xl lg:text-2xl text-orange-200 font-bold mb-3 block leading-5 w-max'>
            {item.name}
          </span>

          {/* INGREDIENTES */}
          <ul className='flex flex-col w-max pb-1.5  marker:text-green-500 text-[10px] text-white/60 lg:block list-disc list-inside lg:text-sm overflow-hidden h-auto'>
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio + Botones */}
        <div className='flex flex-col gap-0.5 mt-auto pt-2 border-t border-white/10 lg:h-auto lg:min-h-[62px]'>
          <div className='flex flex-row items-center gap-0.5'>
            <span className='text-xl font-bold font-baloo text-white'>
              ${}
              {hasSurcharge
                ? (item.price * 1.1).toLocaleString()
                : item.price.toLocaleString()}
            </span>
          </div>

          <Link
            className='hidden lg:block'
            href={`/menu/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Button
              variant='destructive'
              size='lg'
              className='w-full rounded-full cursor-pointer shadow-lg hover:scale-[1.02] transition-transform mt-3'>
              Armar pedido 🍔
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
