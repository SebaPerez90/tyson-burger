'use client';

import promos from '@/src/mockup/promos.json';
import PromoCard from '../ui/cards/PromoCard';
import SectionTitle from './SectionTitle';

import { useArgentinaBusinessRules } from '@/src/hooks/UseArgentinaBusinessRules';
import Link from 'next/link';
import { Button } from '../ui/button';

const PromosGrid = () => {
  const { hasSurcharge } = useArgentinaBusinessRules();

  return (
    <section id='promos-section'>
      {hasSurcharge ? (
        <div className='flex flex-col items-center justify-center text-center py-16 px-6 h-[50dvh]'>
          <h2 className='text-xl sm:text-2xl font-bold text-orange-200 mb-3'>
            🍔 Promociones no disponibles hoy
          </h2>

          <p className='text-white/80 mb-6 max-w-xl'>
            Nuestras promociones están disponibles únicamente de{' '}
            <b>jueves a domingo</b>. Mientras tanto, podés seguir viendo todas
            nuestras burgers en el menú.
          </p>

          <Link href='/menu'>
            <Button
              variant='destructive'
              size='lg'
              className='rounded-full shadow-lg hover:scale-[1.03] transition-transform'>
              Ir al menú 🍔
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <SectionTitle
            title='PROMOCIONES'
            subtitle='LOS COMBOS NO SE PUEDE MODIFICAR'
          />
          <div className='flex items-center justify-center flex-wrap gap-5'>
            {promos.map((item) => (
              <PromoCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default PromosGrid;
