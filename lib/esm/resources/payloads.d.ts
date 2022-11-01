import { AxiosInstance } from 'axios';
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
export declare class Payloads {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    create(params: ICreatePayloadRequest): Promise<any>;
}
export {};
