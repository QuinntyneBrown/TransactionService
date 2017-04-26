import { TransactionService } from "../services";

const template = require("./upload.component.html");
const styles = require("./upload.component.scss");

export class UploadComponent extends HTMLElement {
    constructor(
        private _transactionService: TransactionService =  TransactionService.Instance
    ) {
        super();
        this._onFileDrop = this._onFileDrop.bind(this);
        this._onFileDragOver = this._onFileDragOver.bind(this);
    }

    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
        this._setEventListeners();
    }

    private _setEventListeners() {      
        this._dropZoneElement.addEventListener("dragover", this._onFileDragOver);
        this._dropZoneElement.addEventListener("drop", this._onFileDrop, false);       
    }

    disconnectedCallback() {
        this._dropZoneElement.removeEventListener("dragover", this._onFileDragOver);
        this._dropZoneElement.removeEventListener("drop", this._onFileDrop, false);  
    }

    private _onFileDragOver(dragEvent: DragEvent) {
        dragEvent.stopPropagation();
        dragEvent.preventDefault();
    }

    private async _onFileDrop(dragEvent: DragEvent) {
        dragEvent.stopPropagation();
        dragEvent.preventDefault();

        if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
            var packageFiles = function (fileList: FileList) {
                var formData = new FormData();
                for (var i = 0; i < fileList.length; i++) {
                    formData.append(fileList[i].name, fileList[i]);
                }
                return formData;
            }
            var data = packageFiles(dragEvent.dataTransfer.files);

            const results = await this._transactionService.upload({ data: data }) as string;
        }
    }

    private get _dropZoneElement(): HTMLElement { return this.querySelector(".drop-zone") as HTMLElement; }
}

customElements.define(`ce-upload`,UploadComponent);
