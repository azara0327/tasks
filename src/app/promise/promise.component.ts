import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  countdown: number | string = '';
  isRunning = false;

  constructor() { }

  startTimer(seconds: number) {
    if (this.isRunning) return;
    this.isRunning = true;
    this.countdown = seconds;

    const promise = new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (this.countdown) {
          this.countdown = (this.countdown as number) - 1;
        }
        else {
          clearInterval(interval);
          this.isRunning = false;
          this.countdown = 'Time\'s Up';
          resolve();
        }
      }, 1000);
    });

    promise.then(() => {
      console.log('Timer finished');
    });
  }

  ngOnInit(): void {
  }

}
