import CardknoxRequest from "../CardknoxRequest";
export default class CheckSaleRequest extends CardknoxRequest {
    readonly xCommand: string;
    xAmount: string | undefined;
    xToken: string | undefined;
    xCustom01: string | undefined;
    xRouting: string | undefined;
    xAccount: string | undefined;
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
    xMICR: string | undefined;
    xCheckNum: string | undefined;
    xCheckImageFront: string | undefined;
    xCheckImageRear: string | undefined;
    xOrderID: string | undefined;
    xExistingCustomer: string | undefined;
    xAllowDuplicate: string | undefined;
    xCustReceipt: string | undefined;
    xCurrency: string | undefined;
    xBillMobile: string | undefined;
    xAccountType: string | undefined;
    xTimeoutSeconds: string | undefined;
}
