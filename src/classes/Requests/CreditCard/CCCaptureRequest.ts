import CardknoxRequest from "../CardknoxRequest";

export default class CCCaptureRequest extends CardknoxRequest {
    readonly xCommand: string = "cc:capture";
    xAmount: string | undefined;
    xCustom01: string | undefined;
    xCVV: string | undefined;
    xStreet: string | undefined;
    xZip: string | undefined;
    xRefNum: string | undefined;
    xName: string | undefined;
    xTax: string | undefined;
    xTip: string | undefined;
    xInvoice: string | undefined;
    xPONum: string | undefined;
    xComments: string | undefined;
    xDescription: string | undefined;
    xIP: string | undefined;
    xEmail: string | undefined;
    xFax: string | undefined;
    xBillFirstName: string | undefined;
    xBillMiddleName: string | undefined;
    xBillLastName: string | undefined;
    xBillCompany: string | undefined;
    xBillStreet: string | undefined;
    xBillStreet2: string | undefined;
    xBillCity: string | undefined;
    xBillState: string | undefined;
    xBillZip: string | undefined;
    xBillCountry: string | undefined;
    xBillPhone: string | undefined;
    xBillMobile: string | undefined;
    xShipFirstName: string | undefined;
    xShipMiddleName: string | undefined;
    xShipLastName: string | undefined;
    xShipCompany: string | undefined;
    xShipStreet: string | undefined;
    xShipStreet2: string | undefined;
    xShipCity: string | undefined;
    xShipState: string | undefined;
    xShipZip: string | undefined;
    xShipCountry: string | undefined;
    xShipPhone: string | undefined;
    xShipMobile: string | undefined;
    xAllowDuplicate: string | undefined;
    xCustReceipt: string | undefined;
}