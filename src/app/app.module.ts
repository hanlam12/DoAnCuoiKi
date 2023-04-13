import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ApplyCVComponent } from './apply-cv/apply-cv.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HompageComponent,
    SignUpComponent,
    SearchJobComponent,
    ApplyCVComponent,
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
