"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_router_outlet_component_1 = require("./app-router-outlet.component");
const template = require("./app.component.html");
const styles = require("./app.component.scss");
class AppComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        new app_router_outlet_component_1.AppRouterOutletComponent(this.querySelector(".router-outlet"));
    }
}
exports.AppComponent = AppComponent;
customElements.define(`ce-app`, AppComponent);
//# sourceMappingURL=app.component.js.map