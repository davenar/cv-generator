import { Component, Input } from '@angular/core';
import { Language, europeanLanguageLevels } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-languages',
  templateUrl: './cv-languages.component.html',
  styleUrls: ['./cv-languages.component.css']
})
export class CvLanguagesComponent {
  @Input() languages: Language[] = [];
  language: Language = {};
  languageLevels: string[] = europeanLanguageLevels;

  isCustomLevel: boolean = false;


  addItem() {
    this.languages.push(this.language);
    this.language = {};
    this.isCustomLevel = false;
  }

  clearItem() {
    this.language = {};
    this.isCustomLevel = false;

  }

  removeItem(language: Language) {
    const idxToRemove = this.languages.indexOf(language);
    this.languages.splice(idxToRemove, 1);
  }
}
