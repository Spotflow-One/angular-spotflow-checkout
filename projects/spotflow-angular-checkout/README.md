# Spotflow Angular Library

The **Spotflow Angular SDK** enables users to make payments seamlessly. It integrates smoothly into your **Angular** application, providing a streamlined checkout experience.

Available Features:

- Collections: Card, Bank Transfers.
- Recurring Payments: Tokenization and Subscriptions.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Parameters](#parameters)

## Requirements

1. Spoflow Encryption keys
2. Spotflow API keys
3. Node versions >= 16.x.x npm >=7.x.x

## Demo

![Alt text](./demo-image.png "a title")

## Installation

```bash

  $ npm install @spot-flow/ng-spotflow-checkout
# or
  $ yarn add @spot-flow/ng-spotflow-checkout
# or
  pnpm add @spot-flow/ng-spotflow-checkout

```

## Usage

[As a component](#using-spotflow-payment-as-components)

**app.component.ts**

```typescript

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotflowAngularCheckoutModule } from '@spot-flow/ng-spotflow-checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpotflowAngularCheckoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '';
  options = {
 amount: 4000, // Not required for subscription payment
 currency: "NGN",
 email: "temi@mailinator.com", // Email of customer
 name: "John", // Name of customer: Not required
 phoneNumber: "09090909090", // Phone number of customer: Not required
 reference: "MC-123456", // Not required, a unique payment reference will be generated if not provided
 merchantKey: "sk_test_fXXXXedhXXXXXXXXXXXXXXXX",
 planId: "9e0808304-344d-XXXXXXXXX-XXXXX834034", // Not required for a one time payment
 encryptionKey:"SKKXXXXXXXXXXXXXXXXX"
  };
}
```

**app.component.html**

```html
<spotflow-make-payment 
  text="Pay" 
  [options]="options" 
  [style]="{ 'background-color': 'black', color: 'white' }"> Make Payment 
  </spotflow-make-payment>
<router-outlet />
```

### Parameters

Read more about our parameters and how they can be used [here](https://docs.spotflow.one/Developer%20Tools/inline-js).

| Parameter     | Required | Description                                                                                                                                                             |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| merchantKey   | True     | Your API Secret                                                                                                                                                         |
| reference     | False    | Your transaction reference. This MUST be unique for every transaction                                                                                                   |
| amount        | False    | Amount to charge the customer. NB: For subscription payments, amount comes from the plan details. This is not required for subscription payments.                       |
| currency      | True     | Currency to charge in.                                                                                                                                                  |
| localCurrency | False    | This is only required when a payment is being made in USD                                                                                                               |
| encryptionKey | True     | This is the encryption key for the merchant. This is required for card payments.                                                                                        |
| planId        | False    | This is the plan ID being paid for however, this is not required for one time payments.                                                                                 |
| name          | False    | This is the Customer's Name                                                                                                                                             |
| phoneNumber   | False    | This is the Customer's Phone Number                                                                                                                                     |
| email         | True     | This is the Customer's Email Address                                                                                                                                    |
| metadata      | True     | This contains other information about the product such as the product name and other additional properties. Product Name should not be passed if planId is being passed |
| callBackUrl   | False    | This is the URL the browser redirects to on success of a payment                                                                                                        |

## License

Copyright (c) Spotflow Inc.
