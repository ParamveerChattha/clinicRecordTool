import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bodyform',
  templateUrl: './bodyform.component.html',
  styleUrls: ['./bodyform.component.css']
})
export class BodyformComponent implements OnInit {
  genderIsDisabled = false;

  private name : String;
  private age : number;
  private gender : String;
  private location : String;
  private problem : String;
  constructor() { }


  ngOnInit() {
  }
  public ageValFunc(){
    return "age";
  }
  public onSubmit(inputName,inputAge,inputGender,inputLocation,inputProblem){
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.location = inputLocation;
    this.problem = inputProblem;
    console.log(this.name + "  " + this.age);
  }
}
