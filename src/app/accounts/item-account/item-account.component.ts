import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  templateUrl: './item-account.component.html',
  styleUrls: ['./item-account.component.css'],
})
export class ItemAccountComponent {
  @Input() oneAccount;

  changeType(newType) {
    this.oneAccount.type = newType;
  }
}
