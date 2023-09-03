import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEducationComponent } from './cv-education.component';

describe('CvEducationComponent', () => {
  let component: CvEducationComponent;
  let fixture: ComponentFixture<CvEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvEducationComponent]
    });
    fixture = TestBed.createComponent(CvEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
