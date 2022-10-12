import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-courses',
  templateUrl: './viewall-courses.component.html',
  styleUrls: ['./viewall-courses.component.css']
})
export class ViewallCoursesComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewCourses().subscribe(
      (data)=>{
        this.courseData=data
      }
    )
   }

  courseData:any= []

  ngOnInit(): void {
  }

}
