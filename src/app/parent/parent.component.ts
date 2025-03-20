import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage = "Hi from Parent";
  receivedMessage = 'msg';
  receiveMessage($event: any) {
    this.receivedMessage = $event;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
