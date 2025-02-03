import CardknoxRequest from "../CardknoxRequest";

export default class CCVoidRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:void";
    xRefNum: string | undefined;
}