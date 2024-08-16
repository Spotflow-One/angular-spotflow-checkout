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
        paymentData.encryptionKey,
        paymentData.email,
        paymentData.amount || 0,
        paymentData.planId
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

/**
 *
 *
      const { CheckoutForm } = SpotflowCheckout
      const checkout = new CheckoutForm(
        merchantKey = "sk_test_d96889a82e9743bfb274c5f684ad5b69", ///  sk_test_0848910aeac14ca2bd3ffde9ee6c4389  /// sk_test_f998479c0ee241a795270a55aa8dab27
        encryption = "g4ryTjP3VAGwl8Bk9r0foFtgoY64Ba4gZQ701OAAbB4=",
        email = "olukayodeogunnowo@gmail.com",
        amount = 10,
        plandId = "3c902af2-6bec-4cc1-a2a3-f74fc35e88d4"

      );
 */
