import { Injectable } from '@angular/core';

@Injectable()
export class InPatientServiceService {

  constructor() { 
 }
 private http: Http;
 url: string = "localhost:0945";
 getDetails(fname,lname,phone,email, address1,address2,state,city){

    let rPost = {fName: input}
    this.http.post(this.url, JSON.stringify(rPost))
      .subscribe(response =>{
        console.log(response.json());
        })
}

}
