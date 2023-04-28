import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultSection = 'dsen';
  myComment = 'Rien à signaler...';
  onSubmit(f) {
    console.log(f);
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
