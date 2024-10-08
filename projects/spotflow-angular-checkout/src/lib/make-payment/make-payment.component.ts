import { Component, Input } from '@angular/core';
import {
  InlinePaymentOptions,
  SpotflowCheckoutProps,
} from '../interfaces/checkout-model';
import { SpotflowAngularCheckoutService } from '../spotflow-angular-checkout.service';

@Component({
  selector: 'spotflow-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrl: './make-payment.component.css',
  providers: [],
})
export class MakePaymentComponent {
  @Input() secret_key!: string;
  @Input() plan_id!: string;
  @Input() email!: string;
  @Input() encryption_key!: string;
  @Input() amount?: number;
  @Input() tx_ref?: string;
  @Input() regionId?: string;
  @Input() firstname?: string;
  @Input() lastname?: string;
  @Input() currency?: string;
  @Input() style: { [key: string]: string } = {};
  @Input() data?: InlinePaymentOptions;
  @Input() ngClass: string | string[] | { [key: string]: boolean } = {};
  @Input() text?: string;

  constructor(  private spotflowAngularCheckoutService: SpotflowAngularCheckoutService) {

  }
  private inlinePaymentOptions!: InlinePaymentOptions;

  makePayment() {
    this.preparePayment();
      if (
        this.inlinePaymentOptions.merchantKey &&
        this.inlinePaymentOptions.email &&
        this.inlinePaymentOptions.encryptionKey
      ) {
        const paymentInitData: SpotflowCheckoutProps = {
          merchantKey: this.inlinePaymentOptions.merchantKey,
          encryptionKey: this.inlinePaymentOptions.encryptionKey,
          planId: this.inlinePaymentOptions.planId,
          email: this.inlinePaymentOptions.email,
          amount: this.inlinePaymentOptions.amount || 0,
          currency: this.inlinePaymentOptions.currency || 'NGN',
          ...(this.inlinePaymentOptions.firstname && {
            firstname: this.inlinePaymentOptions.firstname,
          }),
          ...(this.inlinePaymentOptions.lastname && {
            lastname: this.inlinePaymentOptions.lastname,
          }),
          ...(this.inlinePaymentOptions.regionId && {
            regionId: this.inlinePaymentOptions.regionId,
          }),
        };
        this.spotflowAngularCheckoutService.setup(paymentInitData)
      } else {
        console.error(
          'Invalid payment data, kindly check the amount, email and secret key provided'
        );
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
      encryptionKey: this.encryption_key,
      currency: this.currency,
      regionId: this.regionId,
      firstname: this.firstname,
      lastname: this.lastname,
    };
  }
}
