import DesertCard from "../ui/cards/DesertCard";
import SectionTitle from "./SectionTitle";
import mockDesertsItems from "@/src/mockup/deserts.json";

const DesertGrid = () => {
  return (
    <section id="drinks-section">
      <SectionTitle title="Postres Clásicos" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {mockDesertsItems.map((item) => (
          <DesertCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default DesertGrid;
