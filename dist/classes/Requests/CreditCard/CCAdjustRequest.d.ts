import CardknoxRequest from "../CardknoxRequest";
export default class CCAdjustRequest extends CardknoxRequest {
    readonly xCommand: string;
    xAmount: string | undefined;
    xCustom01: string | undefined;
    xCustom02: string | undefined;
    xCustom03: string | undefined;
    xStreet: string | undefined;
    xZip: string | undefined;
    xRefNum: string | undefined;
    xName: string | undefined;
    xDescription: string | undefined;
    OrderID: string | undefined;
    xTip: string | undefined;
    xTax: string | undefined;
    xSignature: string | undefined;
    xInvoice: string | undefined;
}
