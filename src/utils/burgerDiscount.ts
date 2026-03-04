import { applyDiscount } from "./applyDiscount";
import { getArgentinaDayInfo } from "./argentinaDateHelper";

export const burgerDiscount = (mockBurgersItems: HamburgerItem[]) => {
  const { isDiscountDay } = getArgentinaDayInfo();

  return mockBurgersItems.map((burger) => {
    let discount = 0;

    // 💡 Lógica condicional de descuentos
    switch (true) {
      case burger.type?.includes("burger") && isDiscountDay:
        discount = 10;
        break;

      default:
        discount = 0;
        break;
    }

    // 🧮 Aplicamos el descuento a cada tamaño (por si alguno no existe)
    const discountedPricesWithoutParse: Partial<typeof burger.price> = {};

    for (const key in burger.price) {
      const priceValue = burger.price[key as keyof typeof burger.price];

      discountedPricesWithoutParse[key as keyof typeof burger.price] =
        applyDiscount(priceValue ?? 0, discount).finalPrice;
    }

    const discountedPrices = Object.fromEntries(
      Object.entries(discountedPricesWithoutParse).map(([key, value]) => [
        key,
        value.toLocaleString("es-AR"),
      ]),
    );

    return {
      ...burger,
      discountedPrices,
      discount,
    };
  });
};
