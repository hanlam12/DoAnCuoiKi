import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TStestingComponent } from './tstesting/tstesting.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HompageComponent,
    SignUpComponent,
    TStestingComponent,
    ThongtinComponent,
    LoginComponent,
    DieukhoandichvuComponent,
    SupportComponent,
    ThaydoimatkhauComponent,
    QuenmatkhauComponent,
    Quenmatkhau1Component,
    Quenmatkhau2Component,
    Quenmatkhau3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
