import SectionTitle from "@/src/components/menu/SectionTitle";
import HamburgerCard from "@/src/components/ui/cards/HamburgerCard";
import StarterCard from "@/src/components/ui/cards/StarterCard";

import mockMenuItems from "@/src/mockup/burger.json";
import mockStartersItems from "@/src/mockup/starters.json";
import mockDrinksItems from "@/src/mockup/drinks.json";
import DrinkCard from "@/src/components/ui/cards/DrinkCard";
import MenuNavBar from "@/src/components/header/MenuNavBar";

export default function MenuPage() {
  return (
    <>
      <MenuNavBar />
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
        {/* burgers container section */}
        <section id="burgers-section">
          <SectionTitle
            title="Nuestras Hamburguesas"
            subtitle="(incluyen papas)"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {mockMenuItems.map((item) => (
              <HamburgerCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* starters container section */}
        <section id="starters-section">
          <SectionTitle
            title="Entradas calientes"
            subtitle="(incluyen salsa)"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {mockStartersItems.map((item) => (
              <StarterCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* drinks container section */}
        <section id="drinks-section">
          <SectionTitle title="Bebidas" subtitle="(sabores originales)" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {mockDrinksItems.map((item) => (
              <DrinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
