import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

const HamburgerCard = ({ item }: { item: HamburgerItem }) => {
  return (
    <div
      key={item.id}
      className="bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/5 flex flex-row lg:flex-col justify-between"
      //   "sm:bg-transparent sm:shadow-none sm:border-none sm:rounded-none sm:w-full sm:px-4 sm:py-2"
      // }
    >
      {/* IMAGE */}
      <div className="p-4a lg:p-4 w-[70%] lg:w-full">
        <div className="overflow-hidden lg:rounded-2xl w-full h-full">
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
      <div className="p-3  lg:p-6 lg:pt-0 flex flex-col justify-between grow">
        <div>
          <span className="text-lg md:text-xl lg:text-3xl text-orange-100 font-bold mb-3 block">
            {item.name}
          </span>

          {/* INGREDIENTES */}
          <ul className="flex flex-col marker:text-green-500 text-[10px] text-white/60 lg:block list-disc list-inside lg:text-sm">
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio + Botones */}
        <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-white/10 min-h-[82px]">
          <div className="flex flex-row items-center lg:items-start lg:flex-col gap-0.5">
            <span className="text-xl font-bold font-baloo text-white">
              ${item.price.simple.toLocaleString()}
            </span>

            <span className="text-xs opacity-40 ml-1 text-white line-through">
              $11.000
            </span>

            <span className="text-[10px] ml-1 lg:ml-0 px-0.5 py-0.5 lg:px-2 lg:py-2 bg-green-600/40 text-green-400 rounded-full w-max">
              18% OFF
            </span>
          </div>

          <Link href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
            {/* <Link href={`/menu/${item.slug}`}> */}
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
