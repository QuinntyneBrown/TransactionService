"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCaseToSnakeCase = (value) => value.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2');
//# sourceMappingURL=camel-case-to-snake-case.js.map