"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCSaleRequest = void 0;
const CardknoxRequest_1 = require("../CardknoxRequest");
class CCSaleRequest extends CardknoxRequest_1.CardknoxRequest {
    constructor() {
        super(...arguments);
        this.xCommand = "cc:sale";
    }
}
exports.CCSaleRequest = CCSaleRequest;
