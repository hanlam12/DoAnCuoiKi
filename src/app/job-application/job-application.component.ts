import { Component, OnInit } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { ActivatedRoute } from '@angular/router';
import { JobApplication, User } from 'workzone';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
  hoSoDaTao = true
  taiCv = true
  showCv = false
  UpdateCv = false
  hoSoChiTiet = false


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
chitiet(){
  this.taiCv = true;
  this.hoSoDaTao = false;
  this.hoSoChiTiet = true
}

user: User | undefined
newcv=new JobApplication()

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


putInforCv(){
  this.usersService.putInforCv(this.newcv).subscribe({
    next:(data)=>{this.user=data},
  })
}



// Khai báo biến đếm trong component
public counter: number = 1;

// Tăng biến đếm lên mỗi khi được gọi
public increaseCounter(): void {
  this.counter++;
}

}
