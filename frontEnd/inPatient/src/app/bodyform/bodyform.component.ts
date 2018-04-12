import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bodyform',
  templateUrl: './bodyform.component.html',
  styleUrls: ['./bodyform.component.css']
})
export class BodyformComponent implements OnInit {
  genderIsDisables = false;
  location = true;
  gender = "M or F";

  constructor() { }


  ngOnInit() {
  }
  public ageValFunc(){
    return "age";
  }
}
