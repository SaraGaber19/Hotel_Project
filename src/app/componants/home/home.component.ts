import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student ={};
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age:new FormControl("",[Validators.min(20), Validators.max(40),Validators.required]),
    Email:new FormControl("",[Validators.required,Validators.email]),
  })
  valid:boolean=false;

  get NameValid(){
    return this.formValidation.controls["name"].valid
  }


  get AgeValid(){
    return this.formValidation.controls["age"].valid
  }

  get EmailValid(){
    return this.formValidation.controls["Email"].valid
  }

  getValue(name:string,Age:string,email:string){
    if(this.NameValid&&this.AgeValid&&this.EmailValid){
      this.valid=true;
      this.student={name,Age,email}
      console.log(this.student);
    }
    
  }
}
