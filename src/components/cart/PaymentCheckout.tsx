import { FaMoneyBills, FaHandHoldingHeart } from "react-icons/fa6";
import { BsCurrencyDollar, BsBank } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";

import FloatingInput from "../forms/FloatingInput";

import {
  formatNumberWithDot,
  parsePriceStringToNumber,
} from "@/src/utils/priceConverter";

interface CheckoutPaymentProps {
  isDelivery: boolean;
  tip: number | "otro";
  setTip: (tip: number | "otro") => void;
  customTip: string | number;
  setCustomTip: (customTip: string | number) => void;
  cashAmount: string | number;
  setCashAmount: (cashAmount: string | number) => void;
  paymentMethod: "efectivo" | "mercado pago";
  setPaymentMethod: (paymentMethod: "efectivo" | "mercado pago") => void;
}

const PaymentCheckout = ({
  isDelivery,
  tip,
  setTip,
  customTip,
  setCustomTip,
  // cashAmount,
  // setCashAmount,
  paymentMethod,
  setPaymentMethod,
}: CheckoutPaymentProps) => {
  return (
    <>
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

          {/* {paymentMethod === "efectivo" && (
            <div className="mt-5">
              <FloatingInput
                label="¿Con cuánto abonás?"
                icon={<BsCurrencyDollar />}
                type="text"
                value={
                  cashAmount === ""
                    ? ""
                    : formatNumberWithDot(Number(cashAmount))
                }
                onChange={(v) => {
                  setCashAmount(parsePriceStringToNumber(v));
                }}
              />
            </div>
          )} */}
        </div>
      </div>

      {/* PROPINA */}
      {isDelivery && (
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
              type="text"
              value={
                customTip === "" ? "" : formatNumberWithDot(Number(customTip))
              }
              onChange={(v) => {
                setCustomTip(parsePriceStringToNumber(v));
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PaymentCheckout;
