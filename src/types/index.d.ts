// create a TYPE for hamburger item

type HamburgerItem = {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  price: {
    simple: number;
    doble: number;
    triple: number;
  };
  image: string;
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
};
