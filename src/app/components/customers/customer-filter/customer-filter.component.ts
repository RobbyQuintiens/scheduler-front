import {Component, EventEmitter, Output} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrl: './customer-filter.component.css'
})
export class CustomerFilterComponent {

  @Output() isCompanyOutputEvent = new EventEmitter<any>();
  value = '';

  constructor() {
  }

  getIsCompany(event: MatCheckboxChange) {
    this.isCompanyOutputEvent.emit(event.checked);
    console.log(event.checked);
  }

}
