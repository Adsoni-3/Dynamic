import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestModelComponent } from './add-test-model.component';

describe('AddTestModelComponent', () => {
  let component: AddTestModelComponent;
  let fixture: ComponentFixture<AddTestModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
