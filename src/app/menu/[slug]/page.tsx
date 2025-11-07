import { Metadata } from "next";
import { notFound } from "next/navigation";

import menuData from "@/src/mockup/menu.json";

import ProductDetailCard from "@/src/components/ui/cards/ProductDetailCard";
import ProductDetailHeader from "@/src/components/menu/ProductDetailHeader";

// Genera los parámetros estáticos
export async function generateStaticParams() {
  return menuData.map((item) => ({
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
  const product = menuData.find(
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
      url: `https://tusitio.com/menu/${decodedName}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedName = decodeURIComponent(slug);

  const product = menuData.find(
    (item) => item.name.toLocaleLowerCase().replace(/\s+/g, "-") === decodedName
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen relative max-w-[1200px] mx-auto mb-16">
      {/* header product detail */}
      <ProductDetailHeader productName={product.name} />

      {/* Detalles del producto */}
      <ProductDetailCard product={product} />
    </main>
  );
}
