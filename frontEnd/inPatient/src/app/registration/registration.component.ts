import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  inpatient: any;
  @ViewChild('f')
    inPatientDetails : any;

  save(inPatientdata){
    console.log(inPatientdata);
 
  }

  clearForm(myForm){
 
    myForm.reset();
  }
  ngOnInit() {
  }

}
