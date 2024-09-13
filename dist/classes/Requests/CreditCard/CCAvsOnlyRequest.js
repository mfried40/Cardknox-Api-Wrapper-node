"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CardknoxRequest_1 = __importDefault(require("../CardknoxRequest"));
class CCAvsOnlyRequest extends CardknoxRequest_1.default {
    constructor() {
        super(...arguments);
        this.xCommand = "cc:AvsOnly";
    }
}
exports.default = CCAvsOnlyRequest;
