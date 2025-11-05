"use client";

import { useState } from "react";

import { GrLocation } from "react-icons/gr";
import { FaMoneyBills, FaHandHoldingHeart } from "react-icons/fa6";
import { BsCurrencyDollar, BsBank } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";

import FloatingInput from "../forms/FloatingInput";
import SummaryCard from "./SummaryCard";
import CheckoutUserData from "./CheckoutUserData";

const Checkout = ({ clientOrder }: { clientOrder: Order[] }) => {
  const [address, setAddress] = useState("");
  const [betweenStreets, setBetweenStreets] = useState("");
  const [details, setDetails] = useState("");
  const [tip, setTip] = useState<number | "otro">(0);
  const [customTip, setCustomTip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "efectivo" | "mercado pago"
  >("mercado pago");
  const [cashAmount, setCashAmount] = useState<number | "">("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleCashChange = (v: string) => {
    const raw = v.replace(/\./g, "");
    const num = Number(raw);

    if (isNaN(num)) {
      setCashAmount("");
      return;
    }

    setCashAmount(num);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* DATOS DEL USUARIO */}
      <CheckoutUserData
        userName={userName}
        setUserName={setUserName}
        userPhone={userPhone}
        setUserPhone={setUserPhone}
      />

      {/* DIRECCION */}
      <div className="border border-white/20 rounded-xl p-5 text-stone-50">
        <h3 className="font-bold flex items-center gap-2 text-lg mb-3">
          <GrLocation /> Dirección de entrega
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
            onClick={() => setPaymentMethod("mercado pago")}
            className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer ${
              paymentMethod === "mercado pago"
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
                type="text" // ← importante: text, NO number
                value={
                  cashAmount === "" ? "" : cashAmount.toLocaleString("es-AR")
                }
                onChange={handleCashChange}
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
          {[0, 500, 1000, 2000].map((v) => (
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
            value={customTip.toLocaleString()}
            onChange={setCustomTip}
          />
        )}
      </div>

      {/* SUMMARY CARD */}
      <SummaryCard
        clientOrder={clientOrder}
        tip={tip}
        customTip={customTip}
        paymentMethod={paymentMethod}
        cashAmount={cashAmount}
        address={address}
        betweenStreets={betweenStreets}
        details={details}
        userPhone={userPhone}
        userName={userName}
      />
    </div>
  );
};

export default Checkout;
