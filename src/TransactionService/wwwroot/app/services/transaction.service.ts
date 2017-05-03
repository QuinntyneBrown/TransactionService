import { fetch } from "../utilities";

export class TransactionService {    

    public get(options: { skip:any, limit:any }): Promise<Array<any>> {
        return fetch({ url: `api/transaction/get` }).then((results:string) => {
            return (JSON.parse(results) as { transactions: Array<any> }).transactions;
        });
    }

    public upload(options: {data : any }) {
        return fetch({
            url: "/api/transaction/upload",
            method: "POST",
            headers: {},
            authRequired: true,
            data: options.data,
            isObjectData: true
        })
    }
}
