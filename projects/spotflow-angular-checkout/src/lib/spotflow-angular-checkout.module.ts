import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpotflowAngularCheckoutService } from './spotflow-angular-checkout.service';
import { MakePaymentComponent } from './make-payment/make-payment.component';


@NgModule({
  declarations: [MakePaymentComponent],
  imports: [CommonModule],
  exports: [MakePaymentComponent],
  providers: [SpotflowAngularCheckoutService],
})
export class SpotflowAngularCheckoutModule {
  constructor() {
    const script = document.createElement('script');
    const inlineSdk =
      'https://dr4h9151gox1m.cloudfront.net/dist/checkout-inline.js';
    script.src = inlineSdk;
    if (!document.querySelector(`[src="${inlineSdk}"]`)) {
      document.body.appendChild(script);
    }
  }
}
