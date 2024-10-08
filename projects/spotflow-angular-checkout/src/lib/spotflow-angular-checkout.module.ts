import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MakePaymentComponent } from './make-payment/make-payment.component';


@NgModule({
  declarations: [MakePaymentComponent],
  imports: [CommonModule],
  exports: [MakePaymentComponent],
  providers: [],
})
export class SpotflowAngularCheckoutModule {
  constructor() {}
}
