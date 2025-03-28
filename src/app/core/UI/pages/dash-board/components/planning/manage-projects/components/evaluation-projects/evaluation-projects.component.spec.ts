import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationProjectsComponent } from './evaluation-projects.component';

describe('EvaluationProjectsComponent', () => {
  let component: EvaluationProjectsComponent;
  let fixture: ComponentFixture<EvaluationProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
