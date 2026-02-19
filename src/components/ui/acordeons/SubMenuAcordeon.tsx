import {
  Accordion,
  AccordionContent,
  AccordionItem,
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
      defaultValue="item-1"
      className="w-full mt-8 border border-white/20 rounded-xl overflow-hidden"
    >
      <AccordionItem value="item-1" className="bg-[#1a1a1a] ">
        <AccordionContent className="p-5">
          <ul className="flex flex-col gap-4 space-y-3">
            {extras.map((item, index) => {
              const isSelected = selectedExtras.some((e) => e.id === item.id);
              return (
                <li
                  key={item.id}
                  className={`flex justify-between items-center gap-4 pb-2 ${
                    index !== extras.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Checkbox
                      id={item.id}
                      checked={isSelected}
                      onCheckedChange={() => onExtraChange(item)}
                      className="h-5 w-5 sm:w-6 sm:h-6 rounded-none sm:rounded-sm bg-zinc-800 border-white/30 cursor-pointer data-[state=checked]:bg-red-500 data-[state=checked]:border-red-400 data-[state=checked]:text-white"
                    />

                    <label htmlFor={item.id} className="text-white">
                      {item.label}
                    </label>
                  </div>
                  <span className=" text-white font-medium w-[70px]">
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
