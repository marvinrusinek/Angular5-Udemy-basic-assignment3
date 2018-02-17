import { Component, OnInit } from '@angular/core';

const STYLE_INDEX = 4;

@Component({
  selector: 'app-toggle-display',
  templateUrl: './toggle-display.component.html',
  styleUrls: ['./toggle-display.component.css']
})

export class ToggleDisplayComponent implements OnInit {
  displayPassword = true;
  timestamps = [];

  constructor() { }
  ngOnInit() {}

  onDisplayDetailsClick(): void {
    this.displayPassword = !this.displayPassword;
    this.timestamps.push(new Date());
  }

  getBackgroundColor(index: number) {
    return index > STYLE_INDEX ? 'blue' : 'white';
  }

  assignWhiteColor(index: number) {
    return index > STYLE_INDEX;
  }
}
