import {Product} from './product';

export class CustomerInvoiceConcept {
  id: number;
  productId: number;
  unitPrice: number;
  quantity: number;
  total: number;
  customerInvoiceId: number;
  product: Product;
}
