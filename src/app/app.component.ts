import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counterProgress:number = 0;
  totalCountdown:number = 60;

  constructor() { }

  updateProgress($event){
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown *100;
  }

  countdownFinished(){

  }

}
