// SubMenuAcordeon.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Checkbox } from "@/src/components/ui/checkbox";

interface SubMenuAcordeonProps {
  selectedExtras: Extra[]; // ahora es array de objetos
  onExtraChange: (extra: Extra) => void; // recibe extra completo
  extras: Extra[];
}

const SubMenuAcordeon = ({
  selectedExtras,
  onExtraChange,
  extras,
}: SubMenuAcordeonProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mt-8 border border-white/20 rounded-xl overflow-hidden"
    >
      <AccordionItem value="item-1" className="bg-[#1a1a1a] ">
        <AccordionTrigger className="text-base sm:text-xl text-white px-4 py-6 hover:no-underline cursor-pointer">
          Extras para tu pedido
        </AccordionTrigger>

        <AccordionContent className="px-4 py-3">
          <ul className="flex flex-col gap-4 space-y-3">
            {extras.map((item, index) => {
              const isSelected = selectedExtras.some((e) => e.id === item.id);
              return (
                <li
                  key={item.id}
                  className={`flex justify-between items-center pb-2 ${
                    index !== extras.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-1 sm:gap-3">
                    <Checkbox
                      id={item.id}
                      checked={isSelected}
                      onCheckedChange={() => onExtraChange(item)}
                      className="h-4 w-4 sm:w-6 sm:h-6 rounded-none sm:rounded-sm bg-zinc-800 border-white/30 cursor-pointer data-[state=checked]:bg-red-500 data-[state=checked]:border-red-400 data-[state=checked]:text-white"
                    />

                    <label
                      htmlFor={item.id}
                      className="text-white text-xs sm:text-base"
                    >
                      {item.label}
                    </label>
                  </div>
                  <span className="text-white font-medium text-xs w-max sm:text-lg">
                    {item.price}
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
