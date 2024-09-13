import CardknoxRequest from "./Requests/CardknoxRequest";
import CardknoxResponse from "./CardknoxResponse";
export default class CardknoxService {
    xKey: string;
    xVersion: string;
    xSoftwareName: string;
    xSoftwareVersion: string;
    constructor(apiKey: string, softwareName: string, softwareVersion: string);
    Process(request: CardknoxRequest): Promise<CardknoxResponse>;
    populateCommonFields(request: CardknoxRequest): void;
}
