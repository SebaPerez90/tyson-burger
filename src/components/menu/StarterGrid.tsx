import StarterCard from "../ui/cards/StarterCard";
import SectionTitle from "./SectionTitle";
import mockStartersItems from "@/src/mockup/starters.json";

const StarterGrid = () => {
  return (
    <section id="starters-section">
      <SectionTitle title="Entradas calientes" subtitle="(incluyen salsa)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {mockStartersItems.map((item) => (
          <StarterCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default StarterGrid;
