import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.css']
})
export class CvSkillsComponent {
  @Input() skills: Skill[] = [];
  skill: Skill = {};
  isAdding: boolean = false;

  addItem() {
    this.skills.push(this.skill);
    this.skill = {};
  }

  clearItem() {
    this.skill = {};
  }

  removeItem(skill: Skill) {
    const idxToRemove = this.skills.indexOf(skill);
    this.skills.splice(idxToRemove, 1);
  }
}
