import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listEtudiants;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        console.log(response);
        this.listEtudiants = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Au revoir !');
      },
    });
  }

  goToServers() {
    this.router.navigateByUrl('/servers');
  }

  goToCv() {
    this.router.navigate(['cv']);
  }
}
