import MenuNavBar from "@/src/components/header/MenuNavBar";
// import DesertGrid from "@/src/components/menu/DesertGrid";
// import DrinksGrid from "@/src/components/menu/DrinksGrid";
import HamburgerGrid from "@/src/components/menu/HamburgerGrid";
import StarterGrid from "@/src/components/menu/StarterGrid";

export default function MenuPage() {
  return (
    <>
      <MenuNavBar />
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
        {/* burgers container section */}
        <HamburgerGrid />

        {/* starters container section */}
        <StarterGrid />

        {/* drinks container section */}
        {/* <DrinksGrid /> */}

        {/* deserts container section */}
        {/* <DesertGrid /> */}
      </main>
    </>
  );
}
