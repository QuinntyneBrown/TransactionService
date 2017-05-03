"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template = require("./hamburger-button.component.html");
const styles = require("./hamburger-button.component.scss");
class HamburgerButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.openMobileMenu = this.openMobileMenu.bind(this);
    }
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        this._setEventListeners();
    }
    _setEventListeners() {
        this.addEventListener("click", this.openMobileMenu);
    }
    disconnectedCallback() {
        this.removeEventListener("click", this.openMobileMenu);
    }
    openMobileMenu() {
    }
}
exports.HamburgerButtonComponent = HamburgerButtonComponent;
customElements.define(`ce-hamburger-button`, HamburgerButtonComponent);
//# sourceMappingURL=hamburger-button.component.js.map