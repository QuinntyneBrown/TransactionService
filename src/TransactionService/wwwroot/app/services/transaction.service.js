"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const environment_1 = require("../environment");
class TransactionService {
    constructor(_fetch = utilities_1.fetch) {
        this._fetch = _fetch;
    }
    static get Instance() {
        this._instance = this._instance || new TransactionService();
        return this._instance;
    }
    get(options) {
        return this._fetch({ url: `${environment_1.environment.baseUrl}api/transaction/get` }).then((results) => {
            return JSON.parse(results).transactions;
        });
    }
    upload(options) {
        return this._fetch({
            url: "/api/transaction/upload",
            method: "POST",
            headers: {},
            authRequired: true,
            data: options.data,
            isObjectData: true
        });
    }
}
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map