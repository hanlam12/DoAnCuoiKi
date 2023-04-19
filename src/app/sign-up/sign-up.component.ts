import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User, Users } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  password: string = '';
  passwordType: string = 'password';
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  newUser=new Users();
  errMessage:string=''
  existingUserErrors:string[] = [];
  constructor(private _service:WorkZoneService,private router:Router){}


  postUser(){
    if(
      this.newUser.name !='' &&
      this.newUser.phone!='' &&
      this.newUser.email!='' &&
      this.newUser.username!='' &&
      this.newUser.password!=''){
      this._service.postUser(this.newUser).subscribe(
        (data) => {
          this.newUser = data;
          alert('Đăng ký tài khoản thành công')
          console.log('Post user success:', data);
        },
        (err) => {

          console.error('Post user error:', err);
          if (err.status === 409 && err.error && err.error.error) {
            this.existingUserErrors = err.error.error;
            this.errMessage = "Có lỗi khi đăng ký tài khoản, vui lòng kiểm tra lại thông tin sau:"
          } else {
            this.errMessage = "Có lỗi khi đăng ký tài khoản, email, username hoặc số điện thoại của bạn đã được sử dụng"
          }
        }
      )

    }
    else {
      alert('Vui lòng nhập đầy đủ thông tin để đăng ký tài khoản')}
  }

  login(){
    this.router.navigate(['login'])
  }
}
