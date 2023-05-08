import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobDecriptionComponent } from './job-decription/job-decription.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { FooterLoggedComponent } from './footer-logged/footer-logged.component';
import { FooterNotLogInComponent } from './footer-not-log-in/footer-not-log-in.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ApplyCVComponent } from './apply-cv/apply-cv.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { LoginComponent } from './login/login.component';
import { DieukhoandichvuComponent } from './dieukhoandichvu/dieukhoandichvu.component';
import { SupportComponent } from './support/support.component';
import { ThaydoimatkhauComponent } from './thaydoimatkhau/thaydoimatkhau.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';

import { Quenmatkhau3Component } from './quenmatkhau3/quenmatkhau3.component';
import { FormsModule } from '@angular/forms';
import { CongtyComponent } from './congty/congty.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { ThongBaoViecLamComponent } from './thong-bao-viec-lam/thong-bao-viec-lam.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { HomepageEmployerComponent } from './homepage-employer/homepage-employer.component';

import { AdminWZComponent } from './admin-wz/admin-wz.component';

import { LoginEmployerComponent } from './login-employer/login-employer.component';
import { SignUpEmployerComponent } from './sign-up-employer/sign-up-employer.component';
import { PaymentComponent } from './payment/payment.component';
import { DonUngTuyenComponent } from './don-ung-tuyen/don-ung-tuyen.component';
import { XemUngVienComponent } from './xem-ung-vien/xem-ung-vien.component';


const routes: Routes = [

  {path:"profile/:userID", component: CreateProfileComponent},
  {path:"saved/:userID", component: SavedJobComponent},

  {path:"noti", component: ThongBaoViecLamComponent},
  {path:"404notfound", component: NotFoundComponent},
  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"job-decription/:jobJD",component:JobDecriptionComponent},
  {path:"job-application/:userID",component:JobApplicationComponent},
  {path:"applied-job/:userID",component:AppliedJobComponent},

{path: "job-decription", component: JobDecriptionComponent},
{path: "job-application", component: JobApplicationComponent},

  {path:"applied-job",component:AppliedJobComponent},
  {path:"footer-logged",component:FooterLoggedComponent},
  {path:"footer-not-log-in",component:FooterNotLogInComponent},
  {path:"search-job",component:SearchJobComponent},
  {path:"applycv",component:ApplyCVComponent},
  {path:"applycv/:jobJD",component:ApplyCVComponent},
  {path:"",component:HompageComponent},
  { path: "thongtin", component: ThongtinComponent },
 {path: "login", component:LoginComponent},
  {path: "dieukhoandichvu", component: DieukhoandichvuComponent},
  { path:"support", component:SupportComponent},
  { path:"thaydoimatkhau", component:ThaydoimatkhauComponent},
  { path:"quenmatkhau", component: QuenmatkhauComponent},

  { path:"quenmatkhau3", component:Quenmatkhau3Component},
   {path: "recruitment/:company_id", component: RecruitmentComponent},
   {path: "recruitment", component: RecruitmentComponent},
   {path: "homepageEmployer", component: HomepageEmployerComponent},
   {path: "homepageEmployer/:company_id", component: HomepageEmployerComponent},

  {path: "company", component: CongtyComponent},
  {path: "admin", component: AdminWZComponent},

   {path: "company/:company_id", component: CongtyComponent},

  {path:"login-employer", component:LoginEmployerComponent},
  {path:"sign-up-employer", component:SignUpEmployerComponent},
  {path:"payment", component:PaymentComponent},
  {path:"homepageEmployer/:company_id/:jobJD", component:DonUngTuyenComponent},
  {path:"homepageEmployer/:company_id/:jobJD/:userID", component:XemUngVienComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent={
  ContactComponent,
  HompageComponent,
  SignUpComponent,
  JobDecriptionComponent,
  JobApplicationComponent,
  AppliedJobComponent,
  FooterLoggedComponent,
  FooterNotLogInComponent,
  SearchJobComponent,
  ApplyCVComponent,
  ThongtinComponent,
  LoginComponent,
  DieukhoandichvuComponent,
  SupportComponent,
  ThaydoimatkhauComponent,
  QuenmatkhauComponent,

  Quenmatkhau3Component,
  CongtyComponent,

  RecruitmentComponent,
  HomepageEmployerComponent,


  AdminWZComponent,

  LoginEmployerComponent,
  SignUpEmployerComponent,

  PaymentComponent




}
