import CardknoxRequest from "../CardknoxRequest";
export default class CheckRefundRequest extends CardknoxRequest {
    readonly xCommand: string;
    xAmount: string | undefined;
    xCustom01: string | undefined;
    xRefNum: string | undefined;
    xIP: string | undefined;
    xAllowDuplicate: string | undefined;
    xCustReceipt: string | undefined;
    xTimeoutSeconds: string | undefined;
}
