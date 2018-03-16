import { Component, OnInit, Inject, Input, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
  @Input() data
  editComp :  true;
  myref: MatDialogRef<DialogBoxComponent>;
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    console.log('data from edit', this.data)
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '450px',
      height: '400px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}

@Component({
  selector: 'dialog-box',
  template: `<h1>Edit Student</h1>
  <mat-card>
    <mat-form-field>
      <input matInput placeholder="Name" dividerColor="accent" [(ngModel)]="data.name">
    </mat-form-field>

    <mat-form-field class="pd-left">
        <input matInput placeholder="Age" dividerColor="accent" [(ngModel)]="data.age">
      </mat-form-field>

      <mat-form-field class="pd-left">
        <input matInput placeholder="RollNo" dividerColor="accent" [(ngModel)]="data.rollno">
      </mat-form-field>

      <mat-form-field class="pd-left">
        <input matInput placeholder="Section" dividerColor="accent" [(ngModel)]="data.sec">
      </mat-form-field>

      <button mat-raised-button color="primary" class="pd-left" (click)="saveStudent()">Save Student</button>
  </mat-card>


  
  `
})

export class DialogBoxComponent{
  dialog: true;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { console.log('dataaaaa in dialog', this.data)}

  onNoClick(): void {
    this.dialogRef.close();
  }
}