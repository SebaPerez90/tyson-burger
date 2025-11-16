import { applyDiscount } from "./applyDiscount";

export const burgerDiscount = (mockBurgersItems: HamburgerItem[]) => {
  return mockBurgersItems.map((burger) => {
    let discount = 0;

    // 💡 Lógica condicional de descuentos
    switch (true) {
      case burger.name === "Cheese Burger":
        discount = 10;
        break;

      // case burger.name === "Cheese & Bacon Burger":
      //   discount = 10;
      //   break;

      case burger.name === "Sweet Burger":
        discount = 5;
        break;

      case burger.name === "Mayo Bacon Burger":
        discount = 5;
        break;

      case burger.name.includes("American"):
        discount = 10;
        break;

      case burger.name.includes("Provo"):
        discount = 10;
        break;

      // case burger.name.includes("Tyson"):
      //   discount = 5;
      //   break;

      default:
        discount = 0;
        break;
    }

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
