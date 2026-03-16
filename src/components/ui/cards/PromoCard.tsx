'use client';

import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PromoCard = ({ item }: { item: PromoItem }) => {
  const router = useRouter();

  return (
    <div
      key={item.id}
      style={item.stock < 10 ? { display: 'none' } : {}}
      className='bg-linear-to-b from-[#1a0000] to-[#2b0000] rounded-2xl overflow-hidden border border-white/15 flex flex-row md:flex-col justify-between cursor-pointer h-[170px] sm:h-[300px] md:h-auto active:scale-[0.98] active:brightness-90 transition-all select-none active:from-[#310000] active:to-[#430000] w-full'
      onClick={() =>
        router.push(`/promos/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
      }>
      {/* IMAGE */}
      <div className='p-2 md:p-4 w-[60%] md:w-auto h-auto md:h-[400px]'>
        <div className='overflow-hidden rounded-2xl md:rounded-none lg:rounded-2xl size-full'>
          <Image
            width={1000}
            height={1000}
            src={item.image}
            alt={item.name}
            loading='eager'
            className='object-cover size-full scale-9aaa5 sm:scale-100 saturate-[1.2] transition-all duration-300 ease-in-out hover:scale-110 rounded-xl'
          />
        </div>
      </div>

      {/* BODY */}
      <div className='p-3 pl-1 lg:p-6 lg:pt-0 flex flex-col justify-between grow z-40'>
        <div>
          <span className='text-lg md:text-xl lg:text-2xl text-orange-200 font-bold mb-3 block leading-5 w-max'>
            {item.name}
          </span>

          {/* INGREDIENTES */}
          <ul className='flex flex-col w-max pb-1.5  marker:text-green-500 text-[10px] text-white/60 lg:block list-disc list-inside lg:text-sm overflow-hidden h-auto'>
            {item.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio + Botones */}
        <div className='flex flex-col gap-0.5 mt-auto pt-2 border-t border-white/10 lg:h-auto lg:min-h-[62px]'>
          <div className='flex flex-row items-center gap-0.5'>
            <span className='text-xl font-bold font-baloo text-white'>
              ${item.price.toLocaleString()}
            </span>
          </div>

          <Link
            className='hidden lg:block'
            href={`/menu/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Button
              variant='destructive'
              size='lg'
              className='w-full rounded-full cursor-pointer shadow-lg hover:scale-[1.02] transition-transform mt-3'>
              Armar pedido 🍔
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
