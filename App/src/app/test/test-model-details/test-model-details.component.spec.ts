import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModelDetailsComponent } from './test-model-details.component';

describe('TestModelDetailsComponent', () => {
  let component: TestModelDetailsComponent;
  let fixture: ComponentFixture<TestModelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestModelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
