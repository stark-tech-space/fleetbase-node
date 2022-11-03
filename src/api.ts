import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { Places } from './resources/places';
import { ServiceQuotes } from './resources/serviceQuotes';
import { Orders } from './resources/orders';

interface IConstructor {
  url: string;
  timeout?: number;
  apiKey: string;
  development?: boolean;
}

export default class Api {
  client: AxiosInstance;
  apiKey: string;
  serviceQuotes: ServiceQuotes;
  places: Places;
  orders: Orders;
  development: boolean;
  constructor({
    url = 'https://api.fleetbase.io/v1',
    timeout = 10 * 1000,
    apiKey = '',
    development = false,
  }: IConstructor) {
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: url,
      timeout,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    this.development = development;

    if (this.development) {
      this.client.interceptors.response.use(
        function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          console.log(response);
          return response;
        },
        function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          console.log(error.code, error.message, JSON.stringify(error.response.data, null, 2));
          return Promise.reject(error);
        },
      );
    }

    this.places = new Places(this.client);
    this.serviceQuotes = new ServiceQuotes(this.client);
    this.orders = new Orders(this.client);
  }
}
