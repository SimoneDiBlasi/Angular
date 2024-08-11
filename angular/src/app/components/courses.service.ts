import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    courses = ["author1", "author2"]
    getCourses() {
        return this.courses;
    }
    getCoursesLength() {
        return this.courses.length;
    }
}