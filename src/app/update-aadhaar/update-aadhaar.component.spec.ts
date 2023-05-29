import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAadhaarComponent } from './update-aadhaar.component';

describe('UpdateAadhaarComponent', () => {
  let component: UpdateAadhaarComponent;
  let fixture: ComponentFixture<UpdateAadhaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAadhaarComponent]
    });
    fixture = TestBed.createComponent(UpdateAadhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
