const template = require("./hamburger-button.component.html");
const styles = require("./hamburger-button.component.scss");

export class HamburgerButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.openMobileMenu = this.openMobileMenu.bind(this);
    }
    
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        this._setEventListeners();
    }


    private _setEventListeners() {
        this.addEventListener("click", this.openMobileMenu);
    }

    disconnectedCallback() {
        this.removeEventListener("click", this.openMobileMenu);
    }

    public openMobileMenu() {

    }   
}

customElements.define(`ce-hamburger-button`,HamburgerButtonComponent);
