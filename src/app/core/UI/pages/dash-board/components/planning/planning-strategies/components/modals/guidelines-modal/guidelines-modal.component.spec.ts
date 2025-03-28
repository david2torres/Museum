import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesModalComponent } from './guidelines-modal.component';

describe('GuidelinesModalComponent', () => {
  let component: GuidelinesModalComponent;
  let fixture: ComponentFixture<GuidelinesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelinesModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuidelinesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
