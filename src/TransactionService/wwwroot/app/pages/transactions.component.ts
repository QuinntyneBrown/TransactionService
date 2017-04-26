import { TransactionService } from "../services";

const template = require("./transactions.component.html");
const styles = require("./transactions.component.scss");

export class TransactionsComponent extends HTMLElement {
    constructor(
        private _transactionService: TransactionService = TransactionService.Instance
    ) {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        this._bind();
        this._setEventListeners();
    }

    private async _bind() {

    }

    private _setEventListeners() {

    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

customElements.define(`ce-transactions`,TransactionsComponent);
