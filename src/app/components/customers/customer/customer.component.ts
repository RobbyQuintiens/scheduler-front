import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  @Input() isCompany!: boolean;

  addIsCompanyFilter(isCompany: boolean) {
    this.isCompany = isCompany;
  }

}
