import { Container } from "../../container";
import { TransactionService } from "../services";
import { Router } from "../router";

const template = require("./landing.component.html");
const styles = require("./landing.component.scss");

export class LandingComponent extends HTMLElement {
    constructor(
        private _transactionService: TransactionService = Container.resolve(TransactionService),
        private _router: Router = Container.resolve(Router)
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

customElements.define(`ce-landing`,LandingComponent);
