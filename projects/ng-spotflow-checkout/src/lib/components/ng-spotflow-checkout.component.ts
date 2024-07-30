import { Component, Input } from '@angular/core';
import { CheckoutForm } from '@spot-flow/checkout-inline-js';
import { InlinePaymentOptions } from '../interfaces/checkout-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ng-spotflow-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-spotflow-checkout.html',
  // styleUrl: './ng-spotflow-checkout.scss',
})
export class NgSpotflowCheckoutComponent {
  @Input() secret_key!: string;
  @Input() plan_id?: string;
  @Input() email!: string;
  @Input() amount!: number;
  @Input() tx_ref?: string;
  @Input() style: any;
  @Input() data?: InlinePaymentOptions;
  @Input() className?: string;
  @Input() text?: string;

  private inlinePaymentOptions!: InlinePaymentOptions;

  makePayment() {
    this.preparePayment();
    if (this.inlinePaymentOptions) {
      const checkout = new CheckoutForm(
        this.inlinePaymentOptions.merchantKey,
        this.inlinePaymentOptions.email,
        this.inlinePaymentOptions.amount || 0
      );
      checkout.setup();
    }
  }

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
