import { burgerExtras } from "./burgerExtras";

export const specialProductExtras: Record<string, Extra[]> = {
  "volcan-de-cheddar": [
    {
      id: "extra-meat",
      label: "Medallon de carne + cheddar x2",
      price: "$ 4.000",
    },
    {
      id: "extra-meatx2",
      label: "Medallon de carne x2 + cheddar x4",
      price: "$ 7.000",
    },
  ],

  "chicken-crispy": burgerExtras,
  "melt-chicken": burgerExtras,
  golosa: [
    {
      id: "extra-combo",
      label: "TRIPLE - (carne + cheddar x2 + bacon x2)",
      price: "$ 4.000",
    },
    {
      id: "extra-combo2",
      label: "CUADRUPLE - (carne x2 + cheddar x4 + bacon x4)",
      price: "$ 7.000",
    },
  ],
};
