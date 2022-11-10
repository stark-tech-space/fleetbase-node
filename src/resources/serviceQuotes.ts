import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import { CodCurrency, CodPaymentMethod } from '../types';
import { Point } from 'geojson';

interface IWaypoint {
  name: string;
  street1?: string;
  street2?: string;
  city?: string;
  province?: string;
  neighborhood?: string;
  district?: string;
  country?: string;
  phone?: string;
  location: Point;
  remarks?: string; //not sure if it works
}

interface IRetrieveServiceQuotesRequest {
  special_requests?: string[];
  service_type: string;
  facilitator: string;
  is_route_optimized: boolean;
  waypoints: IWaypoint[];
  schedule_at?: string;
  language?: string;
  remarks?: string;
  sender?: any;
  isPODEnabled?: boolean;
}

interface IRetrieveServiceQuotesResponse {
  id: 'quote_jdq25bm';
  service_rate: null;
  facilitator: 'integrated_vendor_1lqnYLY';
  request_id: 'request_zMZEaJJ';
  amount: 44800;
  currency: 'TWD';
  updated_at: '2022-11-03T11:29:15.000000Z';
  created_at: '2022-11-03T11:29:15.000000Z';
}

const serializeWaypoints = (iwaypoints: IWaypoint[]) => {
  let sparams: Record<string, any> = {};
  iwaypoints.forEach((iwaypoint, index) => {
    Object.entries(iwaypoint).forEach(([key, value]: [string, any]) => {
      if (key === 'location') {
        Object.entries(value).forEach(([key1, value1]: [string, any]) => {
          const sparam = `waypoints[${index}][${key}][${key1}]`;

          if (key1 === 'coordinates') {
            sparams[sparam] = value1.join(',');
          } else {
            sparams[sparam] = value1;
          }
        });

        return;
      }

      const sparam = `waypoints[${index}][${key}]`;
      sparams[sparam] = value;
    });
  });
  return sparams;
};

export class ServiceQuotes {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get({ waypoints, ...params }: IRetrieveServiceQuotesRequest) {
    const serializedParams = serializeWaypoints(waypoints);
    const res = await this.client.get('/service-quotes', {
      params: { ...params, ...serializedParams },
    });
    return res.data;
  }
}
