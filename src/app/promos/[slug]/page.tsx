import { Metadata } from 'next';

import { notFound } from 'next/navigation';

import promos from '@/src/mockup/promos.json';

import ProductDetailHeader from '@/src/components/menu/ProductDetailHeader';
import PromoDetailView from '@/src/components/menu/PromoDetailView';

// Genera los parámetros estáticos
export async function generateStaticParams() {
  return promos.map((item: PromoItem) => ({
    name: item.name.toLowerCase().replace(/\s+/g, '-'),
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
  const product = promos.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, '-') === decodedName,
  );

  if (!product) {
    return { title: 'Producto no encontrado | Hamburguesería' };
  }

  return {
    title: `${product.name} | Hamburguesería`,
    icons: [{ rel: 'icon', url: product.image }],
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

  const promo = promos.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, '-') === decodedName,
  );

  if (!promo) notFound();

  return (
    <main className='h-auto max-h-screen relative max-w-[1200px] mx-auto mb-16'>
      <ProductDetailHeader productName={promo.name} />

      <PromoDetailView product={promo} />
    </main>
  );
}
