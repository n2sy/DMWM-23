import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent {
  AccName;
  AccType;
  @Output() msgToHomeAccount = new EventEmitter();

  addHandler() {
    this.msgToHomeAccount.emit({
      name: this.AccName,
      type: this.AccType,
    });
  }
}
