import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';

interface ICreatePayloadRequest {
  pickup: string;
  dropoff: string;
  type: string;
  return?: string;
  customer?: string;
  meta?: object;
  cod_amount?: number;
  cod_currency?: CodCurrency;
  cod_payment_method: CodPaymentMethod;
}

export class Payloads {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(params: ICreatePayloadRequest) {
    const res = await this.client.post('/payloads', params);
    return res.data;
  }
}
