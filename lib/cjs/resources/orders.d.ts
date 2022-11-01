import { AxiosInstance } from 'axios';
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
export declare class Orders {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    create(params: ICreateOrderRequest): Promise<any>;
}
export {};
