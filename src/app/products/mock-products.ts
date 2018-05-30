import {Product} from './product';

const URL_START = 'https://dummyimage.com/250x250/000/fff&text=';

export const PRODUCTS: Product[] = [
  new Product(1, 'Milk', 'Super Milk', 40, `${URL_START}milk`),
  new Product(2, 'Bread', 'Super Bread', 20, `${URL_START}bread`),
  new Product(3, 'Potato', 'Super Potato', 30, `${URL_START}potato`),
  new Product(4, 'Tomato', 'Super Tomato', 120, `${URL_START}tomato`),
  new Product(5, 'Melon', 'Super Melon', 80, `${URL_START}melon`),
  new Product(6, 'Watermelon', 'Super Watermelon', 300, `${URL_START}watermelon`),
  new Product(7, 'Onion', 'Super Onion', 30, `${URL_START}onion`),
  new Product(8, 'Carrot', 'Super Carrot', 70, `${URL_START}carrot`),
  new Product(9, 'Cake', 'Super Cake', 60, `${URL_START}cake`),
  new Product(10, 'Lemon', 'Super Lemon', 70, `${URL_START}lemon`)
];
