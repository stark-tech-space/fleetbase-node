import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';

interface ICreateOrderRequest {
  service_quote: `quote_${string}`;
}

export class Orders {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(params: ICreateOrderRequest) {
    const res = await this.client.post(
      '/orders',
      {},
      {
        params,
      },
    );
    return res.data;
  }
}
