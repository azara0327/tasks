import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Output() passDataToParent = new EventEmitter<string>();

  sendMessageToParent() {
    this.passDataToParent.emit('Hello from Child');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
