import { TransactionService } from "./app/services/transaction.service";
import { Router } from "./app/router";

export const createIocContainer = () => [
    TransactionService,
    Router
];