import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    standalone: true,
    templateUrl: './courses.html',
    imports: [CommonModule],
    providers: [CoursesService]
})
export class CoursesComponent {
    courses: string[] = [];
    coursesLength: number | null = null;
    title: string = "List of courses";

    constructor(private service: CoursesService) {
        this.courses = this.service.getCourses();
        this.coursesLength = this.service.getCoursesLength()
    }

}