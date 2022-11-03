import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';

interface ICreateOrderRequest {
  service_quote: `quote_${string}`;
}

interface IDeleteOrderRequest {
  id: string;
}

interface ICancelOrderRequest {
  id: string;
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

  async delete(params: IDeleteOrderRequest) {
    const res = await this.client.delete(`/orders/${params.id}`);
    return res.data;
  }

  async cancel(params: ICancelOrderRequest) {
    const res = await this.client.delete(`/orders/${params.id}/cancel`);
    return res.data;
  }
}
