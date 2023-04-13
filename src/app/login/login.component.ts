import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public lgForm: FormGroup = new FormGroup({
    
  });
  password = ''
  showPassword =""

  constructor(private lg: FormBuilder) {
    this.lgForm = this.lg.group({
      email: [''],
      password: [''],
      checkbox: ['false']
    });
  }

  error = false
  
  
  onSubmit() {
   if (this.lgForm.get('email')?.value == '' || this.lgForm.get('password')?.value == '' || this.lgForm.get('email')?.value.indexOf('@') == -1  ) {
    this.error = true
   }
   else {
    console.log(this.lgForm.value);
    this.error = false
   }
    
  }
}
