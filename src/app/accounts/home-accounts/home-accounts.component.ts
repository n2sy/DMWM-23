import { Component } from '@angular/core';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css'],
})
export class HomeAccountsComponent {
  tabAccounts = [
    {
      name: 'Nidhal Acccount',
      type: 'active',
    },
  ];

  onAddAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
