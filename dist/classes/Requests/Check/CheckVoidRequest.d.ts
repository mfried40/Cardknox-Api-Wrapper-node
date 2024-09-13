import CardknoxRequest from "../CardknoxRequest";
export default class CheckVoidRequest extends CardknoxRequest {
    readonly xCommand: string;
    xCustom01: string | undefined;
    xRefNum: string | undefined;
    xIP: string | undefined;
}
