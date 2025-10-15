import { Component, Input } from '@angular/core';
import { SpotflowCheckoutProps } from '../interfaces/checkout-model';
import { SpotflowAngularCheckoutService } from '../spotflow-angular-checkout.service';

@Component({
  selector: 'spotflow-make-payment',
  templateUrl: './make-payment.component.html',
  providers: [],
})
export class MakePaymentComponent {
  @Input() style: { [key: string]: string } = {};
  @Input() options!: SpotflowCheckoutProps;
  @Input() ngClass: string | string[] | { [key: string]: boolean } = {};
  @Input() text?: string;

  constructor(
    private spotflowAngularCheckoutService: SpotflowAngularCheckoutService
  ) {}

  makePayment() {
    if (this.options.merchantKey && this.options.email) {
      const paymentInitData: SpotflowCheckoutProps = {
        merchantKey: this.options.merchantKey,
        encryptionKey: this.options.encryptionKey,
        planId: this.options.planId,
        email: this.options.email,
        amount: this.options.amount,
        currency: this.options.currency,
        ...(this.options.localCurrency && {
          localCurrency: this.options.localCurrency,
        }),
        ...(this.options.metadata && {
          metadata: this.options.metadata,
        }),
        ...(this.options.callBackUrl && {
          callBackUrl: this.options.callBackUrl,
        }),
        ...(this.options.name && { name: this.options.name }),
        ...(this.options.rdtCode && { rdtCode: this.options.rdtCode }),
        ...(this.options.phoneNumber && {
          phoneNumber: this.options.phoneNumber,
        }),
        ...(this.options.countryCode && {
          countryCode: this.options.countryCode,
        }),
        ...(this.options.reference && { reference: this.options.reference }),
        ...(this.options.url && { url: this.options.url }),
      };
      this.spotflowAngularCheckoutService.setup(paymentInitData);
    } else {
      console.error(
        'Invalid payment data, kindly check the email or merchant key provided'
      );
    }
  }

  ngOnInit(): void {}
}
