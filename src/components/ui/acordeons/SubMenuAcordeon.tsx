// SubMenuAcordeon.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Checkbox } from "@/src/components/ui/checkbox";

const extras = [
  { id: "extra-meat", label: "Extra medallon de carne", price: "$ 4.000" },
  { id: "extra-cheese", label: "Extra cheddar al medallon", price: "$ 500" },
  { id: "extra-bacon", label: "Doble bacon extra", price: "$ 2.500" },
  {
    id: "extra-cheese-fries",
    label: "Extra cheddar a tus papas",
    price: "$ 2.000",
  },
  {
    id: "extra-bacon-fries",
    label: "Extra bacon a tus papas",
    price: "$ 2.000",
  },
  {
    id: "extra-cheese-bacon-fries",
    label: "Extra cheddar y bacon a tus papas",
    price: "$ 2.500",
  },
];

interface Extra {
  id: string;
  label: string;
  price: string;
}

interface SubMenuAcordeonProps {
  selectedExtras: Extra[]; // ahora es array de objetos
  onExtraChange: (extra: Extra) => void; // recibe extra completo
}

const SubMenuAcordeon = ({
  selectedExtras,
  onExtraChange,
}: SubMenuAcordeonProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mt-8 border border-white/20 rounded-xl overflow-hidden"
    >
      <AccordionItem value="item-1" className="bg-[#1a1a1a] ">
        <AccordionTrigger className="text-xl text-white px-4 py-6 hover:no-underline cursor-pointer">
          Agrega ingredientes para más placer!😋
        </AccordionTrigger>

        <AccordionContent className="px-4 py-3">
          <ul className="flex flex-col gap-4 space-y-3">
            {extras.map((extra, index) => {
              const isSelected = selectedExtras.some((e) => e.id === extra.id);
              return (
                <li
                  key={extra.id}
                  className={`flex justify-between items-center pb-2 ${
                    index !== extras.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={extra.id}
                      checked={isSelected}
                      onCheckedChange={() => onExtraChange(extra)}
                      className="w-6 h-6 rounded-sm bg-zinc-800 border-white/30 cursor-pointer data-[state=checked]:bg-red-500 data-[state=checked]:border-red-400 data-[state=checked]:text-white"
                    />

                    <label htmlFor={extra.id} className="text-white">
                      {extra.label}
                    </label>
                  </div>
                  <span className="text-white font-medium text-lg">
                    {extra.price}
                  </span>
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SubMenuAcordeon;
