import HamburgerCard from "@/src/components/ui/cards/HamburgerCard";

import mockMenuItems from "@/src/mockup/menu.json";

export default function MenuPage() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-4 py-8">
      {mockMenuItems.map((item) => (
        <HamburgerCard key={item.id} item={item} />
      ))}
    </main>
  );
}
