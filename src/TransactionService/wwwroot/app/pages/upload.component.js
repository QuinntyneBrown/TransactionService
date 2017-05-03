"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const container_1 = require("../../container");
const template = require("./upload.component.html");
const styles = require("./upload.component.scss");
class UploadComponent extends HTMLElement {
    constructor(_transactionService = container_1.Container.resolve(services_1.TransactionService)) {
        super();
        this._transactionService = _transactionService;
        this._onFileDrop = this._onFileDrop.bind(this);
        this._onFileDragOver = this._onFileDragOver.bind(this);
    }
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        this._setEventListeners();
    }
    _setEventListeners() {
        this._dropZoneElement.addEventListener("dragover", this._onFileDragOver);
        this._dropZoneElement.addEventListener("drop", this._onFileDrop, false);
    }
    disconnectedCallback() {
        this._dropZoneElement.removeEventListener("dragover", this._onFileDragOver);
        this._dropZoneElement.removeEventListener("drop", this._onFileDrop, false);
    }
    _onFileDragOver(dragEvent) {
        dragEvent.stopPropagation();
        dragEvent.preventDefault();
    }
    _onFileDrop(dragEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
                let packageFiles = function (fileList) {
                    let formData = new FormData();
                    for (let i = 0; i < fileList.length; i++) {
                        formData.append(fileList[i].name, fileList[i]);
                    }
                    return formData;
                };
                var data = packageFiles(dragEvent.dataTransfer.files);
                const results = yield this._transactionService.upload({ data: data });
            }
        });
    }
    get _dropZoneElement() { return this.querySelector(".drop-zone"); }
}
exports.UploadComponent = UploadComponent;
customElements.define(`ce-upload`, UploadComponent);
//# sourceMappingURL=upload.component.js.map