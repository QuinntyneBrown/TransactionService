"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_middleware_1 = require("./router-middleware");
const utilities_1 = require("../utilities");
class RouteReloadMiddleware extends router_middleware_1.RouterMiddleware {
    beforeViewTransition(options) {
        if (options.previousRouteName == options.nextRouteName) {
            for (var prop in options.routeParams) {
                options.currentView.setAttribute(utilities_1.camelCaseToSnakeCase(prop), options.routeParams[prop]);
            }
            options.cancelled = true;
        }
    }
    onViewTransition(options) {
        return null;
    }
    afterViewTransition(options) {
    }
}
exports.RouteReloadMiddleware = RouteReloadMiddleware;
//# sourceMappingURL=route-reload-middleware.js.map