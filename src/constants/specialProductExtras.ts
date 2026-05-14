import { burgerExtras } from './burgerExtras';

export const specialProductExtras: Record<string, Extra[]> = {
  'volcan-de-cheddar': [
    {
      id: 'extra-meat',
      label: 'Medallon de carne + cheddar x2',
      price: '$ 4.000',
      img: '',
    },
    {
      id: 'extra-meatx2',
      label: 'Medallon de carne x2 + cheddar x4',
      price: '$ 7.000',
      img: '',
    },
  ],

  'chicken-crispy': burgerExtras,
  'melt-chicken': burgerExtras,
  golosa: [
    {
      id: 'extra-combo',
      label: 'TRIPLE',
      price: '$ 4.000',
      img: '',
    },
    {
      id: 'extra-combo2',
      label: 'CUADRUPLE',
      price: '$ 7.000',
      img: '',
    },
  ],
};
