import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent {
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      // username: new FormControl('nidhal'),
      username: new FormControl('nidhal', Validators.required),
      addMail: new FormControl(null, [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }

  // getFormsSkills() {
  //   return <FormArray>this.signUpForm.get('skills');
  // }
  get formsSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addSkill() {
    let newCtrl = new FormControl(null, Validators.required);
    this.formsSkills.push(newCtrl);
  }

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
