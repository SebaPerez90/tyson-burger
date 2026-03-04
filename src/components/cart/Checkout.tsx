"use client";

import { useState } from "react";

import SummaryCard from "./SummaryCard";
import UserDataCheckout from "./UserDataCheckout";
import PaymentCheckout from "./PaymentCheckout";
import DeliveryCheckout from "./DeliveryCheckout";

interface CheckoutProps {
  clientOrder: Order[];
  isDelivery: boolean;
}

const Checkout = ({ clientOrder, isDelivery }: CheckoutProps) => {
  const [address, setAddress] = useState("");
  const [betweenStreets, setBetweenStreets] = useState("");
  const [details, setDetails] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "efectivo" | "mercado pago"
  >("mercado pago");

  return (
    <div className="flex flex-col gap-8">
      {/* DATOS DEL USUARIO */}
      <UserDataCheckout
        userName={userName}
        setUserName={setUserName}
        userPhone={userPhone}
        setUserPhone={setUserPhone}
      />

      {/* DIRECCION */}
      <DeliveryCheckout
        isDelivery={isDelivery}
        address={address}
        setAddress={setAddress}
        betweenStreets={betweenStreets}
        setBetweenStreets={setBetweenStreets}
        details={details}
        setDetails={setDetails}
      />

      {/* METODO DE PAGO */}
      <PaymentCheckout
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      {/* SUMMARY CARD */}
      <SummaryCard
        clientOrder={clientOrder}
        paymentMethod={paymentMethod}
        address={address}
        betweenStreets={betweenStreets}
        details={details}
        userPhone={userPhone}
        userName={userName}
        isDelivery={isDelivery}
      />
    </div>
  );
};

export default Checkout;
