type Props = {
  burgerSize: "simple" | "doble" | "triple";
  setBurgerSize: (v: "simple" | "doble" | "triple") => void;
};

const BurgerSizeSelector = ({ burgerSize, setBurgerSize }: Props) => {
  return (
    <div className="flex items-center gap-2 my-8 w-full">
      {(["simple", "doble", "triple"] as const).map((size) => (
        <button
          key={size}
          onClick={() => setBurgerSize(size)}
          className={`px-4 py-2 rounded-lg border cursor-pointer grow capitalize text-stone-50 ${
            burgerSize === size ? "bg-white/20 border-white" : "border-white/20"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default BurgerSizeSelector;
