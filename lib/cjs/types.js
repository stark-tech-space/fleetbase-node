"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadType = exports.CodPaymentMethod = exports.CodCurrency = void 0;
var CodCurrency;
(function (CodCurrency) {
    CodCurrency["TWD"] = "TWD";
    CodCurrency["USD"] = "USD";
})(CodCurrency = exports.CodCurrency || (exports.CodCurrency = {}));
var CodPaymentMethod;
(function (CodPaymentMethod) {
    CodPaymentMethod["CASH"] = "cash";
    CodPaymentMethod["CARD"] = "card";
    CodPaymentMethod["CHECK"] = "check";
    CodPaymentMethod["BANK_TRANSFER"] = "bank_transfer";
})(CodPaymentMethod = exports.CodPaymentMethod || (exports.CodPaymentMethod = {}));
var PayloadType;
(function (PayloadType) {
    PayloadType["FOOD_DELIVERY"] = "food_delivery";
    PayloadType["PASSENGER"] = "passenger";
    PayloadType["PARCEL"] = "parcel";
    PayloadType["TASK"] = "task";
})(PayloadType = exports.PayloadType || (exports.PayloadType = {}));
