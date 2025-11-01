import { Button } from "../ui/button";
import { toast } from "sonner";

import { useRouter } from "next/navigation";

interface AddOrderBtnsProps {
  total: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  note?: string;
  productName?: string;
  productSize?: string;
  selectedExtras?: { id: string; label: string; price: string }[];
}

const AddOrderBtns = ({
  total,
  count,
  setCount,
  note,
  productName,
  productSize,
  selectedExtras,
}: AddOrderBtnsProps) => {
  const router = useRouter();

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (count > 0) {
      const formattedExtras = selectedExtras?.map((extra) => extra.label);

      const cartData = {
        quantity: count,
        total,
        note,
        productName,
        productSize,
        extras: formattedExtras,
      };

      const storedCart = localStorage.getItem("clientOrder");
      const currentCart = storedCart ? JSON.parse(storedCart) : [];

      // push nueva orden
      const updatedCart = [...currentCart, cartData];

      // guarda array actualizado
      localStorage.setItem("clientOrder", JSON.stringify(updatedCart));

      toast.success(`Tu orden se agrego al carrito`, {
        style: {
          borderRadius: "8px",
          color: "#008a2e",
          backgroundColor: "#ecfdf3",
          width: "max-content",
        },
        duration: 5000,
      });

      setTimeout(() => {
        router.push("/menu");
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center gap-5 fixed bottom-10 mx-auto left-0 right-0">
      {/* CONTADOR */}
      <div className="flex items-center bg-secondary border border-white/30 rounded-full p-[0.2rem_0rem!important]  text-black overflow-hidden">
        <Button
          onClick={handleDecrement}
          variant={"secondary"}
          className="text-3xl relative -top-1.5 hover:bg-inherit hover:text-zinc-700 antialiased"
        >
          –
        </Button>
        <span className="font-medium mx-4 text-sm">{count}u</span>
        <Button
          onClick={handleIncrement}
          variant={"secondary"}
          className="text-3xl relative -top-1.5 hover:bg-inherit hover:text-zinc-700 antialiased"
        >
          +
        </Button>
      </div>

      {/* BOTÓN AGREGAR */}
      <Button
        onClick={handleAddToCart}
        variant={"destructive"}
        className="flex items-center justify-center rounded-full p-[1.3rem_2rem!important]"
      >
        Agregar
        <span className="font-semibold">${total.toLocaleString()}</span>
      </Button>
    </div>
  );
};

export default AddOrderBtns;
