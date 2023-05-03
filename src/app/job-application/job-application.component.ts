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
chitiet(){
  this.taiCv = false;
  this.UpdateCv=true;
  this.showCv = false;
  this.hoSoDaTao = false
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

}
