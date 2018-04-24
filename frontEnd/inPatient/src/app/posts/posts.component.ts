import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { InPatientServiceService } from '../service/in-patient-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
patientDetails;
  constructor(private service: InPatientServiceService) {

   }
  registrationPost(input: HTMLInputElement){

    this.service.getDetails(input.firstName, input.lastName,input.phoneNumber,
                                                  input.email,input.address,input.address2,
                                                  input.state,input.city);
  }
}