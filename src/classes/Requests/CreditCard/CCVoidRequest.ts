import CardknoxRequest from "../CardknoxRequest";

export default class CCVoidRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:void";
    xCustom01: string | undefined;
    xRefNum: string | undefined;
}