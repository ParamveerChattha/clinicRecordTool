import { Component, OnInit, ViewChild } from '@angular/core';
import { InPatientServiceService } from '../service/in-patient-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private myService: InPatientServiceService) {
  }
  inpatient: any;
// used it to clear the data of the form, but did it without using it.  
/*  @ViewChild('f')
    inPatientDetails : any;
*/
  save(inPatientdata){
  //  console.log(inPatientdata);
    this.myService.getData(inPatientdata);
 
  }

  clearForm(myForm){
 
    myForm.reset();
  }
  ngOnInit() {
  }

}
