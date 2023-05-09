import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Users } from 'workzone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  user = new Users();
  uID: string ='';

  constructor(private login: WorkZoneService,private router:Router) {
    const uID = localStorage.getItem('userID');
    if (uID) {
      this.uID = uID;
    }
   }

  errMessage:string=''
  changepass(){
    this.router.navigate(['/thaydoimatkhau/',this.uID])
  }
  onSelectFile(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.user.image = reader.result as string;
      this.login.updateImage(this.user.image).subscribe(
        res => {
          console.log(res);
          alert("Đã lưu hình ảnh")
        },
        error => console.error(error)
      );
    };
  }


  ngOnInit() {
    this.login.getProfile().subscribe(data => {
      this.user = data;});
  }
  putProfile() {
    this.login.updateProfile(this.user).subscribe((data) => {
      console.log('User profile updated successfully');
      alert("Đã lưu thông tin")
    });
  }
  putProfile5() {
    this.login.updateProfile5(this.user).subscribe((data) => {
      console.log('User profile updated successfully');
      alert("Đã lưu thông tin")

    });
  }
  putProfile2() {
    this.login.updateProfile2(this.user).subscribe((data) => {
      console.log('User profile updated successfully');
      alert("Đã lưu thông tin")

    });
  }
  putProfile3() {
    this.login.updateProfile3(this.user).subscribe((data) => {
      console.log('User profile updated successfully');
      alert("Đã lưu thông tin")

    });
  }
  putProfile4() {
    this.login.updateProfile4(this.user).subscribe((data) => {
      console.log('User profile updated successfully');
      alert("Đã lưu thông tin")

    });
  }


}
