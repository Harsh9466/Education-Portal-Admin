import { NotificationService } from "./../_services/notification.service";
import { MasterProfileService } from "./../_services/master-profile.service";
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { MasterProfile } from "../_models/master-profile";
@Component({
  selector: "app-College-Registration",
  templateUrl: "./College-Registration.component.html",
  styleUrls: ["./College-Registration.component.css"],
})
export class CollegeRegistrationComponent implements OnInit {
  profiles: MasterProfile[];
  profile: MasterProfile = {
    mpId: null,
    mpCodeId: null,
    mpFirstName: null,
    mpLastName: null,
    mpMobileNo: null,
    mpAlternateMobileNo: null,
    mpEmailId: null,
    mpAddress1: null,
    mpAddress2: null,
    mpPinCode: null,
    mpImage: null,
    mpIsActive: false,
  };

  constructor(
    private profileService: MasterProfileService,
    private notification: NotificationService
  ) {}

  ngOnInit() {}

  insertProfile(data: any) {
    this.profileService.insertProfile(data).subscribe(
      (res) =>
        this.notification.showNotification("Profile Created!", "success"),
      (error) =>
        this.notification.showNotification(
          "Problem in Retriving Data",
          "danger"
        )
    );
  }
}
