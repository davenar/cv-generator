import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CVModel } from 'src/app/contracts/cv-model';

@Component({
  selector: 'app-cv-layout',
  templateUrl: './cv-layout.component.html',
  styleUrls: ['./cv-layout.component.css']
})
export class CvLayoutComponent implements OnInit, OnDestroy {
  @Input() datasource!: CVModel;

  constructor() {

  }

  ngOnInit(): void {
  }



  printJSON(data: any): string {
    const prettyJson = JSON.stringify(data, null, 2);
    return prettyJson;
  }



  ngOnDestroy() {
    if (this.datasource.photo) {
      URL.revokeObjectURL(this.datasource.photo);
    }
  }
}
