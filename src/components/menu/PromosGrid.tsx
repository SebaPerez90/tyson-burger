import promos from "@/src/mockup/promos.json";
import PromoCard from "../ui/cards/PromoCard";

const PromosGrid = () => {
  return (
    <section id="promos-section">
      <div className="grid grid-cols-1 gap-10">
        {promos.map((item) => (
          <PromoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PromosGrid;
