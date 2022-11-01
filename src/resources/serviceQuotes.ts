import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';

interface IRetrieveServiceQuotesRequest {
  payload?: string;
  service_type?: string;
  pickup?: string; //latitude,longitude || id
  dropoff?: string;
}

export class ServiceQuotes {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(params: IRetrieveServiceQuotesRequest) {
    const res = await this.client.get('/service-quotes', {
      params,
    });
    return res.data;
  }
}
