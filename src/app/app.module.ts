import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { LoginComponent } from './login/login.component';
import { DieukhoandichvuComponent } from './dieukhoandichvu/dieukhoandichvu.component';
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
    TStestingComponent,
    ThongtinComponent,
    LoginComponent,
    DieukhoandichvuComponent,
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
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
