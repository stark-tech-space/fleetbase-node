"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const serviceQuotes_1 = require("./resources/serviceQuotes");
const purchaseRates_1 = require("./resources/purchaseRates");
const orders_1 = require("./resources/orders");
const payloads_1 = require("./resources/payloads");
class Api {
    constructor({ url = 'https://api.fleetbase.io/v1', timeout = 10 * 1000, apiKey = '', }) {
        this.apiKey = apiKey;
        this.client = axios_1.default.create({
            baseURL: url,
            timeout,
            auth: {
                username: this.apiKey,
                password: '',
            },
        });
        this.serviceQuotes = new serviceQuotes_1.ServiceQuotes(this.client);
        this.purchaseRates = new purchaseRates_1.PurchaseRates(this.client);
        this.orders = new orders_1.Orders(this.client);
        this.payloads = new payloads_1.Payloads(this.client);
    }
}
exports.default = Api;
