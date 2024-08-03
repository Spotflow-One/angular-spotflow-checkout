import { Injectable } from '@angular/core';
import { InlinePaymentOptions } from './interfaces/checkout-model';
// import { CheckoutForm } from '@spot-flow/checkout-inline-js';

@Injectable({
  providedIn: 'root',
})
export class SpotflowAngularCheckoutService {
  constructor() {}

  setup(paymentData: InlinePaymentOptions) {
    if (window.SpotflowCheckout) {
      const checkout = window.SpotflowCheckout;
      const payment = new checkout.CheckoutForm(
        paymentData.merchantKey,
        paymentData.email,
        paymentData.amount || 0
      );
      payment.setup();
    }

    // const checkout = new CheckoutForm(
    //   paymentData.merchantKey,
    //   paymentData.email,
    //   paymentData.amount || 0
    // );
    // checkout.setup();
  }
}
