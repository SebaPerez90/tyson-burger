import { Button } from "../ui/button";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { generateShortId } from "@/src/utils/uuidGenerator";

const AddToCart = ({
  total,
  quantity,
  setCount,
  note,
  productName,
  productSize,
  selectedExtras,
  productImage,
}: Order) => {
  const router = useRouter();

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (quantity > 0) {
      const formattedExtras = selectedExtras?.map((extra) => extra.label);

      const cartData = {
        id: generateShortId(4),
        quantity: quantity,
        total,
        note,
        productName,
        productSize,
        extras: formattedExtras,
        image: productImage,
      };

      const storedCart = localStorage.getItem("clientOrder");
      const currentCart = storedCart ? JSON.parse(storedCart) : [];

      // push nueva orden
      const updatedCart = [...currentCart, cartData];

      // guarda array actualizado
      localStorage.setItem("clientOrder", JSON.stringify(updatedCart));

      // notifica a listeners (Cart)
      window.dispatchEvent(new Event("client-order-updated"));

      toast.success(`Producto agregado al carrito`, {
        style: {
          width: "max-content",
        },
        duration: 1000,
      });

      router.push("/menu");
    }
  };

  return (
    <div className="flex items-center justify-center gap-5 fixed bottom-7 mx-auto left-0 right-0">
      {/* CONTADOR */}
      <div className="flex items-center bg-secondary border border-white/30 rounded-full p-[0.2rem_0rem!important]  text-black overflow-hidden">
        <Button
          onClick={handleDecrement}
          variant={"secondary"}
          className="text-3xl relative -top-1.5 hover:bg-inherit hover:text-zinc-700 antialiased"
        >
          –
        </Button>
        <span className="font-medium mx-4 text-sm">{quantity}u</span>
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

export default AddToCart;
