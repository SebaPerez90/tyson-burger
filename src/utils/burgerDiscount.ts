import { applyDiscount } from "./applyDiscount";

export const burgerDiscount = (mockBurgersItems: HamburgerItem[]) => {
  // 👉 Detectar día actual (Argentina)
  const argentinaTime = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  );

  const day = argentinaTime.getDay();

  // 👉 Jueves (4) o Viernes (5)
  const isDiscountDay = day === 4 || day === 5;

  console.log(
    `Hoy es ${isDiscountDay ? "día de descuento" : "un día normal"}.`,
  );

  return mockBurgersItems.map((burger) => {
    let discount = 0;

    // 💡 Lógica condicional de descuentos
    switch (true) {
      // case burger.name === "Cheese Burger":
      //   discount = 10;
      //   break;

      // case burger.type?.includes("burger"):
      //   discount = 10;
      //   break;

      // case burger.name.includes("Provo"):
      //   discount = 10;
      //   break;

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
