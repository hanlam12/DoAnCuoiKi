import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quenmatkhau3',
  templateUrl: './quenmatkhau3.component.html',
  styleUrls: ['./quenmatkhau3.component.css']
})
export class Quenmatkhau3Component {
  newPassword: string='';
  confirmPassword: string='';
  constructor(private router:Router){}
  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      // Logic xử lý thay đổi mật khẩu tại đây
    } else {
      alert('Mật khẩu không khớp!');
    }
  }

  goBack(){
    this.router.navigate(['quenmatkhau2'])
  }
}
