import { AxiosInstance } from 'axios';
import { ServiceQuotes } from './resources/serviceQuotes';
import { PurchaseRates } from './resources/purchaseRates';
import { Orders } from './resources/orders';
import { Payloads } from './resources/payloads';
interface IConstructor {
    url: string;
    timeout?: number;
    apiKey: string;
}
export default class Api {
    client: AxiosInstance;
    apiKey: string;
    serviceQuotes: ServiceQuotes;
    purchaseRates: PurchaseRates;
    orders: Orders;
    payloads: Payloads;
    constructor({ url, timeout, apiKey, }: IConstructor);
}
export {};
