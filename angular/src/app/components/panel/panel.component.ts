import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.less'
})
export class PanelComponent {

  numberOfClick: number = 0;
  isClicked: boolean = false
  onClick() {
    this.isClicked = !this.isClicked
    this.isClicked ? this.numberOfClick++ : this.numberOfClick--;
  }
}
