// create a TYPE for hamburger item

type HamburgerItem = {
  id: number;
  type?: string;
  name: string;
  ingredients: string[];
  description: string;
  price: {
    simple: number;
    doble: number;
    triple: number;
    cuadruple: number;
    quintuple: number;
  };
  image: string;
  stock: number;
  discount?: number;
  discountedPrices?: {
    simple: string;
    doble: string;
    triple: string;
    cuadruple: number;
    quintuple: number;
  };
};

type Order = {
  id?: number;
  total: number;
  extras?: string[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  note?: string;
  productName?: string;
  productSize?: string;
  productImage?: string;
  selectedExtras?: { id: string; label: string; price: string }[];
  image?: string;
  quantity: number;
  sauce?: string;
};

type StarterItem = {
  id: number;
  type?: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  image: string;
  stock: number;
  discount?: number;
  discountedPrice?: string;
};

type Extra = {
  id: string;
  label: string;
  price: string;
};

type DrinkItem = {
  id: number;
  type?: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

type DesertItem = {
  id: number;
  type?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
};
