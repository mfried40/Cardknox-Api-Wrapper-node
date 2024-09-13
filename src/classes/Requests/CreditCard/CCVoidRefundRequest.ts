import CardknoxRequest from "../CardknoxRequest";

export default class CCVoidRefundRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:voidrefund";
    xCustom01: string | undefined;
    xRefNum: string | undefined;
}