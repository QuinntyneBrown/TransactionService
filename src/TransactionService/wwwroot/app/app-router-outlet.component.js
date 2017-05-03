"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class AppRouterOutletComponent extends router_1.RouterOutlet {
    constructor(el) {
        super(el);
    }
    connectedCallback() {
        this.setRoutes([
            { path: "/", name: "transactions" },
            { path: "/upload", name: "upload" },
        ]);
        super.connectedCallback();
    }
}
exports.AppRouterOutletComponent = AppRouterOutletComponent;
customElements.define(`ce-app-router-oulet`, AppRouterOutletComponent);
//# sourceMappingURL=app-router-outlet.component.js.map