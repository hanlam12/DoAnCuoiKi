import { Component } from '@angular/core';
import { Contact } from 'src/assets/contact';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-employer',
  templateUrl: './login-employer.component.html',
  styleUrls: ['./login-employer.component.css']
})
export class LoginEmployerComponent {
  model = new Contact();


  constructor(private _service:WorkZoneService,private router:Router){}


  signUp(){
    this.router.navigate(['sign-up-employer'])

  }
}
