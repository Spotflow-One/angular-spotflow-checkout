import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotflowCheckComponent } from './spotflow-check.component';

describe('SpotflowCheckComponent', () => {
  let component: SpotflowCheckComponent;
  let fixture: ComponentFixture<SpotflowCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotflowCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotflowCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
