import { Component } from '@angular/core';
import { Contact } from 'src/assets/contact';
import { Password } from 'src/assets/thaymatkhau';
@Component({
  selector: 'app-sign-up-employer',
  templateUrl: './sign-up-employer.component.html',
  styleUrls: ['./sign-up-employer.component.css']
})
export class SignUpEmployerComponent {
  model = new Contact();
  newPass: string='';
  retypePass: string='';
  Submit(){

      if (this.model.Email === '' || this.model.Phone === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
      } else if (this.newPass !== this.retypePass) {
        alert('Mật khẩu chưa khớp');
      } else {
        alert('Chúc mừng, bạn đã đăng ký thành công!');
      }

    }}
