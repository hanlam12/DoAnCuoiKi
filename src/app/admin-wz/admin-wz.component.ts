import { Component, OnInit } from '@angular/core';
import { WorkZoneAdminService } from '../work-zone-admin.service';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Company, Job, Users } from 'workzone';

@Component({
  selector: 'app-admin-wz',
  templateUrl: './admin-wz.component.html',
  styleUrls: ['./admin-wz.component.css']
})
export class AdminWZComponent implements OnInit {
  subscription: Subscription | undefined;
  adminData: any[] = [];
  companies: any[] = [];
  jobs: any[] = [];
  users: any[] = [];
  ngIfcompanies = false;
  ngIfjobs = false;
  ngIfusers = false;
  jobsNull: any[] = []


  constructor(private adminService: WorkZoneAdminService) {}

  ngOnInit() {
    this.subscription = this.adminService.getAdminData().subscribe((response: any) => {
      this.adminData = response; // lưu trữ dữ liệu trong mảng
      this.companies = response.companies;
      this.jobs = response.jobs.filter((job: Job) => job.jobJD !== "");
      this.users = response.users;
      this.jobsNull = response.jobs.filter((job: Job) => job.jobJD === "");
    });
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe(); // hủy đăng ký subscriptions khi không còn cần thiết
  }

  btnCompaniesList(){
    this.ngIfcompanies = true;
    this.ngIfjobs = false;
    this.ngIfusers = false;
    this.ngIfjobsNull=false

  }
  btnJobsList(){
    this.ngIfcompanies = false;
    this.ngIfjobs = true;
    this.ngIfusers = false;
    this.ngIfjobsNull=false

  }
  btnUsersList(){
    this.ngIfcompanies = false;
    this.ngIfjobs = false;
    this.ngIfusers = true;
    this.ngIfjobsNull=false
  }

    // Biến để điều khiển hiển thị/ẩn của popup
  public showModal = false;

  // Phương thức để mở popup
  public showPopup() {
    this.showModal = true;
    this.ngIfcompanies = false;

  }

  // Phương thức để đóng popup
  public hidePopup() {
    this.showModal = false;
  }

  showDetails = false;
  companyDetails = new Company()
  btnshowDetails(company: Company){
    this.showDetails = true
    this.companyDetails = company
    this.showEdit = false
  }

  showEdit = false
  companyEdits = new Company()
  btnshowEdit(company: Company){
    this.showEdit = true
    this.companyEdits = company

  };

onFileSelectedPutCompany(event:any,companyEdits:Company) {
  let me = this;
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
  me.companyEdits.company_image=reader.result!.toString()
  };
  reader.onerror = function (error) {
  console.log('Error: ', error);
  };
  };

closeDetailsCompany(){
  this.showDetails = false
}
errMessage:string=''

closePutCompany(){
  this.showEdit = false
}
putCompany() {
  this.adminService.putCompany(this.companyEdits).subscribe({
    next: (data) => { this.companies = data, alert('successfully'), location.reload() },
    error: (err) => { this.errMessage = err, alert(this.errMessage) }
  });
};

deleteCompany(company:any) {
  if (confirm('Bạn có chắc chắn muốn xóa?'))
  {
    this.adminService.deleteCompany(company).subscribe({
      next: (data) => { this.companies = data, alert('Xóa thành công'), location.reload() },
      error: (err) => { this.errMessage = err }
    })
  }
};

showDetailsUser = false
userDetails: any
closeDetailsUser(){
  this.showDetailsUser = false
}
btnshowDetailUser(user: Users){
  this.showDetailsUser = true
  this.userDetails = user
  this.showEdit = false
}
userEdits: any
userEditsT: any
showEditUser = false
btnshowEditUser(user: Users){
  this.ngIfusers = false
  this.userEdits = user
  this.userEditsT = user
  this.showEditUser = true
  this.showDetails = false

};
closePutUser(){
  this.showEditUser = false
  this.ngIfusers = true
};
putUser() {
  this.adminService.putUser(this.userEdits).subscribe({
    next: (data) => { this.users = data, alert('successfully'), location.reload() },
    error: (err) => { this.errMessage = err, alert(this.errMessage) }
  });
};

deleteUser(user:any) {
  console.log(user)
  if (confirm('Bạn có chắc chắn muốn xóa?'))
  {
    this.adminService.deleteUser(user).subscribe({
      next: (data) => { this.users = data, alert('Xóa thành công'), location.reload() },
      error: (err) => { this.errMessage = err }
    })
  }
};

showDetailsJob = false
jobDetails: any
closeDetailsJob(){
  this.showDetailsJob = false
}
btnshowDetailJob(job: Job){
  this.showDetailsJob = true
  this.jobDetails = job
  this.showEdit = false
  this.showEditUser = false
  console.log(job, this.jobDetails)
}
jobEdits: any
showEditJob = false
btnshowEditJob(job: Job){
  this.ngIfjobs = false
  this.jobEdits = job
  this.showEditJob = true
  this.showDetails = false
  this.showDetailsUser = false
  this.showDetailsJob = false
};
closePutJob(){
  this.showEditJob = false
  this.ngIfjobs = true
};
putJob() {
  this.adminService.putJob(this.jobEdits).subscribe({
    next: (data) => { this.jobs = data, alert('successfully'), location.reload() },
    error: (err) => { this.errMessage = err, alert(this.errMessage) }
  });
};

deleteJob(job:any) {
  if (confirm('Bạn có chắc chắn muốn xóa?'))
  {
    this.adminService.deleteJob(job).subscribe({
      next: (data) => { this.users = data, alert('Xóa thành công'), location.reload() },
      error: (err) => { this.errMessage = err }
    })
  }
};

ngIfjobsNull=false
btnJobsNullList(){
  this.ngIfjobsNull=true
  this.ngIfcompanies=false
  this.ngIfjobs=false
  this.ngIfusers=false
}
;
btnshowEditJobNull(event: Event ,job: Job){
  event.stopPropagation();
  this.ngIfjobs = false
  this.jobEdits = job
  this.showEditJob = true
  this.showDetails = false
  this.showDetailsUser = false
  this.showDetailsJob = false
};
}


