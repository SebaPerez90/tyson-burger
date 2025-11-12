import { applyDiscount } from "./applyDiscount";

export const starterDiscount = (mockStartersItems: StarterItem[]) => {
  return mockStartersItems.map((starter) => {
    let discount = 0;

    switch (true) {
      case starter.name === "Papas Sweet & Cheese":
        discount = 10;
        break;

      case starter.name === "Papas Tyson":
        discount = 10;
        break;

      default:
        discount = 0;
        break;
    }

    // 🧮 Aplicamos el descuento directo al precio unitario
    const { finalPrice } = applyDiscount(starter.price, discount);

    return {
      ...starter,
      discountedPrice: finalPrice,
      discount,
    };
  });
};
