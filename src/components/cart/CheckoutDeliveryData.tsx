"use client";

import { useEffect, useState } from "react";

import { PiMapPinLineDuotone } from "react-icons/pi";
import { FaMoneyBills, FaHandHoldingHeart } from "react-icons/fa6";
import { BsCurrencyDollar, BsBank } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";

import FloatingInput from "../forms/FloatingInput";

const CheckoutDeliveryData = () => {
  const [address, setAddress] = useState("");
  const [betweenStreets, setBetweenStreets] = useState("");
  const [details, setDetails] = useState("");
  const [tip, setTip] = useState<number | "otro">(0);
  const [customTip, setCustomTip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"efectivo" | "mp" | null>(
    null
  );
  const [cashAmount, setCashAmount] = useState("");

  useEffect(() => {
    // need console.log for each state change to avoid hydration error

    console.log(address);
    console.log(betweenStreets);
    console.log(details);
    console.log(tip);
    console.log(customTip);
    console.log(paymentMethod);
    console.log(cashAmount);
  }, [
    address,
    betweenStreets,
    details,
    tip,
    customTip,
    paymentMethod,
    cashAmount,
  ]);

  return (
    <div className="flex flex-col gap-8">
      {/* DIRECCION */}
      <div className="border border-white/20 rounded-xl p-5 text-stone-50">
        <h3 className="font-bold flex items-center gap-2 text-lg mb-3">
          <PiMapPinLineDuotone /> Dirección de entrega
        </h3>

        <div className="flex flex-col gap-3">
          <input
            placeholder="Dirección*"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-black/20 border border-white/30 rounded-lg p-3 outline-none"
          />
          <input
            placeholder="Entre que calles?"
            value={betweenStreets}
            onChange={(e) => setBetweenStreets(e.target.value)}
            className="bg-black/20 border border-white/30 rounded-lg p-3 outline-none"
          />
          <input
            placeholder="Agrega detalles (piso, depto, etc)"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="bg-black/20 border border-white/30 rounded-lg p-3 outline-none"
          />
        </div>
      </div>

      {/* PAGO */}
      <div className="border border-white/20 rounded-xl p-5 text-stone-50">
        <h3 className="font-bold flex items-center gap-2 text-lg mb-3">
          <BsBank /> Método de pago
        </h3>

        <div className="flex flex-col gap-3 w-3/4">
          <button
            onClick={() => setPaymentMethod("efectivo")}
            className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer ${
              paymentMethod === "efectivo"
                ? "bg-white/10 border-white"
                : "border-white/20"
            }`}
          >
            <FaMoneyBills />
            Efectivo
          </button>

          <button
            onClick={() => setPaymentMethod("mp")}
            className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer ${
              paymentMethod === "mp"
                ? "bg-white/10 border-white test"
                : "border-white/20"
            }`}
          >
            <IoWalletOutline />
            Mercado Pago
          </button>

          {paymentMethod === "efectivo" && (
            <div className="mt-5">
              <FloatingInput
                label="¿Con cuánto abonás?"
                icon={<BsCurrencyDollar />}
                type="number"
                value={cashAmount}
                onChange={setCashAmount}
              />
            </div>
          )}
        </div>
      </div>

      {/* PROPINA */}
      <div className="border border-white/20 rounded-xl p-5 text-stone-50 space-y-8">
        <h3 className="font-bold flex items-center gap-2 text-lg mb-4">
          <FaHandHoldingHeart size={24} /> Propina
        </h3>
        <div className="flex flex-wrap gap-3">
          {[500, 1000, 2000].map((v) => (
            <button
              key={v}
              onClick={() => setTip(v)}
              className={`cursor-pointer px-5 py-2 rounded-full border text-sm font-baloo ${
                tip === v ? "bg-white/10 border-white" : "border-white/20"
              }`}
            >
              ${v}
            </button>
          ))}

          <button
            onClick={() => setTip("otro")}
            className={`cursor-pointer px-5 py-2 rounded-full border text-sm ${
              tip === "otro" ? "bg-white/10 border-white" : "border-white/20"
            }`}
          >
            Otro
          </button>
        </div>
        {tip === "otro" && (
          <FloatingInput
            label="Propina"
            icon={<BsCurrencyDollar />}
            type="number"
            value={customTip}
            onChange={setCustomTip}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutDeliveryData;
