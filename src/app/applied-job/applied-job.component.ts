import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'workzone';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }

    data = [
      { "id": "job0001", "name_company": "Frontend Developer (JavaScript, ReactJS)", "date_Created": "11/12/2022", "status":"Đang chờ"},
      { "id": "job0002", "name_company": "CÔNG TY CỔ PHẦN CÔNG NGHIỆP WELDCOM", "date_Created": "11/12/2022", "status":"Đang chờ"},
      { "id": "job0003", "name_company": "BIM Group", "date_Created": "11/12/2022", "status":"Đang chờ"},
      { "id": "job0004", "name_company": "CÔNG TY CỔ PHẦN THƯƠNG MẠI TIN HỌC HƯNG LONG", "date_Created": "11/12/2022", "status":"Đang chờ"},
      { "id": "job0005", "name_company": "CÔNG TY TNHH ECOBA CÔNG NGHỆ MÔI TRƯỜNG", "date_Created": "11/12/2022", "status":"Đang chờ"},
      { "id": "job0006", "name_company": "CÔNG TY TNHH BẢO HIỂM NHÂN THỌ MB AGEAS", "date_Created": "11/12/2022", "status":"Đang chờ"}
    ];

    page = 1;
    pageSize = 4;
    collectionSize = this.data.length;

    user: Users | undefined


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
