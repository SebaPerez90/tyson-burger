import { applyDiscount } from "@/src/utils/applyDiscount";
import SectionTitle from "./SectionTitle";
import mockBurgersItems from "@/src/mockup/burger.json";
import HamburgerCard from "../ui/cards/HamburgerCard";

const HamburgerGrid = () => {
  const burgersWithDiscount = mockBurgersItems.map((burger) => {
    let discount = 0;

    if (burger.name.includes("Tyson")) discount = 15;
    else if (burger.name.includes("Bacon")) discount = 10;
    else if (burger.name.includes("Cheese")) discount = 5;

    // 🔁 Aplicamos el descuento a cada tamaño (simple/doble/triple)
    const discountedPrices = {
      simple: applyDiscount(burger.price.simple, discount).finalPrice,
      doble: applyDiscount(burger.price.doble, discount).finalPrice,
      triple: applyDiscount(burger.price.triple, discount).finalPrice,
    };

    return {
      ...burger,
      discountedPrices,
      discount,
    };
  });

  return (
    <section id="burgers-section">
      <SectionTitle title="Nuestras Hamburguesas" subtitle="(incluyen papas)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {burgersWithDiscount.map((item) => (
          <HamburgerCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HamburgerGrid;
