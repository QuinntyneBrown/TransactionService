"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class AppRouterOutletComponent extends router_1.RouterOutlet {
    constructor(el) {
        super(el);
    }
    connectedCallback() {
        this.setRoutes([
            { path: "/", name: "upload", authRequired: true },
        ]);
        super.connectedCallback();
    }
}
exports.AppRouterOutletComponent = AppRouterOutletComponent;
customElements.define(`ce-app-router-oulet`, AppRouterOutletComponent);
//# sourceMappingURL=app-router-outlet.component.js.map