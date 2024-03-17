import {Component, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../../models/customer";
import {CustomerService} from "../../../services/customer.service";
import { EventEmitter } from '@angular/core';

;

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css'
})
export class CustomerCardComponent implements OnInit {

  @Input() customer: Customer;

  @Output() deleteCustomerEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private customerService: CustomerService) {
  }

  deleteCustomer(id?: number) {
    this.deleteCustomerEvent.emit(id);
  }

  ngOnInit(): void {
  }
}
