import { AxiosInstance } from 'axios';
interface IRetrieveServiceQuotesRequest {
    payload?: string;
    service_type?: string;
    pickup?: string;
    dropoff?: string;
}
export declare class ServiceQuotes {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    get(params: IRetrieveServiceQuotesRequest): Promise<any>;
}
export {};
