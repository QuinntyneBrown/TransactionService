"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class LinkComponent extends HTMLElement {
    constructor(_router = router_1.Router.Instance) {
        super();
        this._router = _router;
    }
    static get observedAttributes() {
        return [
            "routesegments",
            "route-name"
        ];
    }
    connectedCallback() {
        this.style.cursor = "pointer";
        this._addEventListeners();
    }
    _addEventListeners() {
        this.addEventListener("click", this.onClick.bind(this));
        this._router.addEventListener(this.onRouteChanged.bind(this));
    }
    onClick(e) { this._router.navigate(this.routeSegments); }
    disconnectedCallback() { this._router.removeEventListener(this.onRouteChanged.bind(this)); }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "active-path":
                this.classList.remove("active");
                if (this.route == newValue)
                    this.classList.add("active");
                break;
            case "routesegments":
                if (newValue)
                    this.routeSegments = JSON.parse(newValue);
                break;
            case "route-name":
                this._routeName = newValue;
                break;
        }
    }
    onRouteChanged(e) {
        this.classList.remove("active");
        if (this._routeName == this._router.activatedRoute.name)
            this.classList.add("active");
    }
    get route() {
        if (!this.routeSegments)
            return "";
        return "/" + this.routeSegments.join("/");
    }
}
exports.LinkComponent = LinkComponent;
customElements.define(`ce-link`, LinkComponent);
//# sourceMappingURL=link.component.js.map