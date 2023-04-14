import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormsModule } from '@angular/forms';
import { CongtyComponent } from './congty/congty.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ApplyCVComponent } from './apply-cv/apply-cv.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { ThongBaoViecLamComponent } from './thong-bao-viec-lam/thong-bao-viec-lam.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    ThongtinComponent,
    LoginComponent,
    DieukhoandichvuComponent,
    ContactComponent,
    HompageComponent,
    SignUpComponent,
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
    Quenmatkhau3Component
    CongtyComponent,
    HeaderComponent,
    HeaderLoginComponent,
    ThongBaoViecLamComponent,
    AccountMenuComponent,
    CreateProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule


    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
