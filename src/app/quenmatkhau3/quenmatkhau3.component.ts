import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Password } from 'src/assets/thaymatkhau';
import { WorkZoneService } from '../work-zone.service';
import { Users } from 'workzone';
@Component({
  selector: 'app-quenmatkhau3',
  templateUrl: './quenmatkhau3.component.html',
  styleUrls: ['./quenmatkhau3.component.css']
})
export class Quenmatkhau3Component {
  model = new Password();
  newPass: string='';
  retypePass: string='';
  user: any;
  email:string='';
  errMessage:string='';


  constructor(private router: Router, private _S:WorkZoneService, private route: ActivatedRoute){
    this.route.params.subscribe(
      (params: Params) => {
         this.email = params['email'];
      }
   );
   this._S.findUser(this.email).subscribe({
    next:(data)=>{
      this.user=data

    },
    error:(err)=>{this.errMessage=err}
    })
  }
  changePassword() {
    if (this.newPass === this.retypePass ) {
      this._S.savePassword(this.email, this.newPass).subscribe(
        data => {
          if (data.message === 'Địa chỉ email không tồn tại') {
            this.errMessage = "Địa chỉ email không tồn tại";
          } else if (data.message === 'Lỗi khi cập nhật mật khẩu.') {
            this.errMessage = "Lỗi khi cập nhật mật khẩu.";
          }
           else {
            this.errMessage = "Mật khẩu đã được cập nhật thành công.";
            alert("Mật khẩu đã được cập nhật thành công.")

          }
        }
      );
    } else {
      alert('Mật khẩu không khớp!');
    }
  }
  goBack(){
    this.router.navigate(['quenmatkhau1',this.email])
  }
}
