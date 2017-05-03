"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = (options) => {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method || "GET", options.url, true);
        options.headers = options.headers || { "Content-Type": "application/json;charset=UTF-8" };
        for (var prop in options.headers) {
            xhr.setRequestHeader(prop, options.headers[prop]);
        }
        xhr.onload = (e) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                }
                else {
                    resolve(xhr.responseText);
                }
            }
        };
        if (!options.isObjectData && typeof options.data != "string") {
            options.data = JSON.stringify(options.data);
        }
        xhr.send(options.data);
    });
};
//# sourceMappingURL=fetch.js.map