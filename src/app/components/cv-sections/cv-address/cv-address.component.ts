import { Component, Input } from '@angular/core';
import { Address } from 'src/app/contracts/cv-model';

@Component({
  selector: 'cv-address',
  templateUrl: './cv-address.component.html',
  styleUrls: ['./cv-address.component.css']
})
export class CvAddressComponent {
  @Input() address: Address = {};

}
