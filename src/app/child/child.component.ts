import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() txtColor = 'blue';
  @Input() section = 'GL';

  @Output() eventToParent = new EventEmitter();

  onSend() {
    this.eventToParent.emit('Message de la part du Child');
  }
}
