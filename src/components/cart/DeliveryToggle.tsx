interface DeliveryToggleProps {
  isDelivery: boolean;
  setIsDelivery: (isDelivery: boolean) => void;
}

const DeliveryToggle = ({ isDelivery, setIsDelivery }: DeliveryToggleProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full">
      <button
        onClick={() => setIsDelivery(true)}
        className={`px-4 py-3 rounded-lg border cursor-pointer grow text-stone-50 hover:opacity-85 transition-all duration-200 ${
          isDelivery
            ? "bg-red-500 border-transparent font-semibold"
            : "border-white/70"
        }`}
      >
        Pedido para Delivery
      </button>

      <button
        onClick={() => setIsDelivery(false)}
        className={`px-4 py-3 rounded-lg border cursor-pointer grow text-stone-50 hover:opacity-85 transition-all duration-200 ${
          !isDelivery
            ? "bg-red-500 border-transparent font-semibold"
            : "border-white/70"
        }`}
      >
        Pasar a Retirar
      </button>
    </div>
  );
};

export default DeliveryToggle;
