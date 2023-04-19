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
//   updateCv(){
//     this.taiCv = false;
//     this.UpdateCv=true;
//     this.showCv = false;
//     this.hoSoDaTao = false
// }
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

newcv=new JobApplication()
title:string=''
public setJobApplication(f:JobApplication)
{
  this.newcv=f
}
onFileSelected(event:any,newcv:JobApplication){
  let me = this;
  let file = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    newcv.CV_chinh=reader.result!.toString()
  };
}
public regForm: FormGroup = new FormGroup ({
  YOB: new FormControl('', Validators.required),
  career:  new FormControl('',Validators.required),
  experience:  new FormControl('',Validators.required),
  qualification:  new FormControl('',Validators.required),
  english_level:  new FormControl('',Validators.required),
  work_location:  new FormControl('',Validators.required),
  working_form:  new FormControl('',Validators.required),
  desired_salary:  new FormControl('',Validators.required),
  CV_chinh:  new FormControl('',Validators.required),
})

updateTrinhDoEnglish(value: string) {
  this.newcv.english_level = value;
}

putInforCv(){
  this.usersService.putInforCv(this.newcv).subscribe({
    next:(data)=>{this.user=data},
  })
  this.taiCv = false;
  this.UpdateCv=true;
  this.showCv = false;
  this.hoSoDaTao = false
}



// Khai báo biến đếm trong component
public counter: number = 1;

// Tăng biến đếm lên mỗi khi được gọi
public increaseCounter(): void {
  this.counter++;
}

}
