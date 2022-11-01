import { AxiosInstance } from 'axios';
interface ICreatePurchaseRateRequest {
    service_quote: string;
    customer?: string;
}
export declare class PurchaseRates {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    create(params: ICreatePurchaseRateRequest): Promise<any>;
}
export {};
