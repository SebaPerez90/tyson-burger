import Image from "next/image";

import { PiHamburgerBold } from "react-icons/pi";

import DeleteProductModal from "../ui/modals/DeleteProductModal";

const ProductCheckout = ({ clientOrder }: { clientOrder: Order[] }) => {
  return (
    <div className="border border-white/30 p-5 rounded-xl mt-10 text-stone-50">
      <h2 className="font-bold mb-5 flex items-center px-4 gap-0.5">
        <PiHamburgerBold />
        {clientOrder.reduce((total, item) => total + item.quantity, 0)}{" "}
        Productos
      </h2>

      <div className="flex justify-between items-center p-4 font-semibold">
        <span>Item</span>
        <div className="flex gap-5 justify-between w-[45%]">
          <div className="flex items-center justify-between gap-5 w-[130px]">
            <span>Cantidad</span>
            <span>Precio</span>
          </div>
          <span className="font-semibold">Eliminar</span>
        </div>
      </div>
      {/* List of products */}
      <ul className="px-4">
        {clientOrder.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-t-2 border-white/20 py-6"
          >
            {/* image and name of the product */}
            <div className="flex items-center gap-2 py-2">
              <Image
                src={item.image ?? ""}
                width={100}
                height={100}
                alt={item.productName ?? "product-image"}
                className="size-14 rounded object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{item.productName}</span>
                <span className="font-normal text-sm text-white/70">
                  Simple
                </span>
              </div>
            </div>

            {/* quantity and price */}
            <div className="flex gap-5 justify-between w-[45%]">
              <div className="flex items-center w-[130px] justify-between gap-5 font-baloo">
                <span>{item.quantity}u</span>
                <span className="">$ {item.total.toLocaleString("es-AR")}</span>
              </div>

              {/* delete product from cart modal */}
              <DeleteProductModal cartId={item.id} />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center px-4 py-6 w-full">
        <span className="font-bold">Subtotal</span>
        <span className="font-bold">
          ${" "}
          {clientOrder
            .reduce((total, item) => total + item.total, 0)
            .toLocaleString("es-AR")}
        </span>
      </div>
    </div>
  );
};

export default ProductCheckout;
