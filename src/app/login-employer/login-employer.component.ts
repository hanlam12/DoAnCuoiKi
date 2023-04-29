import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
import { Company } from 'workzone';

@Component({
  selector: 'app-login-employer',
  templateUrl: './login-employer.component.html',
  styleUrls: ['./login-employer.component.css']
})
export class LoginEmployerComponent {
  company = new Company();

  errMessage :string='';

  password: string = '';
  passwordType: string = 'password';
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  constructor(private _service:WorkZoneService,private router:Router){}


  existingUserErrors:string[] = [];

  signUp(){
    this.router.navigate(['sign-up-employer'])

  }

  errorOccurred:boolean=false;
  login() {
    if(this.company.email!=''&&this.company.password!=''){
      this._service.loginEmployer(this.company.email, this.company.password).subscribe(
        data => {
          if (data.message === 'not exist') {
            this.errMessage = "Email không tồn tại";
          } else if (data.message === 'wrong password') {
            this.errMessage = "Mật khẩu không đúng";
          } else {
            alert("Đăng nhập thành công");
            console.log(data);

          }
        },
        error => {
          alert("đăng nhập lỗi")
        }
      );
    }
    else{
      alert("Vui lòng nhập đầy đủ các trường")
    }

  }
}
