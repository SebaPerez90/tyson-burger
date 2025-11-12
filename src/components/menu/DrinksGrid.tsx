import DrinkCard from "../ui/cards/DrinkCard";
import SectionTitle from "./SectionTitle";
import mockDrinksItems from "@/src/mockup/drinks.json";

const DrinksGrid = () => {
  return (
    <section id="drinks-section">
      <SectionTitle title="Bebidas" subtitle="(sabores originales)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {mockDrinksItems.map((item) => (
          <DrinkCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default DrinksGrid;
