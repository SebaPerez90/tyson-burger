import { GrLocation } from "react-icons/gr";
import { ImLocation } from "react-icons/im";

import FloatingInput from "../forms/FloatingInput";
interface DeliveryCheckoutProps {
  isDelivery: boolean;
  address: string;
  setAddress: (address: string) => void;
  betweenStreets: string;
  setBetweenStreets: (betweenStreets: string) => void;
  details: string;
  setDetails: (details: string) => void;
}

const DeliveryCheckout = ({
  isDelivery,
  address,
  setAddress,
  betweenStreets,
  setBetweenStreets,
  details,
  setDetails,
}: DeliveryCheckoutProps) => {
  return (
    <div id="delivery-checkout">
      {isDelivery ? (
        <div className="border border-white/20 rounded-xl p-5 text-stone-50">
          <h3 className="font-bold flex items-center gap-2 text-lg mb-3">
            <GrLocation /> Dirección de entrega
          </h3>

          {/* location */}
          <div className="space-y-5 mt-8">
            <FloatingInput
              name="address"
              label="Calle y número"
              type="text"
              value={address}
              onChange={setAddress}
            />
            <FloatingInput
              name="betweenStreets"
              label="Entre calles"
              type="text"
              value={betweenStreets}
              onChange={setBetweenStreets}
            />
            <FloatingInput
              label="Observaciones"
              type="text"
              value={details}
              onChange={setDetails}
            />
          </div>
        </div>
      ) : (
        <div className="border border-white/20 rounded-xl p-5 text-stone-50">
          <h3 className="font-bold flex items-center gap-2 text-lg mb-3">
            <GrLocation /> Retiro en el local
          </h3>

          <div className="mt-8 space-y-1 text-sm text-stone-300">
            <p className="text-base font-medium text-stone-50">
              Calle 1 626 — Berazategui Oeste
            </p>
            <p>Entre calles 106 y 107</p>

            <a
              href="https://www.google.com/maps/place/C.+1+626,+B1884+Berazategui+Oeste,+Provincia+de+Buenos+Aires/"
              target="_blank"
              className="mt-3 inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-lg text-sm hover:bg-white/10 transition"
            >
              <ImLocation className="scale-110" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryCheckout;
