import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Users } from 'workzone';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  user = new Users();


  constructor(private login: WorkZoneService) { }

  errMessage:string=''

  public setFashion(f:Users){
    this.user=f
  }

  onFileSelected (event: any, user: Users) {
    let me = this;
    let file= event.target.files[0];
    let reader = new FileReader(); reader.readAsDataURL(file);
    reader.onload= function () {
    user.image=reader.result!.toString()
    };

    reader.onerror= function (error) {
    console.log('Error: ', error);
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
