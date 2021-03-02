import { Component, OnInit } from "@angular/core";
import * as anime from "animejs";

@Component({
  selector: "app-College-Registration",
  templateUrl: "./College-Registration.component.html",
  styleUrls: ["./College-Registration.component.css"],
})
export class CollegeRegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    anime({
      targets: "#cssSelector",
      translateY: 250,
      loop: true,
      easing: "easeInOutSine",
    });
  }
}
