import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatTable } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @Input() dialog;
  public myDataSource: MatTableDataSource<any>;
  constructor() {
    this.myDataSource = new MatTableDataSource<any>([]);
  }
 
  title = 'Dashboard';
  name: string;
  age: string;
  rollno: number;
  sec: string;
  @ViewChild('myTable') myTable: MatTable<any>;
  students: Object[] = [

  ]
  displayedColumns = ['name', 'age', 'rollno', 'sec', 'actions'];
  
  addStudent(){
    let std = {
        name: this.name,
        age: this.age,
        rollno: this.rollno,
        sec: this.sec
    }
    this.addRow(std);
  }

  public addRow(row: any) {
    this.myDataSource.data.push(row);
    this.myTable && this.myTable.renderRows();
  }
  
}
