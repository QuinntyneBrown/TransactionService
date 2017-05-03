"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_ioc_container_1 = require("./create-ioc-container");
const injection_js_1 = require("injection-js");
class Container {
    constructor() {
        this._injector = injection_js_1.ReflectiveInjector.resolveAndCreate(create_ioc_container_1.createIocContainer());
    }
    static get Instance() {
        this._instance = this._instance || new this();
        return this._instance;
    }
    static resolve(token) {
        return this.Instance._injector.get(token);
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map