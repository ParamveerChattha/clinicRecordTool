import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class InPatientPostServiceService {
  private url = "localhost://9450/inPatient";
  constructor(private http: Http) { }

  createPost(data: HTMLInputElement){
  //  let inPatientDetail = {firstName: data}

    this.http.post(this.url, JSON.stringify(data))
    .subscribe(response=>{
      console.log(response.json());

    })
  }
}
