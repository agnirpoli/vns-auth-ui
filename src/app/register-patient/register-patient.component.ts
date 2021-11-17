import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  user:any = {};
  
  constructor() { }

   

  ngOnInit(): void {
  }


  validate(){
    return !!this.user.password && 
           !!this.user.confirmPassword &&
           this.user.password === this.user.confirmPassword &&
           !!this.user.firstName &&
           !!this.user.lastName &&
           !!this.user.username &&
           !!this.user.zip;
  }

  doRegister(){
    
  }
}
