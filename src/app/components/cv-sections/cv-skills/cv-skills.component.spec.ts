import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSkillsComponent } from './cv-skills.component';

describe('CvSkillsComponent', () => {
  let component: CvSkillsComponent;
  let fixture: ComponentFixture<CvSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvSkillsComponent]
    });
    fixture = TestBed.createComponent(CvSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
