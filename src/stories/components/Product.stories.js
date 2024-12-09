import { fn } from '@storybook/test';
import Product from '../../components/Product';
import { appleWatch } from '../assets';

export default {
  title: 'Components/Product',
  component: Product,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    addToCart: fn(),
  },
};

export const Default = {
  args: {
    name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    description: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    price: 599,
    image: appleWatch,
    rating: 3,
  },
};
