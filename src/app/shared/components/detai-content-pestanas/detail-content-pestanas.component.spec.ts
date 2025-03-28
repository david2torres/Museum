import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContentPestanasComponent } from './detail-content-pestanas.component';

describe('DetailContentPestanasComponent', () => {
  let component: DetailContentPestanasComponent;
  let fixture: ComponentFixture<DetailContentPestanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailContentPestanasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailContentPestanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
