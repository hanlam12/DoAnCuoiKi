import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { LoginComponent } from './login/login.component';
import { DieukhoandichvuComponent } from './dieukhoandichvu/dieukhoandichvu.component';
import { SupportComponent } from './support/support.component';
import { ThaydoimatkhauComponent } from './thaydoimatkhau/thaydoimatkhau.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { Quenmatkhau1Component } from './quenmatkhau1/quenmatkhau1.component';
import { Quenmatkhau2Component } from './quenmatkhau2/quenmatkhau2.component';
import { Quenmatkhau3Component } from './quenmatkhau3/quenmatkhau3.component';
import { CongtyComponent } from './congty/congty.component';
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
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { ThongBaoViecLamComponent } from './thong-bao-viec-lam/thong-bao-viec-lam.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminWZComponent } from './admin-wz/admin-wz.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { HomepageEmployerComponent } from './homepage-employer/homepage-employer.component';
import { NewCompanyModalComponent } from './new-company-modal/new-company-modal.component';
import { LoginEmployerComponent } from './login-employer/login-employer.component';
import { SignUpEmployerComponent } from './sign-up-employer/sign-up-employer.component';
import { PaymentComponent } from './payment/payment.component';
import { DonUngTuyenComponent } from './don-ung-tuyen/don-ung-tuyen.component';
import { XemUngVienComponent } from './xem-ung-vien/xem-ung-vien.component';




@NgModule({
  declarations: [
    AppComponent,
    ThongtinComponent,
    LoginComponent,
    DieukhoandichvuComponent,
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
    Quenmatkhau1Component,
    Quenmatkhau2Component,
    Quenmatkhau3Component,
    CongtyComponent,
    HeaderComponent,
    HeaderLoginComponent,
    ThongBaoViecLamComponent,
    AccountMenuComponent,
    CreateProfileComponent,
    NotFoundComponent,
    SavedJobComponent,
    RecruitmentComponent,
    HomepageEmployerComponent,

    AdminWZComponent,
    NewCompanyModalComponent,

    LoginEmployerComponent,
    SignUpEmployerComponent,
    PaymentComponent,
    DonUngTuyenComponent,
    XemUngVienComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ApplyCVComponent]
})
export class AppModule { }
