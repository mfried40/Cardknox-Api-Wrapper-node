"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardknoxRequest_1 = require("../CardknoxRequest");
class CCCaptureRequest extends CardknoxRequest_1.CardknoxRequest {
    constructor() {
        super(...arguments);
        this.xCommand = "cc:capture";
    }
}
exports.default = CCCaptureRequest;
