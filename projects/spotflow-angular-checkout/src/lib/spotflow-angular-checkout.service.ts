import { Injectable } from '@angular/core';
import {
  InlinePaymentOptions,
  SpotflowCheckoutProps,
} from './interfaces/checkout-model';

@Injectable({
  providedIn: 'root',
})
export class SpotflowAngularCheckoutService {
  constructor() {
    const script = document.createElement('script');
    const inlineSdk =
      'https://dr4h9151gox1m.cloudfront.net/dist/checkout-inline.js';
    script.src = inlineSdk;
    if (!document.querySelector(`[src="${inlineSdk}"]`)) {
      document.body.appendChild(script);
    }
  }

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
        metadata: paymentData.metadata,
        localCurrency: paymentData.localCurrency,
        callbackUrl: paymentData.callbackUrl
      };
      payment.setup(paymentInitData);
    } else {
      console.error('SpotflowCheckout is not defined');
    }
  }
}
