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
const template = require("./hamburger-button.component.html");
const styles = require("./hamburger-button.component.scss");
class HamburgerButtonComponent extends HTMLElement {
    constructor() {
        super();
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
exports.HamburgerButtonComponent = HamburgerButtonComponent;
customElements.define(`ce-hamburger-button`, HamburgerButtonComponent);
//# sourceMappingURL=hamburger-button.component.js.map