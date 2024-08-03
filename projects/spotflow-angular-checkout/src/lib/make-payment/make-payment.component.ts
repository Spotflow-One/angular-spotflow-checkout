import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlinePaymentOptions } from '../interfaces/checkout-model';

@Component({
  selector: 'spotflow-make-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './make-payment.component.html',
  styleUrl: './make-payment.component.css',
  providers: [],
})
export class MakePaymentComponent {
  @Input() secret_key!: string;
  @Input() plan_id?: string;
  @Input() email!: string;
  @Input() amount!: number;
  @Input() tx_ref?: string;
  @Input() style: any;
  @Input() data?: InlinePaymentOptions;
  @Input() className?: string;
  @Input() text?: string;

  constructor() {
    const script = document.createElement('script');
    const inlineSdk =
      'https://dr4h9151gox1m.cloudfront.net/dist/checkout-inline.js';
    script.src = inlineSdk;
    if (!document.querySelector(`[src="${inlineSdk}"]`)) {
      document.body.appendChild(script);
    }
  }
  private inlinePaymentOptions!: InlinePaymentOptions;

  makePayment() {
    this.preparePayment();
    // if (this.inlinePaymentOptions) {
    //   this.spotflowService.setup(this.inlinePaymentOptions);
    // }
    if (window.SpotflowCheckout) {
      const checkout = window.SpotflowCheckout;
      if (
        this.inlinePaymentOptions.amount &&
        this.inlinePaymentOptions.email &&
        this.inlinePaymentOptions.email
      ) {
        const payment = new checkout.CheckoutForm(
          this.inlinePaymentOptions?.merchantKey,
          this.inlinePaymentOptions?.email,
          this.inlinePaymentOptions?.amount || 0
        );
        payment.setup();
      } else {
        console.error(
          'Invalid payment data, kindly check the amount, email and secret key provided'
        );
      }
    } else {
      console.error('SpotflowCheckout is not defined');
    }
  }

  ngOnInit(): void {}

  preparePayment() {
    this.inlinePaymentOptions = {
      email: this.email,
      merchantKey: this.secret_key,
      planId: this.plan_id,
      amount: this.amount,
      tx_ref: this.tx_ref,
    };
  }
}
