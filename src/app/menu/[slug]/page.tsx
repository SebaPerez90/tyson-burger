// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import menuData from "@/src/mockup/menu.json";

import { MdKeyboardBackspace } from "react-icons/md";
import SubMenuAcordeon from "@/src/components/ui/acordeons/SubMenuAcordeon";

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
    <div className="min-h-screen relative mb-6">
      {/* Botón volver */}
      <Link href="/menu" className="absolute left-0 top-5 z-20">
        <MdKeyboardBackspace
          size={35}
          color="#fff"
          className="cursor-pointer"
        />
      </Link>

      <div className=" flex flex-col justify-center items-center grow max-w-[500px] mx-auto">
        {/* Imagen */}
        <div className="w-full ">
          <Image
            width={500}
            height={400}
            src={product.image}
            alt={product.name}
            className="rounded-2xl object-cover saturate-[1.2] size-full"
          />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col justify-center w-full mt-6">
          <h1 className="text-4xl font-bold text-orange-100 mb-4">
            {product.name}
          </h1>

          <p className="text-white/80 text-lg mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* ingredientes */}
          <h3 className="text-xl font-semibold text-white my-3">
            Ingredientes:
          </h3>
          <ul className="list-disc list-inside marker:text-green-500 text-white/70 space-y-1">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          {/* precio   */}
          <span className="text-3xl font-bold text-white mt-8">
            {product.price}
          </span>
        </div>

        <SubMenuAcordeon />

        {/* Nota al producto */}
        <div className="mt-10 w-full border border-white/10 rounded-2xl p-4 bg-[#1a1a1a]">
          <label
            htmlFor="note"
            className="block text-xl text-white font-medium mb-2"
          >
            Nota al producto
          </label>
          <textarea
            id="note"
            placeholder="Aclar&aacute; lo que necesites "
            className="w-full rounded-lg bg-transparent border border-white/20 text-white placeholder:text-white/50 p-3 outline-none resize-none focus:border-red-600 transition"
            rows={7}
          />
        </div>
      </div>
    </div>
  );
}
