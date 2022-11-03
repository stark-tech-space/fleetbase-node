import { AxiosInstance } from 'axios';

interface ISearchPlacesRequest {
  query: string;
  latitude: number;
  longitude: number;
  language?: string; //languageCode from google places https://developers.google.com/maps/faq#languagesupport
}

interface IQueryPlacesRequest {
  limit?: number;
}

export class Places {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async search(params: ISearchPlacesRequest) {
    const res = await this.client.get('/places/search', {
      params,
    });

    return res.data;
  }

  async query(params: IQueryPlacesRequest) {
    const res = await this.client.get('/places', {
      params,
    });

    return res.data;
  }
}
