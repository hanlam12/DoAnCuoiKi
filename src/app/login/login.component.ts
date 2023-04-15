import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

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

  constructor(private lg: FormBuilder, private _loginService: WorkZoneService, private router: Router) {
    this.lgForm = this.lg.group({
      email: [''],
      password: [''],
      checkbox: ['false']
    });
  }
  error = false
  login(): void{
    this._loginService.login(this.lgForm.get('email')?.value, this.lgForm.get('password')?.value).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.error = true;
        this._loginService.navigateAfterLogin();
      }
    });
  }
}
