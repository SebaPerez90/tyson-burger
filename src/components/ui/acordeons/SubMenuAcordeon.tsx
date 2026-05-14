'use client';

import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/src/components/ui/accordion';
import { Checkbox } from '@/src/components/ui/checkbox';
import Image from 'next/image';

interface SubMenuAcordeonProps {
  selectedExtras: Extra[];
  onExtraChange: (extra: Extra) => void;
  extras: Extra[];
}

const SubMenuAcordeon = ({
  selectedExtras,
  onExtraChange,
  extras,
}: SubMenuAcordeonProps) => {
  const [selectedImage, setSelectedImage] = useState<Extra | null>(null);

  return (
    <>
      <Accordion
        type='single'
        defaultValue='item-1'
        className='w-full mt-8 border border-white/20 rounded-xl overflow-hidden'>
        <AccordionItem
          value='item-1'
          className='bg-[#1a1a1a] '>
          <AccordionContent className='p-5'>
            <ul className='flex flex-col gap-4 space-y-3'>
              {extras.map((item, index) => {
                const isSelected = selectedExtras.some((e) => e.id === item.id);

                return (
                  <li
                    key={item.id}
                    className={`flex justify-between items-center gap-4 pb-2 ${
                      index !== extras.length - 1
                        ? 'border-b border-white/10'
                        : ''
                    }`}>
                    <div className='flex items-center gap-2 sm:gap-3'>
                      <Checkbox
                        id={item.id}
                        checked={isSelected}
                        onCheckedChange={() => onExtraChange(item)}
                        className='w-8 h-8 rounded-none sm:rounded-sm bg-zinc-800 border-white/30 cursor-pointer data-[state=checked]:bg-red-500 data-[state=checked]:border-red-400 data-[state=checked]:text-white'
                      />

                      <div className='ml-2 flex flex-col gap-2 items-start min-w-[170px]'>
                        <label
                          htmlFor={item.id}
                          className='text-white'>
                          {item.label}
                        </label>

                        <Image
                          src={item.img}
                          alt={item.label}
                          width={90}
                          height={90}
                          onClick={() => setSelectedImage(item)}
                          className='w-30 h-25 object-cover rounded-md cursor-pointer transition duration-300 hover:scale-105'
                        />
                      </div>
                    </div>

                    <span className='text-white font-medium min-w-max max-w-[90px]'>
                      {item.price}
                    </span>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* MODAL */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-9999 p-4'
          onClick={() => setSelectedImage(null)}>
          {/* BOTON CERRAR */}
          <button
            className='absolute top-5 right-5 text-white text-5xl leading-none hover:scale-110 transition'
            onClick={() => setSelectedImage(null)}>
            ×
          </button>

          {/* CONTENEDOR IMAGEN */}
          <div
            className='relative'
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.img}
              alt={selectedImage.label}
              width={700}
              height={700}
              className='rounded-2xl object-cover max-w-[90vw] max-h-[90vh] shadow-2xl'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SubMenuAcordeon;
