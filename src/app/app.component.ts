import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}
  title = 'Dashboard';
  name: string;
  age: string;
  rollno: number;
  sec: string;
  // {this.name: 'junaid', this.age: 27, this.rollno:78, sec: 'B'}
  students: Object[] = []

  addStudent(){
    
    let std = {
        name: this.name,
        age: this.age,
        rollno: this.rollno,
        sec: this.sec
    }
    this.students.push(std)

    console.log(this.students)
  }
}
