import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './components/courses';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angular';
}
