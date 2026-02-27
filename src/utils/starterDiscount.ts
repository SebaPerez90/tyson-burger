import { applyDiscount } from "./applyDiscount";

export const starterDiscount = (mockStartersItems: StarterItem[]) => {
  // 👉 Detectar día actual (Argentina)
  const argentinaTime = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  );

  const day = argentinaTime.getDay();

  // 👉 Jueves (4) o Viernes (5)
  const isDiscountDay = day === 4 || day === 5;

  return mockStartersItems.map((starter) => {
    let discount = 0;

    switch (true) {
      // case starter.name === "Papas Sweet & Cheese":
      //   discount = 10;
      //   break;

      case starter.type?.includes("starter") && isDiscountDay:
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
      discountedPrice: finalPrice.toLocaleString("es-AR"),
      discount,
    };
  });
};
