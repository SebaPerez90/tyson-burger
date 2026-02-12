// import MenuNavBar from "@/src/components/header/MenuNavBar";
import PromosGrid from "@/src/components/menu/PromosGrid";

export default function PromosPage() {
  return (
    <>
      {/* <MenuNavBar /> */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
        {/* promos container section */}
        <PromosGrid />
      </main>
    </>
  );
}
