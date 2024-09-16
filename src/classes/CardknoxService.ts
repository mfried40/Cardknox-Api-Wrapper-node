import CardknoxRequest from "./Requests/CardknoxRequest";
import CardknoxResponse from "./CardknoxResponse";
import axios from 'axios';

const CARDKNOX_URL: string = "https://x1.cardknox.com/gatewayjson";

export default class CardknoxService {
    xKey: string;
    xVersion: string = "5.0.0";
    xSoftwareName: string;
    xSoftwareVersion: string;
    constructor(apiKey: string, softwareName: string, softwareVersion: string) {
        this.xKey = apiKey;
        this.xSoftwareName = softwareName;
        this.xSoftwareVersion = softwareVersion;
    };
    async Process(request: CardknoxRequest): Promise<CardknoxResponse> {
        this.populateCommonFields(request);
        const res = await axios.post(CARDKNOX_URL, request);
        const response: CardknoxResponse = res.data;
        return response;
    }

    populateCommonFields(request: CardknoxRequest) {
        request.xKey = this.xKey;
        request.xVersion = this.xVersion;
        request.xSoftwareName = this.xSoftwareName;
        request.xSoftwareVersion = this.xSoftwareVersion;
    }
}