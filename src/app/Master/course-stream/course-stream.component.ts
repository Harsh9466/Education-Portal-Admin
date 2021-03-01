import { ActivatedRoute } from "@angular/router";
import { TypeDetailsService } from "./../../_services/master-type-details.service";
import { NotificationService } from "./../../_services/notification.service";
import { TypeDetails } from "./../../_models/master-type-details";
import { MasterCourseStreamService } from "./../../_services/master-course-stream.service";
import { MasterCourseStream } from "./../../_models/master-course-stream";
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-course-stream",
  templateUrl: "./course-stream.component.html",
  styleUrls: ["./course-stream.component.css"],
})
export class CourseStreamComponent implements OnInit {
  constructor(
    private courseStreamService: MasterCourseStreamService,
    private typeDetailService: TypeDetailsService,
    private notification: NotificationService,
    private route: ActivatedRoute
  ) {}

  TypeDetails: TypeDetails[];
  streamData: TypeDetails[];
  courseData: TypeDetails[];
  selectedStream = null;
  selectedCourses = [];

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.TypeDetails = data["CourseStream"];
      this.streamData = this.TypeDetails.filter((v, i) => {
        return v.mtdTypeName.toLowerCase() === "stream";
      });
      this.courseData = this.TypeDetails.filter((v, i) => {
        return v.mtdTypeName.toLowerCase() === "course";
      });
    });
  }

  CourseStreams: Partial<MasterCourseStream> = {
    mcsCourseId: null,
    mcsStreamId: null,
  };

  getTypeDetails() {
    return this.typeDetailService.getMasterTypeDetails().subscribe(
      (res) => {},
      (error) => {
        this.notification.showNotification(
          "Problem On Retriving Data!",
          "danger"
        );
      }
    );
  }

  onChangeStream(stream: any) {
    $(".streams")
      .children()
      .find("input:checkbox")
      .click(function () {
        $("input:checkbox").not(this).prop("checked", false).val();
      });
    this.selectedStream = stream;
  }

  onChangeCourses() {
    var array = [];
    $(".courses")
      .children()
      .find("input:checked")
      .each(function () {
        array.push($(this).val());
      });
    this.selectedCourses = array;
  }

  // filter(data:any){
  //   if(data===''){
  //     this.getTypeDetails();
  //   }
  //   else{
  //     this.courseData=this.courseData.filter((v,i) =>v.mtdName.toLowerCase().includes(data.toLowerCase())
  //   )}
  // }

  OnSubmit() {
    for (let i = 0; i < this.selectedCourses.length; i++) {
      this.CourseStreams = {
        mcsCourseId: +this.selectedCourses[i],
        mcsStreamId: +this.selectedStream,
      };
      // console.log(this.CourseStreams);
      this.courseStreamService.insertCourseStream(this.CourseStreams).subscribe(
        (res) => {
          this.notification.showNotification(res, "success");
          $("input:checkbox").prop("checked", false);
        },
        (err) => {
          this.notification.showNotification("Some Error Occured!", "danger");
        }
      );
    }
  }
}
