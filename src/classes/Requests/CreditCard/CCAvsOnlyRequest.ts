import CardknoxRequest from "../CardknoxRequest";

export default class CCAvsOnlyRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:AvsOnly";
    xCardNum: string | undefined;
    xExp: string | undefined;
    xCVV: string | undefined;
    xName: string | undefined;
    xStreet: string | undefined;
    xZip: string | undefined;
    xCustom01: string | undefined;
    xMagstripe: string | undefined;
    xIP: string | undefined;
}