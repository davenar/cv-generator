import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CVModel, SocialAccounts } from 'src/app/contracts/cv-model';
import { privacyInformative } from 'src/app/contracts/privacy-helper';

@Component({
  selector: 'cv-layout',
  templateUrl: './cv-layout.component.html',
  styleUrls: ['./cv-layout.component.css']
})
export class CvLayoutComponent implements OnInit, OnDestroy {
  @Input() datasource!: CVModel;
  privacy: string = "";

  constructor() {

  }

  ngOnInit(): void {
    this.privacy = privacyInformative;
  }



  printJSON(data: any): string {
    const prettyJson = JSON.stringify(data, null, 2);
    return prettyJson;
  }

  isSocialAccountsEmpty(accounts: SocialAccounts): boolean {
    const allAccounts = Object.entries(accounts);
    const filteredAccounts = allAccounts.filter(([key, value]) => key !== 'github' && value !== null && value.trim() !== '');
    return filteredAccounts.length === 0;
  }

  ngOnDestroy() {
    if (this.datasource.photo) {
      URL.revokeObjectURL(this.datasource.photo);
    }
  }
}
