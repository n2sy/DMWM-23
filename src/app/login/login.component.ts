import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultSection = 'dsen';
  myComment = 'Rien à signaler...';
  showSignUp = false;
  errorLogin = false;

  constructor(private authSer: AuthService, private router: Router) {}

  onSubmit(f) {
    console.log(f);
    if (this.showSignUp) {
      // Register
      this.authSer.signUp(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          this.showSignUp = !this.showSignUp;
          f.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.authSer.signIn(f.value).subscribe({
        next: (response) => {
          console.log(response);
          alert(response['message']);
          localStorage.setItem('myToken', response['token']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
          this.errorLogin = true;
          //f.reset();
        },
      });
    }
  }

  switch() {
    this.showSignUp = !this.showSignUp;
  }
  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: 'dmwm2023',
      filiere: '',
      infos: {
        commentaire: '',
        exemple: '',
      },
    });
  }
  generatePwdII(f: NgForm) {
    f.form.patchValue({
      password: 'dmwm2023',
    });
  }

  resetForm(f: NgForm) {
    f.reset();
  }
}
