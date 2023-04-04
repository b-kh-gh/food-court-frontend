import { Food } from './app/shared/models/food';
import { Tag } from './app/shared/models/tag';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'پیتزا',
    cookTime: '10-20',
    price: 100000,
    favorite: false,
    origins: ['ایتالیا'],
    stars: 4.5,
    imageUrl: 'assets/images/food-1.jpg',
    tags: ['فست فود', 'پیتزا'],
  },
  {
    id: '2',
    name: 'کوفته',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['آسیا', 'ایران', 'چین'],
    stars: 4.7,
    imageUrl: 'assets/images/food-2.jpg',
    tags: ['غذای راحت', 'ناهار'],
  },
  {
    id: '3',
    name: 'همبرگر',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['المان', 'آمریکا'],
    stars: 3.5,
    imageUrl: 'assets/images/food-3.jpg',
    tags: ['فستفود', 'همبرگر'],
  },
  {
    id: '4',
    name: 'سیبزمینی سرخ کرده',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['بلژیک', 'فرانسه'],
    stars: 3.3,
    imageUrl: 'assets/images/food-4.jpg',
    tags: ['فستفود', 'سرخ شده'],
  },
  {
    id: '5',
    name: 'سوپ مرغ',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['هند', 'آسیا'],
    stars: 3.0,
    imageUrl: 'assets/images/food-5.jpg',
    tags: ['غذای راحت', 'سوپ'],
  },
  {
    id: '6',
    name: 'پیتزا سبزیجات',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['ایتالیا'],
    stars: 4.0,
    imageUrl: 'assets/images/food-6.jpg',
    tags: ['فستفود', 'پیتزا', 'ناهار'],
  },
  {
    id: '7',
    name: 'همبرگر پنیر',
    price: 12,
    cookTime: '20-30',
    favorite: false,
    origins: ['هند'],
    stars: 4.0,
    imageUrl: 'assets/images/food-7.jpg',
    tags: ['فستفود', 'همبرگر', 'ناهار'],
  },
  {
    id: '8',
    name: 'پیتزا سبزیجات',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['هند'],
    stars: 4.0,
    imageUrl: 'assets/images/food-8.jpg',
    tags: ['فستفود', 'پیتزا', 'ناهار'],
  },
];

export const sample_tags: Tag[] = [
  { name: 'All', count: 8 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 3 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 2 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
];
