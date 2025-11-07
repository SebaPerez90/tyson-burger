import HamburgerCard from "@/src/components/ui/cards/HamburgerCard";

import mockMenuItems from "@/src/mockup/menu.json";

export default function MenuPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {mockMenuItems.map((item) => (
        <HamburgerCard key={item.id} item={item} />
      ))}
    </main>
  );
}
