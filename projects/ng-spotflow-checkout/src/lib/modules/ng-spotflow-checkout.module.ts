import { NgModule } from '@angular/core';
import { NgSpotflowCheckoutComponent } from '../components/ng-spotflow-checkout.component';
import { NgSpotflowCheckoutService } from '../services/ng-spotflow-checkout.service';

@NgModule({
  declarations: [],
  imports: [NgSpotflowCheckoutComponent],
  providers: [NgSpotflowCheckoutService],
  exports: [NgSpotflowCheckoutComponent],
})
export class NgSpotflowCheckoutModule {}
