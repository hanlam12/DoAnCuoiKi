import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobDecriptionComponent } from './job-decription/job-decription.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { FooterLoggedComponent } from './footer-logged/footer-logged.component';
import { FooterNotLogInComponent } from './footer-not-log-in/footer-not-log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HompageComponent,
    SignUpComponent,
    JobDecriptionComponent,
    JobApplicationComponent,
    AppliedJobComponent,
    FooterLoggedComponent,
    FooterNotLogInComponent,
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CommonModule,
    PaginationModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
