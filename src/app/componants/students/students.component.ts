import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
students:{name:string,age:number,email:string}[]=[{name:"sara",age:23,email:"sara@gmail.com"},
{name:"Amira",age:23,email:"Amira@gmail.com"},
{name:"Bassant",age:23,email:"Bassant@gmail.com"}];
constructor(){
  // this.students.push()
  console.log(this.students)
}
}
