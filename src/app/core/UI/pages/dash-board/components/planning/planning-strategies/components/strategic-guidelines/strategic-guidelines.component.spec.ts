import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicGuidelinesComponent } from './strategic-guidelines.component';

describe('StrategicGuidelinesComponent', () => {
  let component: StrategicGuidelinesComponent;
  let fixture: ComponentFixture<StrategicGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicGuidelinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrategicGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
