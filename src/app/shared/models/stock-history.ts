import {Product} from './product';

export class StockHistory {
  productId: number;
  type: StockType;
  quantity: number;
  totalQuantity: number;
  unitPrice: number;
  total: number;
  created: string;
  id: number;
  product: Product;
}

export type StockType = 'IN' | 'OUT';
