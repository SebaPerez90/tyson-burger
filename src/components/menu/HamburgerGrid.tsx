import SectionTitle from "./SectionTitle";
import mockBurgersItems from "@/src/mockup/burger.json";
import HamburgerCard from "../ui/cards/HamburgerCard";
import { burgerDiscount } from "@/src/utils/burgerDiscount";

const HamburgerGrid = () => {
  const burgersWithDiscount = burgerDiscount(mockBurgersItems);

  const normalizedBurgers = burgersWithDiscount.map((item) => ({
    ...item,
    discountedPrices: {
      simple:
        item.discountedPrices?.simple ??
        item.price.simple.toLocaleString("es-AR"),
      doble:
        item.discountedPrices?.doble ??
        item.price.doble.toLocaleString("es-AR"),
      triple:
        item.discountedPrices?.triple ??
        item.price.triple.toLocaleString("es-AR"),
      cuadruple:
        item.discountedPrices?.cuadruple ??
        (item.price.cuadruple !== undefined
          ? item.price.cuadruple.toLocaleString("es-AR")
          : ""),
      quintuple:
        item.discountedPrices?.quintuple ??
        (item.price.quintuple !== undefined
          ? item.price.quintuple.toLocaleString("es-AR")
          : ""),
    },
  }));

  return (
    <section id="burgers-section">
      <SectionTitle title="Hamburguesas + Papas Fritas" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {normalizedBurgers.map((item) => (
          <HamburgerCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HamburgerGrid;
