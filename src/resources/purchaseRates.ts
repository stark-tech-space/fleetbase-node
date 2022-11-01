import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';

interface ICreatePurchaseRateRequest {
  service_quote: string;
  customer?: string;
}

export class PurchaseRates {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(params: ICreatePurchaseRateRequest) {
    const res = await this.client.post('/purchase-rates', params);
    return res.data;
  }
}
