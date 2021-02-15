export class Stock {
  productId: number;
  name: string;
  type: StockType;
  quantity: number;
  totalQuantity: number;
  unitPrice: number;
  total: number;
  created: string;
}

export type StockType = 'IN' | 'OUT';
