import { Injectable } from '@angular/core';
import { InPatientPostServiceService } from './in-patient-post-service.service';

@Injectable()
export class InPatientServiceService {

  constructor(private postservice: InPatientPostServiceService) { 
 }

 getData(inPatientDetails)
 {
  // console.log("this is service");
 //  console.log(inPatientDetails);
   this.postservice.createPost(inPatientDetails);
 }
}