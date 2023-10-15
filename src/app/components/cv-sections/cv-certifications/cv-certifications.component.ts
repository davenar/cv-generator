import { Component, Input } from '@angular/core';
import { Certification } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-certifications',
  templateUrl: './cv-certifications.component.html',
  styleUrls: ['./cv-certifications.component.css']
})
export class CvCertificationsComponent {
  @Input() certifications: Certification[] = [];
  certification: Certification = {};

  addItem() {
    this.certifications.push(this.certification);
    this.certification = {};
  }

  clearItem() {
    this.certification = {};
  }

  removeItem(skill: Certification) {
    const idxToRemove = this.certifications.indexOf(skill);
    this.certifications.splice(idxToRemove, 1);
  }
}
