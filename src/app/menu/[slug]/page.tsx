// import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import menuData from "@/src/mockup/menu.json";

import { MdKeyboardBackspace } from "react-icons/md";
import ProductDetailCard from "@/src/components/ui/cards/ProductDetailCard";

// // Genera los parámetros estáticos
// export async function generateStaticParams() {
//   return menuData.map((item) => ({
//     name: item.name.toLowerCase().replace(/\s+/g, "-"),
//   }));
// }

// // Metadata dinámica
// export async function generateMetadata({
//   params,
// }: {
//   params: { name: string };
// }): Promise<Metadata> {
//   const decodedName = decodeURIComponent(params.name);
//   const product = menuData.find(
//     (item) => item.name.toLowerCase().replace(/\s+/g, "-") === decodedName
//   );

//   if (!product) {
//     return { title: "Producto no encontrado | Hamburguesería" };
//   }

//   return {
//     title: `${product.name} | Hamburguesería`,
//     description: product.description,
//     openGraph: {
//       title: `${product.name} | Hamburguesería`,
//       description: product.description,
//       images: [product.image],
//       url: `https://tusitio.com/menu/${decodedName}`,
//     },
//   };
// }

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
    <div className="min-h-screen relative mb-24">
      {/* Botón volver */}
      <Link
        href="/menu"
        className="fixed left-10 top-30 z-50 p-1.5 rounded-full bg-white hover:bg-white/95 transition"
      >
        <MdKeyboardBackspace size={30} className="cursor-pointer" />
      </Link>

      {/* Detalles del producto */}
      <ProductDetailCard product={product} />
    </div>
  );
}
