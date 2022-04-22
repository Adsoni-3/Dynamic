import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productDetailsComponent } from './product-details.component';

describe('TutorialDetailsComponent', () => {
  let component: productDetailsComponent;
  let fixture: ComponentFixture<productDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ productDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(productDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
