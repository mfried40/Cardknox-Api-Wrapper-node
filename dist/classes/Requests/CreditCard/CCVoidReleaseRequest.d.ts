import CardknoxRequest from "../CardknoxRequest";
export default class CCVoidReleaseRequest extends CardknoxRequest {
    readonly xCommand: string;
    xCustom01: string | undefined;
    xRefNum: string | undefined;
}
