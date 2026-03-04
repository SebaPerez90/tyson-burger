type FriesType = "sazonadas" | "tradicionales";

type Props = {
  friesType: FriesType;
  setFriesType: (v: FriesType) => void;
};

const FriesTypeSelector = ({ friesType, setFriesType }: Props) => {
  return (
    <div className="flex flex-col gap-3 mt-15">
      {(["sazonadas", "tradicionales"] as const).map((type) => (
        <button
          key={type}
          onClick={() => setFriesType(type)}
          className={`px-4 py-3  rounded-lg border cursor-pointer grow capitalize text-stone-50 hover:opacity-85 transition-all duration-200 pl-10 ${
            friesType === type
              ? "bg-red-500 border-transparent font-semibold"
              : "border-white/70"
          }`}
        >
          Papas {type}
          {type === "sazonadas" && (
            <span className="ml-2 text-xs bg-green-500/50 text-white px-2 py-0.5 rounded-full">
              Recomendadas
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default FriesTypeSelector;
