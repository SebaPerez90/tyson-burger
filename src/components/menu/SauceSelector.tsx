type Props = {
  sauce: "mayonesa" | "barbacoa" | "moztaza";
  setSauce: (v: "mayonesa" | "barbacoa" | "moztaza") => void;
};

const SauceSelector = ({ sauce, setSauce }: Props) => {
  return (
    <div className="flex items-center gap-2 my-8 w-full">
      {(["mayonesa", "barbacoa", "moztaza"] as const).map((t) => (
        <button
          key={t}
          onClick={() => setSauce(t)}
          className={`px-4 py-3 rounded-lg border cursor-pointer grow capitalize text-stone-50 hover:opacity-85 transition-all duration-200 ${
            sauce === t
              ? "bg-red-500 border-transparent font-semibold"
              : "border-white/70"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default SauceSelector;
