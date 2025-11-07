import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

const HamburgerCard = ({ item }: { item: HamburgerItem }) => {
  return (
    <div
      key={item.id}
      className="bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)] flex flex-col justify-between"
    >
      <div className="p-4">
        <div className="overflow-hidden rounded-2xl">
          <Image
            width={400}
            height={208}
            src={item.image}
            alt={item.name}
            loading="eager"
            className="object-cover saturate-[1.2] transition-all duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <div className="p-6 pt-0 flex flex-col justify-between grow">
        <div>
          <span className="text-3xl text-orange-100 font-bold mb-3">
            {item.name}
          </span>
          <ul className="list-disc list-inside mt-8 mb-4 marker:text-green-500 text-sm text-white/70">
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio + Botones */}
        <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-white/10 min-h-[82px]">
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-bold font-baloo text-white">
              ${item.price.simple.toLocaleString()}
            </span>

            <span className="text-xs opacity-40 ml-1 text-white line-through">
              $11.000
            </span>

            <span className="text-[10px] px-2 py-2px bg-green-600/40 text-green-400 rounded-full w-fit">
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
