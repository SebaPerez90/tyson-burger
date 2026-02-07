import { Metadata } from "next";

import { notFound } from "next/navigation";

import { allProducts } from "@/src/lib/menu";
import { burgerDiscount } from "@/src/utils/burgerDiscount";
import { starterDiscount } from "@/src/utils/starterDiscount";

import ProductDetailHeader from "@/src/components/menu/ProductDetailHeader";
import StarterDetailCard from "@/src/components/ui/cards/StarterDetailCard";
import HamburgerDetailCard from "@/src/components/ui/cards/HamburgerDetailCard";

// Genera los parámetros estáticos
export async function generateStaticParams() {
  return allProducts.map((item) => ({
    name: item.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

// Metadata dinámica
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const decodedName = decodeURIComponent(slug);
  const product = allProducts.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === decodedName,
  );

  if (!product) {
    return { title: "Producto no encontrado | Hamburguesería" };
  }

  return {
    title: `${product.name} | Hamburguesería`,
    icons: [{ rel: "icon", url: product.image }],
    description: product.description,
    openGraph: {
      title: `${product.name} | Hamburguesería`,
      description: product.description,
      images: [product.image],
      url: `https://tyson-burger.vercel.app/menu/${decodedName}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const decodedName = decodeURIComponent(slug);

  // 🔍 Buscamos el producto base (sin descuentos todavía)
  const baseProduct = allProducts.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === decodedName,
  );

  if (!baseProduct) notFound();

  let product: HamburgerItem | StarterItem = baseProduct as
    | HamburgerItem
    | StarterItem;

  // 💡 Aplico descuentos según la categoría
  switch (baseProduct.category) {
    case "burger": {
      const burgers = allProducts.filter(
        (p) => p.category === "burger",
      ) as HamburgerItem[];
      const burgersWithDiscount = burgerDiscount(burgers);

      product = (burgersWithDiscount.find(
        (b) => b.name.toLowerCase().replace(/\s+/g, "-") === decodedName,
      ) || baseProduct) as HamburgerItem;
      break;
    }

    case "starter": {
      const starters = allProducts.filter(
        (p) => p.category === "starter",
      ) as StarterItem[];
      const startersWithDiscount = starterDiscount(starters);
      product = (startersWithDiscount.find(
        (s) => s.name.toLowerCase().replace(/\s+/g, "-") === decodedName,
      ) || baseProduct) as HamburgerItem | StarterItem;
      break;
    }

    // ✨ Si mañana agregás más categorías (bebidas, postres, etc.)
    // simplemente agregás un nuevo "case"
    default:
      notFound();
  }

  return (
    <main className="min-h-screen relative max-w-[1200px] mx-auto mb-16">
      <ProductDetailHeader productName={product.name} />

      {product.type === "burger" && (
        <HamburgerDetailCard product={product as HamburgerItem} />
      )}

      {product.type === "starter" && (
        <StarterDetailCard product={product as StarterItem} />
      )}
    </main>
  );
}
