import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlinePaymentOptions } from '../interfaces/checkout-model';
import { SpotflowAngularCheckoutService } from '../spotflow-angular-checkout.service';

@Component({
  selector: 'spotflow-make-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './make-payment.component.html',
  styleUrl: './make-payment.component.css',
  providers: [SpotflowAngularCheckoutService],
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

  constructor(private spotflowService: SpotflowAngularCheckoutService) {}
  private inlinePaymentOptions!: InlinePaymentOptions;

  makePayment() {
    this.preparePayment();
    if (this.inlinePaymentOptions) {
      this.spotflowService.setup(this.inlinePaymentOptions);
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
