import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CoursesService } from "./courses.service";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'courses',
    standalone: true,
    templateUrl: './courses.html',
    imports: [CommonModule, FormsModule],
    providers: [CoursesService],
    inputs: ['isFavorite']
})
export class CoursesComponent {
    @Input()
    isFavorite: boolean = false;

    @Output()
    change = new EventEmitter()
    courses: string[] = [];
    coursesLength: number | null = null;
    title: string = "List of courses";
    isActive: boolean = true;
    email: string = '';
    titleInput: string = '';

    course: any = {
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(private service: CoursesService) {
        this.courses = this.service.getCourses();
        this.coursesLength = this.service.getCoursesLength()
    }

    onSave(event: MouseEvent) {
        event.stopPropagation();
        console.log("Button was clicked", event);
    }
    onKeyUp() {
        console.log(this.email);
    }

    onActive() {
        this.isActive = !this.isActive;
        this.change.emit();
    }

}