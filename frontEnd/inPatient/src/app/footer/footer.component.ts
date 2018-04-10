import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public highlightColor = "orange";
public inputText = "";
public flag = true;
public arr = ["ik", "do", "tin" , "chaar" ,"panj","panjaaab"];
public textStyles = {

  color: "powderBlue",
  fontStyle: "italic"
}
  constructor() { }

  ngOnInit() {
  }

}
