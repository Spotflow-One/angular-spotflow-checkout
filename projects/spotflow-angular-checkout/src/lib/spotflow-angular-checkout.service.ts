import { Injectable } from '@angular/core';
import {
  SpotflowCheckoutProps,
} from './interfaces/checkout-model';

@Injectable({
  providedIn: 'root',
})
export class SpotflowAngularCheckoutService {
  constructor() {
    const script = document.createElement('script');
    const inlineSdk =
      'https://v2.inline-checkout.spotflow.one/dist/checkout-inline.js';
    script.src = inlineSdk;
    if (!document.querySelector(`[src="${inlineSdk}"]`)) {
      document.body.appendChild(script);
    }
  }

  setup(paymentData: SpotflowCheckoutProps) {
    if (window.SpotflowCheckout) {
      const checkout = window.SpotflowCheckout;
      const payment = new checkout.CheckoutForm();
      const paymentInitData: SpotflowCheckoutProps = {
        merchantKey: paymentData.merchantKey,
        encryptionKey: paymentData.encryptionKey,
        planId: paymentData.planId,
        email: paymentData.email,
        amount: paymentData.amount,
        currency: paymentData.currency,
        metadata: paymentData.metadata,
        localCurrency: paymentData.localCurrency,
        callBackUrl: paymentData.callBackUrl,
        ...(paymentData.name && { name: paymentData.name }),
        ...(paymentData.rdtCode && { rdtCode: paymentData.rdtCode }),
        ...(paymentData.phoneNumber && { phoneNumber: paymentData.phoneNumber }),
        ...(paymentData.countryCode && { countryCode: paymentData.countryCode }),
        ...(paymentData.reference && { reference: paymentData.reference }),
        ...(paymentData.url && { url: paymentData.url })
      };
      payment.setup(paymentInitData);
    } else {
      console.error('SpotflowCheckout is not available yet.');
    }
  }
}
