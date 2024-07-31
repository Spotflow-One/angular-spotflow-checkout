import { NgModule } from '@angular/core';
import { NgSpotflowCheckoutComponent } from '../components/ng-spotflow-checkout.component';
import { NgSpotflowCheckoutService } from '../services/ng-spotflow-checkout.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [NgSpotflowCheckoutComponent, CommonModule],
  providers: [NgSpotflowCheckoutService],
  exports: [NgSpotflowCheckoutComponent],
})
export class NgSpotflowCheckoutModule {}
