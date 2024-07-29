import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSpotflowCheckoutComponent } from '../../projects/ng-spotflow-checkout/src/lib/components/ng-spotflow-checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgSpotflowCheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-spotflow-checkout';
}
