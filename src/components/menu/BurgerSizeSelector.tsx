type Props = {
  burgerSize: "simple" | "doble" | "triple" | "cuadruple" | "quintuple";
  setBurgerSize: (
    v: "simple" | "doble" | "triple" | "cuadruple" | "quintuple",
  ) => void;
};

const BurgerSizeSelector = ({ burgerSize, setBurgerSize }: Props) => {
  return (
    <div
      // flex items-center gap-2 my-8 w-full flex-wrap
      className="grid grid-cols-2 grid-rows-2 gap-3 mt-8"
    >
      {(["simple", "doble", "triple", "cuadruple", "quintuple"] as const).map(
        (size) => (
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
        ),
      )}
    </div>
  );
};

export default BurgerSizeSelector;
