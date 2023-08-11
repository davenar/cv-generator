import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLanguagesComponent } from './cv-languages.component';

describe('CvLanguagesComponent', () => {
  let component: CvLanguagesComponent;
  let fixture: ComponentFixture<CvLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvLanguagesComponent]
    });
    fixture = TestBed.createComponent(CvLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
