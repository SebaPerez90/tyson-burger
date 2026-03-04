import { FaMoneyBills } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";

interface CheckoutPaymentProps {
  paymentMethod: "efectivo" | "mercado pago";
  setPaymentMethod: (paymentMethod: "efectivo" | "mercado pago") => void;
}

const PaymentCheckout = ({
  paymentMethod,
  setPaymentMethod,
}: CheckoutPaymentProps) => {
  return (
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
      </div>
    </div>
  );
};

export default PaymentCheckout;
