import burgers from "@/src/mockup/burger.json";
import starters from "@/src/mockup/starters.json";

export const allProducts = [
  ...burgers.map((p) => ({ ...p, category: "burger" })),
  ...starters.map((p) => ({ ...p, category: "starter" })),
];
