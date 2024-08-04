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
  merchantKey = 'sk_test_f998479c0ee241a795270a55aa8dab27';
  planId = 'a9d53c4c-4452-4d00-953e-bb0f2780702a';
  email = 'oajhdjkna@gamil.com';
  amount = 9;
  currency = 'NGN';
}

```

## Usage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
