'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdOutlineKeyboardBackspace } from 'react-icons/md';
const ProductDetailHeader = ({ productName }: { productName: string }) => {
  const pathname = usePathname();

  const isMenu = pathname.startsWith('/menu/');
  const isPromos = pathname.startsWith('/promos');

  return (
    <header className='sticky bg-foreground/60 top-0 w-full z-50  backdrop-blur-xl  flex items-center justify-center py-3 border-b border-white/20 lg:border-b-0'>
      <Link
        href={isMenu ? '/menu' : isPromos ? '/promos' : '/'}
        className='flex items-center gap-3 absolute sm:left-10 left-5'>
        <MdOutlineKeyboardBackspace
          color='#fff'
          className='size-[30px]'
        />
        <span className='sr-only'>Volver al menú</span>
      </Link>
      <h2 className='text-white w-max text-xl md:text-3xl font-bold'>
        {productName}
      </h2>
    </header>
  );
};

export default ProductDetailHeader;
