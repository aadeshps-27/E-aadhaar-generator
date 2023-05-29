import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAadhaarComponent } from './create-aadhaar.component';

describe('CreateAadhaarComponent', () => {
  let component: CreateAadhaarComponent;
  let fixture: ComponentFixture<CreateAadhaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAadhaarComponent]
    });
    fixture = TestBed.createComponent(CreateAadhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
