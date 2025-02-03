import CardknoxRequest from "../CardknoxRequest";

export default class CCVoidRefundRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:voidrefund";
    xRefNum: string | undefined;
}