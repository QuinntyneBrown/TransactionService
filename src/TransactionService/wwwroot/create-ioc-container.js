"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_service_1 = require("./app/services/transaction.service");
const router_1 = require("./app/router");
exports.createIocContainer = () => [
    transaction_service_1.TransactionService,
    router_1.Router
];
//# sourceMappingURL=create-ioc-container.js.map