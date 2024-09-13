import CardknoxRequest from "../CardknoxRequest";

export default class CheckVoidRefundRequest extends CardknoxRequest {
    readonly xCommand: string = "check:VoidRefund";
    xRouting: string | undefined;
    xName: string | undefined;
    xAccount: string | undefined;
    xCustom01: string | undefined;
    xIP: string | undefined;
    xMICR: string | undefined;
    xAllowDuplicate: string | undefined;
    xBillState: string | undefined;
    xBillCity: string | undefined;
    xBillStreet: string | undefined;
    xBillCompany: string | undefined;
    xBillZip: string | undefined;
    xBillPhone: string | undefined;
    xEmail: string | undefined;
    xCheckType: string | undefined;
    xRefNum: string | undefined;
}