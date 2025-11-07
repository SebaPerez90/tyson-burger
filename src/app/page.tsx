import Hero from "@/src/components/landing/Hero";
import HowToOrder from "../components/landing/HowToOrder";
import DeliveryZones from "../components/landing/DeliveryZones";
import Footer from "../components/landing/Footer";
import WorkSchedules from "../components/landing/WorkSchedules";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <Hero />
      <HowToOrder />
      <DeliveryZones />
      <WorkSchedules />
      <Footer />
    </main>
  );
}
