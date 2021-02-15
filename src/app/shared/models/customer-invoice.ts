import {Customer} from './customer';
import {CustomerInvoiceConcept} from './customer-invoice-concept';

export class CustomerInvoice {
  id: number;
  customerId: number;
  total: number;
  created: string;
  customer: Customer;
  concepts: CustomerInvoiceConcept[];
}
