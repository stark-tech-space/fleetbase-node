export enum CodCurrency {
  TWD = 'TWD',
  USD = 'USD',
}

export enum CodPaymentMethod {
  CASH = 'cash',
  CARD = 'card',
  CHECK = 'check',
  BANK_TRANSFER = 'bank_transfer',
}

export enum PayloadType {
  FOOD_DELIVERY = 'food_delivery',
  PASSENGER = 'passenger',
  PARCEL = 'parcel',
  TASK = 'task',
}

export interface IPayload {
  id: string;
  pickup: string;
  dropoff: string;
  return: string;
  customer: string;
  meta: Record<string, string>;
  cod_amount: number;
  cod_currency: CodCurrency;
  cod_payment_method: CodPaymentMethod;
  type: 'food_delivery';
  updated_at: string; //"2018-06-08 07:57:48"
  created_at: string;
}
