import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPlaningComponent } from './reports-planing.component';

describe('ReportsPlaningComponent', () => {
  let component: ReportsPlaningComponent;
  let fixture: ComponentFixture<ReportsPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsPlaningComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
