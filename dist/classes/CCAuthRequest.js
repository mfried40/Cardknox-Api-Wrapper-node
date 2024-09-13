"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCAuthRequest = void 0;
const CardknoxRequest_1 = require("./CardknoxRequest");
class CCAuthRequest extends CardknoxRequest_1.CardknoxRequest {
    constructor() {
        super(...arguments);
        this.xCommand = "cc:authonly";
    }
}
exports.CCAuthRequest = CCAuthRequest;
