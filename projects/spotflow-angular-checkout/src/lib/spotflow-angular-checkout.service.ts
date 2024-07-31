import { Injectable } from '@angular/core';
import { InlinePaymentOptions } from './interfaces/checkout-model';
import { CheckoutForm } from '@spot-flow/checkout-inline-js';

@Injectable({
  providedIn: 'root',
})
export class SpotflowAngularCheckoutService {
  constructor() {}

  setup(paymentData: InlinePaymentOptions) {
    const checkout = new CheckoutForm(
      paymentData.merchantKey,
      paymentData.email,
      paymentData.amount || 0
    );
    checkout.setup();
  }
}
