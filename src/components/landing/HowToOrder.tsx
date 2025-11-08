import { UtensilsCrossed, MessageSquareText, Bike } from "lucide-react";

const HowToOrder = () => {
  return (
    <section className="max-w-[1200px] mx-auto pb-24 pt-0 sm:pt-24 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-background">
        ¿Cómo hago mi pedido?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Paso 1 */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="p-4 bg-background/5 rounded-full border border-white/10">
            <UtensilsCrossed size={36} className="text-destructive" />
          </div>
          <h3 className="text-xl font-semibold text-background">
            Elegís tu hamburguesa
          </h3>
          <p className="text-sm text-white/70">
            Entrás al menú, elegís tamaño y extras a tu gusto.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="p-4 bg-background/5 rounded-full border border-white/10">
            <MessageSquareText size={36} className="text-destructive" />
          </div>
          <h3 className="text-xl font-semibold text-background">
            Lo mandás por WhatsApp
          </h3>
          <p className="text-sm text-white/70">
            El pedido se arma solo y lo enviás con 1 tap.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="p-4 bg-background/5 rounded-full border border-white/10">
            <Bike size={36} className="text-destructive" />
          </div>
          <h3 className="text-xl font-semibold text-background">
            Cocinamos y te lo llevamos.
          </h3>
          <p className="text-sm text-white/70">
            Preparado al momento. Te llega calentita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
