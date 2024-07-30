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
  email = 'olukayodeogunnowo@hotmail.com';
  secret_key = 'sk_test_f998479c0ee241a795270a55aa8dab27';
  amount = 10;
}
