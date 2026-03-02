type Props = {
  burgerSize: "simple" | "doble" | "triple";
  setBurgerSize: (v: "simple" | "doble" | "triple") => void;
};

const BurgerSizeSelector = ({ burgerSize, setBurgerSize }: Props) => {
  return (
    <div className="flex flex-col gap-3 mt-8">
      {(["simple", "doble", "triple"] as const).map((size) => (
        <button
          key={size}
          onClick={() => setBurgerSize(size)}
          className={`px-4 py-3 rounded-lg border cursor-pointer grow capitalize text-stone-50 hover:opacity-85 transition-all duration-200 ${
            burgerSize === size
              ? "bg-red-500 border-transparent font-semibold"
              : "border-white/70"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default BurgerSizeSelector;
