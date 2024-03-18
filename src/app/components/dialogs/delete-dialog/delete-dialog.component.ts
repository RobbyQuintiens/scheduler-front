import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {CustomerCardComponent, DialogData} from "../../customers/customer-card/customer-card.component";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent]
})
export class DeleteDialogComponent implements OnInit{

  action: string;
  localData: any;
  type: string;

  constructor(public dialogRef: MatDialogRef<CustomerCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
    this.localData = {...data};
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.localData.localData.id});
  }

  ngOnInit(): void {
    this.action = this.data.action;
    this.type = this.data.type;
  }
}
