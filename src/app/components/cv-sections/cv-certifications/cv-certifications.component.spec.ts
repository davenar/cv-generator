import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCertificationsComponent } from './cv-certifications.component';

describe('CvCertificationsComponent', () => {
  let component: CvCertificationsComponent;
  let fixture: ComponentFixture<CvCertificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvCertificationsComponent]
    });
    fixture = TestBed.createComponent(CvCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
