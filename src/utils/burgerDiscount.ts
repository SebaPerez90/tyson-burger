import { applyDiscount } from "./applyDiscount";

export const burgerDiscount = (mockBurgersItems: HamburgerItem[]) => {
  return mockBurgersItems.map((burger) => {
    let discount = 0;

    // 💡 Lógica condicional de descuentos
    if (burger.name.includes("Tyson")) discount = 15;
    else if (burger.name.includes("Bacon")) discount = 10;
    else if (burger.name.includes("Cheese")) discount = 5;

    // 🧮 Aplicamos el descuento a cada tamaño (por si alguno no existe)
    const discountedPrices: Partial<typeof burger.price> = {};

    for (const key in burger.price) {
      const priceValue = burger.price[key as keyof typeof burger.price];
      discountedPrices[key as keyof typeof burger.price] = applyDiscount(
        priceValue,
        discount
      ).finalPrice;
    }

    return {
      ...burger,
      discountedPrices,
      discount,
    };
  });
};
