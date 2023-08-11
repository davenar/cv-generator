import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-experience',
  templateUrl: './cv-experience.component.html',
  styleUrls: ['./cv-experience.component.css']
})
export class CvExperienceComponent {
  @Input() experiences: Experience[] = [];
  experience: Experience = {};

  addItem() {
    this.experiences.push(this.experience);
    this.experience = {};
  }

  clearItem() {
    this.experience = {};
  }

  removeItem(skill: Experience) {
    const idxToRemove = this.experiences.indexOf(skill);
    this.experiences.splice(idxToRemove, 1);
  }
}
