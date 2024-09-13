import CardknoxRequest from "../CardknoxRequest";

export default class CheckSaveRequest extends CardknoxRequest {
    readonly xCommand: string = "check:save";
    xName: string | undefined;
    xRouting: string | undefined;
    xAccount: string | undefined;
    xCustom01: string | undefined;
    xIP: string | undefined;
    xMICR: string | undefined;
    xAllowDuplicate: string | undefined;
}