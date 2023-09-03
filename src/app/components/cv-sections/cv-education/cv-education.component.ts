import { Component, Input } from '@angular/core';
import { Education } from 'src/app/contracts/cv-model';
import * as lodash from 'lodash';

@Component({
  selector: 'cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.css']
})
export class CvEducationComponent {
  @Input() educationList: Education[] = [];
  education: Education = {};

  addItem() {
    this.educationList.push(this.education);
    //this.educationList = lodash.orderBy(this.educationList, ['startYear'], ['desc']);
    this.education = {};
  }

  clearItem() {
    this.education = {};
  }

  removeItem(item: Education) {
    const idxToRemove = this.educationList.indexOf(item);
    this.educationList.splice(idxToRemove, 1);
  }
}
