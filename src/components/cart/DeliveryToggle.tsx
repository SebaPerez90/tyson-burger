interface DeliveryToggleProps {
  isDelivery: boolean;
  setIsDelivery: (isDelivery: boolean) => void;
}

const DeliveryToggle = ({ isDelivery, setIsDelivery }: DeliveryToggleProps) => {
  return (
    <div className="flex items-center justify-center w-[500px] border border-gray-600 rounded-lg p-1 relative -top-3">
      <div className="relative flex w-full  px-2 py-1 bg-gray-900">
        <div
          className={`absolute top-px left-0 h-full w-[50%] bg-white rounded-md transition-all duration-300 ease-in-out  ${
            !isDelivery ? "translate-x-full" : "translate-x-0"
          }`}
        />

        <button
          className={`${
            isDelivery ? "" : "text-white/80"
          } relative z-10 flex-1 text-sm text-center font-bold text-black cursor-pointer duration-200 transition-all`}
          onClick={() => setIsDelivery(true)}
        >
          Delivery
        </button>
        <button
          className={`${
            isDelivery ? "text-white/80" : ""
          } relative z-10 flex-1 text-sm text-center font-bold text-black cursor-pointer duration-200 transition-all`}
          onClick={() => setIsDelivery(false)}
        >
          Retirar
        </button>
      </div>
    </div>
  );
};

export default DeliveryToggle;
