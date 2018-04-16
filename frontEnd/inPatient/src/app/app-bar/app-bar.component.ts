import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {
  public textFail = "text-fail";
  public hasError = true;
  public classesimpl = {
    "text-success": this.hasError,
    "text-fail": !this.hasError,
    "text-special": this.hasError,
  }
  constructor() { }

  ngOnInit() {
  }

}
