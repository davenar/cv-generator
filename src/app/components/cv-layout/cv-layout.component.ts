import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CVModel, SocialAccounts } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-layout',
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

  isSocialAccountsEmpty(accounts: SocialAccounts): boolean {
    return Object.keys(accounts).length === 0;
  }

  ngOnDestroy() {
    if (this.datasource.photo) {
      URL.revokeObjectURL(this.datasource.photo);
    }
  }
}
