import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';

export function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasDigit = /[0-9]/.test(value);
  const hasSpecialChar = /[\W_]/.test(value);
  const isValid = hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
  return isValid ? null : { passwordError: true };
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, strongPasswordValidator]],
    });
  }

  userLogin() {
    if (this.loginForm.valid) {
      console.warn(this.loginForm.value);
    }
    else {
      console.warn('Invalid form');
    }
  }

}
