import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSocialAccountsComponent } from './cv-social-accounts.component';

describe('CvSocialAccountsComponent', () => {
  let component: CvSocialAccountsComponent;
  let fixture: ComponentFixture<CvSocialAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvSocialAccountsComponent]
    });
    fixture = TestBed.createComponent(CvSocialAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
