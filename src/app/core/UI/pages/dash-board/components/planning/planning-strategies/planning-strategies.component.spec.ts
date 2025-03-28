import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningStrategiesComponent } from './planning-strategies.component';

describe('PlanningStrategiesComponent', () => {
  let component: PlanningStrategiesComponent;
  let fixture: ComponentFixture<PlanningStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningStrategiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanningStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
