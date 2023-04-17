import { Component, OnInit } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'workzone';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
[x: string]: any;
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
  hoSoDaTao = true
  taiCv = true
  showCv = false
  UpdateCv = false


  toggle(){
    this.hoSoDaTao = false,
    this.taiCv = false;
    this.showCv = true;

  }
  updateCv(){
    this.taiCv = false;
    this.UpdateCv=true;
    this.showCv = false;
    this.hoSoDaTao = false
}
cancel(){
  this.taiCv = true;
  this.UpdateCv=false;
  this.showCv = false;
  this.hoSoDaTao = true
}

user: User | undefined

constructor(
  private route: ActivatedRoute,
  private usersService: WorkZoneService
) { }

ngOnInit(): void {
  const userID = this.route.snapshot.paramMap.get('userID');
  if (userID) {
    this.usersService.getUser(userID).subscribe(user => {
      this.user = user;
      console.log('user:', user);
    });
  }
}


// handleFileInput(event) {
//   const file = event.target.files[0]; // Lấy ra file đầu tiên được chọn
//   const reader = new FileReader();
//   reader.readAsDataURL(file); // Đọc file dưới dạng base64

//   reader.onload = () => {
//     const base64String = reader.result as string;
//     // Gửi file lên server bằng một HTTP request ở đây
//   };
// }


}
