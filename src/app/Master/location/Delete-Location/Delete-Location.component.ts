import { NotificationService } from "./../../../_services/notification.service";
import { LocationService } from "./../../../_services/master-location.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-Delete-Location",
  templateUrl: "./Delete-Location.component.html",
  styleUrls: ["./Delete-Location.component.css"],
})
export class DeleteLocationComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private locationService: LocationService,
    private notification: NotificationService
  ) {}

  ngOnInit() {}

  delete() {
    this.locationService.deleteMasterLocation(this.data.id).subscribe(
      (res) => {
        this.notification.showNotification(
          "Data deleted successfully!",
          "success"
        );
      },
      (error) => {
        this.notification.showNotification("Some error occured ! ", "danger");
      }
    );
  }
}
