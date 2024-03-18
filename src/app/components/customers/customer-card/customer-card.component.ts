import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../../models/customer";
import {DeleteDialogComponent} from "../../dialogs/delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Event} from "@angular/router";

export interface DialogData {
  type: string;
  action: string;
}

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css'
})
export class CustomerCardComponent implements OnInit {

  @Input() customer: Customer;

  @Output() deleteCustomerEvent: EventEmitter<number> = new EventEmitter<number>();

  idToDelete?: number;

  constructor(public dialog: MatDialog) {
  }

  deleteCustomer(event: any) {
    this.deleteCustomerEvent.emit(event);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        localData: obj,
        type: 'Customer',
        action: 'Delete'
      }
    });

    dialogRef.beforeClosed().subscribe(result => {
      this.deleteCustomer(result.data);
    });
  }

  ngOnInit(): void {
  }
}
