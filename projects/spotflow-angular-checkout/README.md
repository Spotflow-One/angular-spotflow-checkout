# Spotflow Angular Library

The SDK help you create a sealess payment in you angular app. Our Spotflow slider helps you to collect payment in no time

Available features includes:

- Collections: Card, Bank Transfer, USSD
- Tokenisation and Subscriptions

## Requirements

1. Spotflow API Merchant Keys
2. Node version >=16..0 and npm > = 7.xx

## Installation

```bash
$ npm install @spot-flow/ng-spotflow-checkout
# or 
$ yarn add @spot-flow/ng-spotflow-checkout
```

## Initialization

For older version of Angular, you can use the module but for recent, standalone angular version

1 for standard Angular version

```typescript
import { CommonModule } from '@angular/common';
import { SpotflowAngularCheckoutModule } from '@spot-flow/ng-spotflow-checkout';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, SpotflowAngularCheckoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
```

2 for standalone angular version

```typescript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MakePaymentComponent, SpotflowAngularCheckoutModule],
  templateUrl: './app.component.html',
  template: `
  <spotflow-make-payment text="Pay NGN 10" [secret_key]="merchantKey" [plan_id]="planId" [amount]="amount"
    [email]="email" className="btn-primary">
  </spotflow-make-payment>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'spotflow-ng-demo';
  // use your Secre API keys <sk_test_f998479c0e******************8dab2>
  merchantKey = 'sk_test_f9984*****************';
  planId = 'a9d53c4c-4452-4d00-953e-bb0f************';
  email = 'oajhdjkna@gamil.com';
  amount = 9;
  currency = 'NGN';
}

```

## Usage

Two ways of using the package

1. [As a commponent](#using-spotflow-as-components)
2. [As a Direct Serive](#using-directly-as-a-service)

### Using Spotflow as components

```typescript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MakePaymentComponent, SpotflowAngularCheckoutModule],
  templateUrl: './app.component.html',
  template: `
  <spotflow-make-payment text="Pay NGN 10" [secret_key]="merchantKey" [plan_id]="planId" [amount]="amount"
    [email]="email" className="btn-primary">
  </spotflow-make-payment>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'spotflow-ng-demo';
  // use your Secre API keys <sk_test_f998479c0e******************8dab2>
  merchantKey = 'sk_test_f9984*****************';
  planId = 'a9d53c4c-4452-4d00-953e-bb0f************';
  email = 'oajhdjkna@gamil.com';
  amount = 9;
  currency = 'NGN';
}

```

### Using directly as a service

```typescript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpotflowAngularCheckoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SpotflowAngularCheckoutService],
})
export class AppComponent {
  title = 'spotflow-ng-demo';
  merchantKey = 'sk_test_f998479c0******************8dab27';
  planId = 'a9d53c4c-4452-4d00-953e-************';
  email = 'olu************owo@yupmail.com';
  amount = 9;
  currency = 'NGN';

  constructor(
    private spotflowAngularCheckoutService: SpotflowAngularCheckoutService
  ) {}

  makePayment() {
    const paymentData = {
      amount: this.amount,
      currency: this.currency,
      email: this.email,
      merchantKey: this.merchantKey,
      reference: '',
      plan: this.planId,
    };

    this.spotflowAngularCheckoutService.setup(paymentData);
  }
}

```
