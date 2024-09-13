"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const CARDKNOX_URL = "https://x1.cardknox.com/gatewayjson";
class CardknoxService {
    constructor(apiKey, softwareName, softwareVersion) {
        this.xVersion = "5.0.0";
        this.xKey = apiKey;
        this.xSoftwareName = softwareName;
        this.xSoftwareVersion = softwareVersion;
    }
    ;
    Process(request) {
        return __awaiter(this, void 0, void 0, function* () {
            this.populateCommonFields(request);
            console.log("Request: ", request);
            const res = yield axios_1.default.post(CARDKNOX_URL, request);
            const response = res.data;
            return response;
        });
    }
    populateCommonFields(request) {
        request.xKey = this.xKey;
        request.xVersion = this.xVersion;
        request.xSoftwareName = this.xSoftwareName;
        request.xSoftwareVersion = this.xSoftwareVersion;
    }
}
exports.default = CardknoxService;
