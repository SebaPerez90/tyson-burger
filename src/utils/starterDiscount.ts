import { applyDiscount } from "./applyDiscount";

export const starterDiscount = (mockStartersItems: StarterItem[]) => {
  return mockStartersItems.map((starter) => {
    let discount = 0;

    switch (true) {
      case starter.name === "Papas Volcan Cheese":
        discount = 5;
        break;

      case starter.name === "Papas Tyson":
        discount = 8;
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
