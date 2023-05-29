import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweAadhaarComponent } from './viewe-aadhaar.component';

describe('VieweAadhaarComponent', () => {
  let component: VieweAadhaarComponent;
  let fixture: ComponentFixture<VieweAadhaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieweAadhaarComponent]
    });
    fixture = TestBed.createComponent(VieweAadhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
