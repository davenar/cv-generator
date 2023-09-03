import { Component, Input } from '@angular/core';
import { SocialAccounts } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-social-accounts',
  templateUrl: './cv-social-accounts.component.html',
  styleUrls: ['./cv-social-accounts.component.css']
})
export class CvSocialAccountsComponent {
  @Input() socialAccounts: SocialAccounts = {};

}
