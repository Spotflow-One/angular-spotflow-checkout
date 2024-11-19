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
5. [License](#license)
6. [Contribution Guidelines](#contribution-guidelines)
7. [Contributors](#contributors)

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

[As a component](#using-spotflow-as-components)

**app.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpotflowAngularCheckoutModule } from '@spot-flow/ng-spotflow-checkout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpotflowAngularCheckoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```


**app.component.ts**
```typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'spotflow-ng-demo';
  currency = 'NGN' // This is not required for subscription payments.
  amount = 400; // This is not required for subscription payments.
  email = 'temi@mailinator.com';
  merchantKey = "sk_test_fXXXXedhXXXXXXXXXXXXXXXX";
  planId = '9e0808304-344d-XXXXXXXXX-XXXXX834034'; // This is not required for one time payments
  encryptionKey = 'SKKXXXXXXXXXXXXXXXXX';
}
```


**app.component.html**

```html
  <spotflow-make-payment
    text="Pay"
    [secret_key]="merchantKey"
    [plan_id]="planId"
    [email]="email"
    [amount]="amount"
    [currency]="currency"
    [encryption_key]="encryptionKey"
    [style]="{ 'background-color': 'black', color: 'white' }"
  >
  </spotflow-make-payment>
```

### Parameters

Read more about our parameters and how they can be used [here](https://docs.spotflow.one/Developer%20Tools/inline-js).

| Parameter           | Required |Description     |
| ------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| merchantKey         | True              | Your API secret |
| reference           | False             | Your transaction reference. This MUST be unique for every transaction  |
| amount              | False              | Amount to charge the customer. This is not required when making a subscription payment    |
| currency            | False             | Currency to charge in. This is not required when a making subscription payment                |
| encryptionKey       | True               | This is the encryption key for the merchant |
| planId   | True | This is the plan id being paid for. This is not required when making one time payments |
| firstname | False | This is the Customer First Name |
| lastname | False | This is the Customer Last Name |
| regionId (optional) | False | This is the merchant's region where the customer is subscribed to |
| phone (optional) | False | This is the phone number of the customer |



## Contribution Guidelines

We welcome contributions from the community. Read more about our community contribution guidelines [here](/CONTRIBUTION.md).

## License

By contributing to this library, you agree that your contributions will be licensed under its [MIT license](/LICENSE).

Copyright (c) Spotflow Inc.

## Contributors

- [Olukayode Ogunnowo](http://github.com/dansagam)
- [Oluwatomisin Jimoh](https://github.com/ekiira)
