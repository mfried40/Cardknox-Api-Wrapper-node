# Cardknox API Wrapper for Node.js

A comprehensive Node.js wrapper for the [Cardknox Payment Gateway](https://www.cardknox.com/), allowing you to securely process credit card and ACH transactions.

[![Socket Badge](https://socket.dev/api/badge/npm/package/cardknox-api-wrapper?style=flat-square)](https://socket.dev/npm/package/cardknox-api-wrapper)
[![npm](https://img.shields.io/npm/v/cardknox-api-wrapper?style=flat-square&logo=npm)](https://www.npmjs.com/package/cardknox-api-wrapper)
[![GitHub issues](https://img.shields.io/github/issues/mfried40/cardknox-api-wrapper-node?style=flat-square&logo=github)](https://github.com/mfried40/json-mapify/issues)
![NPM](https://img.shields.io/npm/l/cardknox-api-wrapper?style=flat-square&logo=opensourceinitiative)
![npm bundle size](https://img.shields.io/bundlephobia/min/cardknox-api-wrapper?style=flat-square&logo=npm)

## Features


- **Fast and easy integration**: Get started quickly with a simple API.
- **Pre-built request classes**: Simplified request classes for various transactions.

## Installation

Install via npm:

```bash
npm install cardknox-api-wrapper
```

## Quick Start

### Setting Up

To get started, you'll need your Cardknox API key. This key will be added to all your requests.

Here’s how to generate an API key:
1. Sign in to the [Cardknox Merchant Portal](https://portal.cardknox.com/).
2. Go to **Account Settings**.
3. Select **Keys**, and then click **Create a Key**.
4. Choose **API** or **iFields**, set the necessary permissions, and save the key securely.

Now, initialize `CardknoxService`:

```js
const { CardknoxService } = require('cardknox-api-wrapper');

const cardknox = new CardknoxService('your-api-key', 'your-software-name', 'your-software-version');
```

### Example: Processing a Credit Card Sale

```js
const { CCSaleRequest } = require('cardknox-api-wrapper');

const saleRequest = new CCSaleRequest();
saleRequest.xCardNum = '4111111111111111';  // Card number
saleRequest.xExp = '1225';  // Expiration date (MMYY)
saleRequest.xAmount = '50.00';  // Transaction amount

cardknox.Process(saleRequest)
  .then(response => {
    if (response.xResult === 'A') {
      console.log('Payment Approved:', response.xAuthCode);
    } else {
      console.log('Payment Failed:', response.xError || response.xErrorCode);
    }
  })
  .catch(error => console.error('Transaction Error:', error));
```

### Example: Processing an ACH Payment

For ACH payments, make sure to include the `xName` field along with routing and account numbers.

```js
const { CheckSaleRequest } = require('cardknox-api-wrapper');

const achRequest = new CheckSaleRequest();
achRequest.xRouting = '123456789';  // Routing number
achRequest.xAccount = '987654321';  // Account number
achRequest.xAmount = '100.00';  // Amount in USD
achRequest.xName = 'John Doe';  // Name of the account holder

cardknox.Process(achRequest)
  .then(response => {
    if (response.xResult === 'A') {
      console.log('ACH Payment Approved:', response.xAuthCode);
    } else {
      console.log('Payment Failed:', response.xError);
    }
  })
  .catch(error => console.error('Transaction Error:', error));
```

## Available Requests

The wrapper provides multiple request classes to cover various types of transactions. Below are the key requests available:

### Credit Card Requests
- **CCSaleRequest**: Process a credit card sale.
- **CCRefundRequest**: Issue a refund for a credit card transaction.
- **CCVoidRequest**: Void a previously processed credit card transaction.
- **CCCaptureRequest**: Capture a pre-authorized credit card payment.
- **CCAuthRequest**: Authorize a credit card without immediate capture.
- **CCAdjustRequest**: Adjust a previously processed transaction.
- **CCAvsOnlyRequest**: Perform an AVS (Address Verification System) check only.
- **CCSaveRequest**: Save credit card details for future use.
- **CCVoidRefundRequest**: If a credit card transaction has not yet settled, it will void the transaction. If it has settled, it will issue a full refund.
- **CCVoidReleaseRequest**: Release a pending authorization amount back to the cardholder’s credit limit without waiting for the standard authorization time frame to expire.

### ACH Requests
- **CheckSaleRequest**: Process an ACH (check) payment.
- **CheckRefundRequest**: Refund an ACH transaction.
- **CheckVoidRequest**: Void a pending ACH transaction before submission to the bank.
- **CheckSaveRequest**: Save ACH details for future use.
- **CheckVoidRefundRequest**: Void an ACH transaction that is pending bank submission, typically at the end of the day, and issue a refund. Partial refunds are also supported.

Each request class corresponds to a specific transaction type, ensuring that the right fields are included based on the transaction requirements.

## Handling Responses

The Cardknox API returns a `CardknoxResponse` object that includes important fields like `xResult` to indicate the status of the transaction:
- **A**: Approved
- **D**: Declined
- **E**: Error

Here's how to handle the transaction response:

```js
if (response.xResult === 'A') {
  console.log('Transaction Approved');
} else {
  console.log('Transaction Failed:', response.xError);
}
```

## Official Documentation

For full details on the fields, commands, and additional transaction types, check out the official Cardknox documentation:

- [Credit Card API Documentation](https://docs.cardknox.com/api/transaction/credit-card)
- [ACH API Documentation](https://docs.cardknox.com/api/transaction/check-ach)

## License

This project is licensed under the MIT License.
