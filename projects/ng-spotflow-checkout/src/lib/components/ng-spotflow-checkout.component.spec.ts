import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSpotflowCheckoutComponent } from './ng-spotflow-checkout.component';

describe('NgSpotflowCheckoutComponent', () => {
  let component: NgSpotflowCheckoutComponent;
  let fixture: ComponentFixture<NgSpotflowCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSpotflowCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSpotflowCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
