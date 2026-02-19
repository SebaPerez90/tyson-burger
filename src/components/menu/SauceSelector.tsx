import { usePathname } from "next/navigation";

type Sauce = "Mayonesa" | "Barbacoa" | "Moztaza" | "Pomodoro";

type Props = {
  sauce: Sauce;
  setSauce: (v: Sauce) => void;
  specialRoute: boolean;
};

const SauceSelector = ({ sauce, setSauce, specialRoute }: Props) => {
  const pathname = usePathname();

  const noSauceRoutes = [
    "/menu/papas-tyson",
    "menu/papas-sweet-&-cheese",
    "/menu/papas-con-cheddar",
  ];

  if (noSauceRoutes.includes(pathname)) return null;

  const sauces: Sauce[] = specialRoute
    ? ["Barbacoa", "Pomodoro"]
    : ["Mayonesa", "Barbacoa", "Moztaza"];

  return (
    <div className="flex items-center gap-2 my-8 w-full flex-wrap">
      {sauces.map((t) => (
        <button
          key={t}
          onClick={() => setSauce(t)}
          className={`w-max px-4 py-3 rounded-lg border cursor-pointer grow capitalize text-stone-50 hover:opacity-85 transition-all duration-200 ${
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
