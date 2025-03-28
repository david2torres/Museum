import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMenuComponent } from './management-menu.component';

describe('ManagementMenuComponent', () => {
  let component: ManagementMenuComponent;
  let fixture: ComponentFixture<ManagementMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
