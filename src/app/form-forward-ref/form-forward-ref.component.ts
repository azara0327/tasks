import { Component} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-forward-ref',
  templateUrl: './form-forward-ref.component.html',
  styleUrls: ['./form-forward-ref.component.css']
})
export class FormForwardRefComponent {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      toggleSwitch: new FormControl(false, [Validators.requiredTrue])
    });
   }

  submitForm() {
    console.log(this.myForm.value);
  }

}
