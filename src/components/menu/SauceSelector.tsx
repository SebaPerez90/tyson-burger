type Props = {
  sauce: "Mayonesa" | "Barbacoa" | "Moztaza" | "Salsa Pomodoro";
  setSauce: (v: "Mayonesa" | "Barbacoa" | "Moztaza" | "Salsa Pomodoro") => void;
  specialRoute: boolean;
};

const SauceSelector = ({ sauce, setSauce, specialRoute }: Props) => {
  const sauces = specialRoute
    ? ["Barbacoa", "Salsa Pomodoro"]
    : ["Mayonesa", "Barbacoa", "Moztaza"];
  return (
    <div className="flex items-center gap-2 my-8 w-full">
      {sauces.map((t) => (
        <button
          key={t}
          onClick={() => setSauce(t as Props["sauce"])}
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
