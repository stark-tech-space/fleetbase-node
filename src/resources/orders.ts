import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';

interface ICreateOrderRequest {
  payload: string;
  dispatch?: boolean;
  scheduled_at?: string;
  driver?: string;
  facilitator?: string;
  customer?: string;
  meta?: object;
  notes?: string;
}

export class Orders {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(params: ICreateOrderRequest) {
    const res = await this.client.post('/orders', params);
    return res.data;
  }
}
