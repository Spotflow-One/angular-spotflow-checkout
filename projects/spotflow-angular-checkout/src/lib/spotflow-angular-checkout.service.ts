import { Injectable } from '@angular/core';
import {
  InlinePaymentOptions,
  SpotflowCheckoutProps,
} from './interfaces/checkout-model';

@Injectable({
  providedIn: 'root',
})
export class SpotflowAngularCheckoutService {
  constructor() {}

  setup(paymentData: InlinePaymentOptions) {
    if (window.SpotflowCheckout) {
      const checkout = window.SpotflowCheckout;
      const payment = new checkout.CheckoutForm({
        onSuccess: paymentData.onSuccess,
        onClose: paymentData.onClose,
      });
      const paymentInitData: SpotflowCheckoutProps = {
        merchantKey: paymentData.merchantKey,
        encryptionKey: paymentData.encryptionKey,
        planId: paymentData.planId,
        email: paymentData.email,
        amount: paymentData.amount || 0,
      };
      payment.setup(paymentInitData);
    } else {
      console.error('SpotflowCheckout is not defined');
    }
  }
}
