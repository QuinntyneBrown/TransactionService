"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class TransactionService {
    get(options) {
        return utilities_1.fetch({ url: `api/transaction/get` }).then((results) => {
            return JSON.parse(results).transactions;
        });
    }
    upload(options) {
        return utilities_1.fetch({
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