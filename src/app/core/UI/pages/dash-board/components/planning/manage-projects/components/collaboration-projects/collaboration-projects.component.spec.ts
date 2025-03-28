import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationProjectsComponent } from './collaboration-projects.component';

describe('CollaborationProjectsComponent', () => {
  let component: CollaborationProjectsComponent;
  let fixture: ComponentFixture<CollaborationProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
