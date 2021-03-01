import { Component, DoCheck, OnChanges, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { NotificationService } from "./../../_services/notification.service";
import { LocationService } from "../../_services/master-location.service";
import { Location } from "../../_models/master-location";
import { AddLocationComponent } from "./Add-Location/Add-Location.component";
import { UpdateLocationComponent } from "./Update-Location/Update-Location.component";
import { DeleteLocationComponent } from "./Delete-Location/Delete-Location.component";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"],
})
export class LocationComponent implements OnInit {
  Locations: Location[];
  Location: Partial<Location>;
  countryData: Location[];
  stateData: Location[];
  cityData: Location[];
  stateId: number = 0;
  countryId: number = 0;
  parentName = [];

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
    private dailog: MatDialog,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.Locations = data["location"];
    });
    this.getLocations();
  }

  getLocations() {
    this.locationService.getMasterLocation().subscribe(
      (res) => this.Locations,
      (err) =>
        this.notification.showNotification(
          "Problem in Retriving Data!",
          "danger"
        ),
      () => {
        this.countryData = this.Locations.filter(
          (v, i) => v.mLocationType.toLocaleLowerCase() === "country"
        );
        this.stateData = this.Locations.filter(
          (v, i) => v.mLocationType.toLocaleLowerCase() === "state"
        );
        this.cityData = this.Locations.filter(
          (v, i) => v.mLocationType.toLocaleLowerCase() === "city"
        );
      }
    );
  }

  getLocation(id: number) {
    this.locationService.getMasterLocationById(id).subscribe(
      (res: Location) => {
        this.Location = res;
      },
      (error) => {
        this.notification.showNotification(
          "Problem On Retriving Data !",
          "danger"
        );
      },
      () => {
        this.getParent(this.Location.mLocationParentId);
      }
    );
  }

  addLocation(type: string) {
    let dialog = this.dailog.open(AddLocationComponent, {
      width: "600px",
      height: "auto",
      data: {
        type: type,
        countrydata: this.countryData,
      },
    });
    dialog.afterClosed().subscribe(() => {
      this.getLocations();
      console.log("Added!");
    });
  }

  updateLocation(id: number, data: any) {
    let dialog = this.dailog.open(UpdateLocationComponent, {
      width: "600px",
      data: {
        id: id,
        data: data,
        countries: this.countryData,
        countryId: this.countryId,
        stateId: this.stateId,
      },
    });
    dialog.afterClosed().subscribe(() => {
      this.getLocations();
      console.log("Updated!");
    });
  }

  getParent(id: number) {
    this.stateId = 0;
    this.countryId = 0;
    if (this.Location.mLocationType.toLowerCase() == "country") {
      this.updateLocation(this.Location.mLocationId, this.Location);
    }
    if (this.Location.mLocationType.toLowerCase() == "state") {
      this.locationService.getMasterLocationById(id).subscribe(
        (res: Location) => {
          this.countryId = res.mLocationId;
        },
        (error) => {
          this.notification.showNotification(
            "Problem On Retriving Data !",
            "danger"
          );
        },
        () => {
          this.updateLocation(this.Location.mLocationId, this.Location);
        }
      );
    }

    if (this.Location.mLocationType.toLowerCase() == "city") {
      this.locationService.getMasterLocationById(id).subscribe(
        (res: Location) => {
          this.stateId = res.mLocationId;
          this.locationService
            .getMasterLocationById(res.mLocationParentId)
            .subscribe(
              (res: Location) => {
                this.countryId = res.mLocationId;
              },
              (error) => {
                this.notification.showNotification(
                  "Problem On Retriving Data !",
                  "danger"
                );
              },
              () => {
                this.updateLocation(this.Location.mLocationId, this.Location);
              }
            );
        },
        (error) => {
          this.notification.showNotification(
            "Problem On Retriving Data !",
            "danger"
          );
        }
      );
    }
  }

  deleteLocation(id: number) {
    let dialog = this.dailog.open(DeleteLocationComponent, {
      width: "600px",
      data: {
        id: id,
      },
    });
    dialog.afterClosed().subscribe(() => {
      this.getLocations();
      console.log("Deleted!");
    });
  }
}
