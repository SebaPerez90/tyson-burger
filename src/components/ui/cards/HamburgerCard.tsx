import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

const HamburgerCard = ({ item }: { item: HamburgerItem }) => {
  return (
    <div
      key={item.id}
      className="bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl  overflow-hidden  border border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)] flex flex-col justify-between"
    >
      <div className="p-4">
        <Image
          width={400}
          height={208}
          src={item.image}
          alt={item.name}
          className="object-cover rounded-2xl saturate-[1.2]"
        />
      </div>

      <div className="p-6 pt-0 flex flex-col justify-between grow">
        <div>
          <span className="text-2xl text-orange-100 font-bold mb-3">
            {item.name}
          </span>
          <ul className="list-disc list-inside mt-3 mb-4 marker:text-green-500 text-sm text-white/70">
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio + Botones */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-200">
          <span className="text-2xl font-bold font-almarai text-white">
            {item.price}
          </span>
          <Link href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform"
            >
              Ver más
              <span role="img" aria-label="hamburguesa">
                🍔
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerCard;
