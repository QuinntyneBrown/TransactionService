"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("../../container");
const services_1 = require("../services");
const router_1 = require("../router");
const template = require("./landing.component.html");
const styles = require("./landing.component.scss");
class LandingComponent extends HTMLElement {
    constructor(_transactionService = container_1.Container.resolve(services_1.TransactionService), _router = container_1.Container.resolve(router_1.Router)) {
        super();
        this._transactionService = _transactionService;
        this._router = _router;
    }
    static get observedAttributes() {
        return [];
    }
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        this._bind();
        this._setEventListeners();
    }
    _bind() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    _setEventListeners() {
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}
exports.LandingComponent = LandingComponent;
customElements.define(`ce-landing`, LandingComponent);
//# sourceMappingURL=landing.component.js.map