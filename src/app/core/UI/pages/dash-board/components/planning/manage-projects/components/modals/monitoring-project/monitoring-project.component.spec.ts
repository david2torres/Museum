import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringProjectComponent } from './monitoring-project.component';

describe('MonitoringProjectComponent', () => {
  let component: MonitoringProjectComponent;
  let fixture: ComponentFixture<MonitoringProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
