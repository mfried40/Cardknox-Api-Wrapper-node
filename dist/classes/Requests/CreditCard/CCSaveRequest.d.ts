import CardknoxRequest from "../CardknoxRequest";
export default class CCSaveRequest extends CardknoxRequest {
    readonly xCommand: string;
    xCardNum: string | undefined;
    xExp: string | undefined;
    xName: string | undefined;
    xStreet: string | undefined;
    xZip: string | undefined;
    xMagstripe: string | undefined;
    xIP: string | undefined;
    xCVV: string | undefined;
    xCustom01: string | undefined;
}
