'use client';

import { starterDiscount } from '@/src/utils/starterDiscount';
import StarterCard from '../ui/cards/StarterCard';
import SectionTitle from './SectionTitle';
import mockStartersItems from '@/src/mockup/starters.json';
import { useEffect, useState } from 'react';

const StarterGrid = () => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((v) => v + 1);
    }, 3600000); //re render cada hora

    return () => clearInterval(interval);
  }, []);

  const startersWithDiscount = starterDiscount(mockStartersItems);

  return (
    <section id='starters-section'>
      <SectionTitle title='SNACKS' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {startersWithDiscount.map((item) => (
          <StarterCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default StarterGrid;
