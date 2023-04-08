import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobDecriptionComponent } from './job-decription/job-decription.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { FooterLoggedComponent } from './footer-logged/footer-logged.component';
import { FooterNotLogInComponent } from './footer-not-log-in/footer-not-log-in.component';

const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"job-decription",component:JobDecriptionComponent},
  {path:"job-application",component:JobApplicationComponent},
  {path:"applied-job",component:AppliedJobComponent},
  {path:"footer-logged",component:FooterLoggedComponent},
  {path:"footer-not-log-in",component:FooterNotLogInComponent},
  {path:"",component:HompageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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
}
