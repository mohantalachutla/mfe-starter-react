import { fn } from '@storybook/test';
import Product from '../../pages/Home';
import { appleWatch } from '../assets';

export default {
  title: 'Pages/Product',
  component: Product,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    addToCart: fn(),
  },
};

export const Default = {
  args: {
    products: [
      {
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        description:
          'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        price: 599,
        image: appleWatch,
        rating: 4,
      },
      {
        name: 'Apple Watch Series 8 GPS, Aluminium Case, Starlight Sport',
        description:
          'Apple Watch Series 8 GPS, Aluminium Case, Starlight Sport',
        price: 699,
        image: appleWatch,
        rating: 5,
      },
    ],
  },
};

export const Empty = {
  args: {
    products: [],
  },
};
