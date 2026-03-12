import promos from "@/src/mockup/promos.json";
import PromoCard from "../ui/cards/PromoCard";
import SectionTitle from "./SectionTitle";

const PromosGrid = () => {
  return (
    <section id="promos-section">
      <SectionTitle
        title="PROMOCIONES"
        subtitle="LOS COMBOS NO SE PUEDE MODIFICAR"
      />
      <div className="flex items-center justify-center flex-wrap gap-5">
        {promos.map((item) => (
          <PromoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PromosGrid;
