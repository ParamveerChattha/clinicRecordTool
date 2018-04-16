import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bodyform',
  templateUrl: './bodyform.component.html',
  styleUrls: ['./bodyform.component.css']
})
export class BodyformComponent implements OnInit {
  genderIsDisabled = false;

   name : String;
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
  public onSubmit(){

    console.log(this.name + "  " + this.age);
  }
}
