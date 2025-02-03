import CardknoxRequest from "../CardknoxRequest";

export default class CCVoidReleaseRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:voidrelease";
    xRefNum: string | undefined;
}