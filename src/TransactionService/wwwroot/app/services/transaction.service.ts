import { fetch } from "../utilities";
import { environment } from "../environment";

export class TransactionService {
    constructor(private _fetch = fetch) { }

    private static _instance: TransactionService;

    public static get Instance() {
        this._instance = this._instance || new TransactionService();
        return this._instance;
    }

    public get(options: { skip:any, limit:any }): Promise<Array<any>> {
        return this._fetch({ url: `${environment.baseUrl}api/transaction/get` }).then((results:string) => {
            return (JSON.parse(results) as { transactions: Array<any> }).transactions;
        });
    }

    public upload(options: {data : any }) {
        return this._fetch({
            url: "/api/transaction/upload",
            method: "POST",
            headers: {},
            authRequired: true,
            data: options.data,
            isObjectData: true
        })
    }
}
