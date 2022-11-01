import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
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
  constructor({
    url = 'https://api.fleetbase.io/v1',
    timeout = 10 * 1000,
    apiKey = '',
  }: IConstructor) {
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: url,
      timeout,
      auth: {
        username: this.apiKey,
        password: '',
      },
    });
    this.serviceQuotes = new ServiceQuotes(this.client);
    this.purchaseRates = new PurchaseRates(this.client);
    this.orders = new Orders(this.client);
    this.payloads = new Payloads(this.client);
  }
}
