import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../services/customer.service";
import {Router} from "@angular/router";
import {Address} from "../../../models/address";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit{

  isLinear = true;
  basicCustomerGroup: FormGroup;
  basicAddressGroup: FormGroup;
  customerFormData: any;
  addressFormData: any;
  address: Address;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  createCustomer(): void {
    this.customerFormData = {
      username: 'TEST',
      firstName: this.basicCustomerGroup.value.firstName,
      lastName: this.basicCustomerGroup.value.lastName,
      email: this.basicCustomerGroup.value.email,
      company: this.basicCustomerGroup.value.company,
      addressResource: this.createAddressResource()
    };
  }

  createAddressResource(): Address {
    this.address = new Address();
    this.address.street = this.basicAddressGroup.value.street;
    this.address.number = this.basicAddressGroup.value.number;
    this.address.city = this.basicAddressGroup.value.city;
    this.address.zipcode = this.basicAddressGroup.value.zipCode;
    this.address.country = this.basicAddressGroup.value.country;
    return this.address;
  }

  submit(): void {
    this.createCustomer();
    console.log(this.customerFormData);
    this.customerService.createCustomer(this.customerFormData);
   // this.submitted = true;
    this.router.navigate(['/customers']);
  }

  ngOnInit(): void {
    this.basicCustomerGroup = this.formBuilder.group({
      username: [null],
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      email: [null],
      company: [null],
      address: [null]
    });

    this.basicAddressGroup = this.formBuilder.group({
      street: [null],
      number: [null],
      city: [null],
      zipCode: [null],
      country: [null],
    });
  }

  get firstName() {
    return this.basicCustomerGroup.get('firstName');
  }

  get lastName() {
    return this.basicCustomerGroup.get('lastName');
  }
}
