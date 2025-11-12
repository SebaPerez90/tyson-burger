import { Metadata } from "next";

import { allProducts } from "@/src/lib/menu";

import ProductDetailHeader from "@/src/components/menu/ProductDetailHeader";
import StarterDetailCard from "@/src/components/ui/cards/StarterDetailCard";
import HamburgerDetailCard from "@/src/components/ui/cards/HamburgerDetailCard";
import { burgerDiscount } from "@/src/utils/burgerDiscount";

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
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === decodedName
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

  const burgers = allProducts.filter(
    (p) => p.category === "burger"
  ) as HamburgerItem[];

  const burgersWithDiscount = burgerDiscount(burgers);

  const product =
    burgersWithDiscount.find(
      (item) => item.name.toLowerCase().replace(/\s+/g, "-") === decodedName
    ) ||
    allProducts.find(
      (item) => item.name.toLowerCase().replace(/\s+/g, "-") === decodedName
    );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="min-h-screen relative max-w-[1200px] mx-auto mb-16">
      <ProductDetailHeader productName={product.name} />
      {product.type === "burger" ? (
        <HamburgerDetailCard product={product as HamburgerItem} />
      ) : (
        <StarterDetailCard product={product as StarterItem} />
      )}
    </main>
  );
}
