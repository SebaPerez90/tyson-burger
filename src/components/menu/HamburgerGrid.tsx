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
    },
  }));

  return (
    <section id="burgers-section">
      <SectionTitle title="Nuestras Hamburguesas" subtitle="(incluyen papas)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {normalizedBurgers.map((item) => (
          <HamburgerCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HamburgerGrid;
