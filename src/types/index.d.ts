// create a TYPE for hamburger item

type HamburgerItem = {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  price: string;
  image: string;
};

type Order = {
  total: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  note?: string;
  productName?: string;
  productSize?: string;
  productImage?: string;
  selectedExtras?: { id: string; label: string; price: string }[];
};
