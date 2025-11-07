"use client";

import { GrLocation } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

const deliveryZones = [
  "Quilmes",
  "Berazategui",
  "Varela",
  "Ezpeleta",
  "Solano",
];

export default function DeliveryAndPickup() {
  // Mensaje pre-armado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Quisiera consultar si llegan a mi zona."
  );
  const whatsappLink = `https://wa.me/5491132830604?text=${whatsappMessage}`; // reemplazá con tu número

  return (
    <section className="max-w-[1200px] mx-auto py-24 px-4 space-y-12">
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-center text-background">
        Zonas donde entregamos
      </h2>

      {/* Chips de zonas */}
      <div className="flex flex-wrap justify-center gap-4">
        {deliveryZones.map((zone) => (
          <span
            key={zone}
            className="px-5 py-2 rounded-full bg-background/5 border border-white/10 flex items-center gap-1 text-background font-semibold text-sm"
          >
            <span className="text-destructive">
              <ImLocation />
            </span>
            {zone}
          </span>
        ))}
      </div>

      {/* Rango de cobertura */}
      <div className="max-w-lg mx-auto text-center space-y-2">
        <p className="text-stone-200 font-semibold text-base">
          Hacemos envíos{" "}
          <span className="text-red-400 font-bold">hasta 3km</span> a la redonda
        </p>
        <p className="text-[13px] text-stone-400">
          Si estás fuera de ese rango, consultanos por WhatsApp 😉
        </p>

        {/* Botón WhatsApp */}
        <div className="flex justify-center mt-5">
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500/90 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg text-base transition"
          >
            <FaWhatsapp className="text-xl" />
            Consultar por mi zona
          </a>
        </div>
      </div>

      {/* Tarjeta de Retiro en local */}
      <div className="max-w-sm mx-auto border border-white/20 rounded-xl p-6 text-stone-50 space-y-4">
        <h3 className="font-bold flex items-center gap-2 text-xl">
          <GrLocation /> Retiro en el local
        </h3>
        <div className="space-y-1 text-sm text-stone-300">
          <p className="text-base font-medium text-stone-50">
            Calle 1 626 — Berazategui Oeste
          </p>
          <p>Entre calles 106 y 107</p>
          <a
            href="https://www.google.com/maps/place/C.+1+626,+B1884+Berazategui+Oeste,+Provincia+de+Buenos+Aires/"
            target="_blank"
            className="mt-3 inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition"
          >
            <ImLocation className="scale-110" />
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
