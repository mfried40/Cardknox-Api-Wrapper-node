import CardknoxRequest from "../CardknoxRequest";

export default class CCRefundRequest extends CardknoxRequest{
    readonly xCommand: string = "cc:refund";
    xAmount: string | undefined;
    xCustom01: string | undefined;
    xAllowDuplicate: string | undefined;
    xDescription: string | undefined;
    xRefNum: string | undefined;
    xCustReceipt: string | undefined;
    xTimeoutSeconds: string | undefined;
}