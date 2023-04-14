import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Password } from 'src/assets/thaymatkhau';
@Component({
  selector: 'app-quenmatkhau3',
  templateUrl: './quenmatkhau3.component.html',
  styleUrls: ['./quenmatkhau3.component.css']
})
export class Quenmatkhau3Component {
  model = new Password();
  newPass: string='';
  retypePass: string='';
  constructor(private router:Router){}
  changePassword() {
    if (this.newPass === this.retypePass && this.newPass.length>=5) {
      alert('Đổi mật khẩu thành công!')
    } else {
      alert('Mật khẩu không khớp!');
    }
  }
  goBack(){
    this.router.navigate(['quenmatkhau2'])
  }
}
