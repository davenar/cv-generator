import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAddressComponent } from './cv-address.component';

describe('CvAddressComponent', () => {
  let component: CvAddressComponent;
  let fixture: ComponentFixture<CvAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvAddressComponent]
    });
    fixture = TestBed.createComponent(CvAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
