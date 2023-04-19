import { Component, OnInit } from '@angular/core';
import { Password } from 'src/assets/thaymatkhau';

@Component({
  selector: 'app-thaydoimatkhau',
  templateUrl: './thaydoimatkhau.component.html',
  styleUrls: ['./thaydoimatkhau.component.css']
})
export class ThaydoimatkhauComponent {
  model = new Password();
  pass:string='';
  newPass: string='';
  retypePass: string='';
  showPassword:boolean=false;
  changePassword() {
    if(this.newPass == this.retypePass){
      alert ('Cập nhật mật khẩu thành công')
    } else{
      alert ('Mật khẩu không khớp!')
    }
  }
}
