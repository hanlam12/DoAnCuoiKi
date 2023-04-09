import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { LoginComponent } from './login/login.component';
import { DieukhoandichvuComponent } from './dieukhoandichvu/dieukhoandichvu.component';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
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
    HeaderComponent,
    HeaderLoginComponent,
    ThongBaoViecLamComponent,
    AccountMenuComponent,
    CreateProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
