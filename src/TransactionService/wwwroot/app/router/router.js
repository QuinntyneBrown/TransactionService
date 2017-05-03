"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerKeys = {
    currentRoute: "[Router] current route"
};
class Router {
    constructor(_routes = []) {
        this._routes = _routes;
        this._callbacks = [];
    }
    get activatedRoute() {
        return Object.assign(this._routes.find(r => r.name === this._routeName), { routeParams: this._routeParams });
    }
    addEventListener(callback) {
        this._callbacks.push(callback);
        if (this._routeName)
            callback({ routeName: this._routeName, routeParams: this._routeParams, nextRoute: this.activatedRoute });
    }
    removeEventListener(callback) {
        this._callbacks.splice(this._callbacks.indexOf(callback), 1);
    }
    setRoutes(routes) {
        this._routes = routes;
        this._addEventListeners();
        this._onChanged({ route: this._initialRoute });
    }
    navigate(routeSegments) {
        this._onChanged({ routeSegments: routeSegments });
    }
    navigateUrl(path) {
        this._onChanged({ routeSegments: path.slice(1, path.length).split("/") });
    }
    _onChanged(state) {
        let routeParams = {};
        let match = false;
        if (state.routeSegments)
            state.route = "/" + state.routeSegments.join("/");
        for (var i = 0; i < this._routes.length; i++) {
            if (state.route == this._routes[i].path) {
                this._onRouteMatch(this._routes[i].name);
                match = true;
            }
        }
        if (!match) {
            const _currentSegments = state.route.substring(1).split("/");
            for (let i = 0; i < this._routes.length; i++) {
                const segments = this._routes[i].path.substring(1).split("/");
                if (_currentSegments.length === segments.length) {
                    for (var x = 0; x < segments.length; x++) {
                        if (_currentSegments[x] == segments[x]) {
                            match = true;
                        }
                        else if (segments[x].charAt(0) == ":") {
                            match = true;
                            routeParams[segments[x].substring(1)] = _currentSegments[x];
                        }
                        else {
                            match = false;
                            break;
                        }
                    }
                    if (match) {
                        this._onRouteMatch(this._routes[i].name, routeParams);
                        i = this._routes.length;
                    }
                }
            }
        }
        if (!match)
            for (var i = 0; i < this._routes.length; i++) {
                if (this._routes[i].path === "*") {
                    this._onRouteMatch(this._routes[i].name);
                    match = true;
                }
            }
        history.pushState({}, this._routeName, state.route);
        this._callbacks.forEach(callback => callback({ routeName: this._routeName, routeParams: this._routeParams, nextRoute: this.activatedRoute }));
    }
    _onRouteMatch(name, routeParams = null) {
        this._routeName = name;
        this._routeParams = routeParams;
    }
    _addEventListeners() {
        window.onpopstate = () => this._onChanged({ route: window.location.pathname });
    }
    get _initialRoute() { return window.location.pathname; }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map