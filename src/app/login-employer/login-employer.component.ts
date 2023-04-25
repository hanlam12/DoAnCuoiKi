import { Component } from '@angular/core';
import { Contact } from 'src/assets/contact';

@Component({
  selector: 'app-login-employer',
  templateUrl: './login-employer.component.html',
  styleUrls: ['./login-employer.component.css']
})
export class LoginEmployerComponent {
  model = new Contact();
}
