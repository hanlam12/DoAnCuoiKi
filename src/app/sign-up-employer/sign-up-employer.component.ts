import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Contact } from 'src/assets/contact';
import { Password } from 'src/assets/thaymatkhau';
import { WorkZoneService } from '../work-zone.service';
import { Company } from 'workzone';

@Component({
  selector: 'app-sign-up-employer',
  templateUrl: './sign-up-employer.component.html',
  styleUrls: ['./sign-up-employer.component.css']
})
export class SignUpEmployerComponent {

  company = new Company();
  errMessage :string='';
  confirmPass='';
  password: string = '';
  passwordType: string = 'password';
  existingUserErrors:string[] = [];
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }


  constructor(private _service:WorkZoneService,private router:Router){}

  errorOccurred:boolean=false;

  postCompany(){
    if(
      this.company.person_name !='' &&
      this.company.phone!='' &&
      this.company.email!='' &&
      this.company.password!=''){
      if (this.company.password!= this.confirmPass){
          this.errMessage = "Nhập mật khẩu không khớp"
      }
      else{
        this._service.postCompany(this.company).subscribe(
          (data) => {
            this.company = data;
            alert('Đăng ký tài khoản thành công')
            console.log('Post user success:', data);
             this.router.navigate(['dangnhap'])
          },
          (err) => {

            console.error('Post user error:', err);
            if (err.status === 409 && err.error && err.error.error) {
              this.existingUserErrors = err.error.error;
              this.errMessage = "Có lỗi khi đăng ký tài khoản, vui lòng kiểm tra lại thông tin sau:"
            } else {
              this.errMessage = "Có lỗi khi đăng ký tài khoản, email hoặc số điện thoại của bạn đã được sử dụng"
            }


          }
        )
      }
    }
    else {
      alert('Vui lòng nhập đầy đủ thông tin để đăng ký tài khoản')}
  }


  dangnhap(){
    this.router.navigate(['/login-employer'])

  }
}

