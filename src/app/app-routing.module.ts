import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ApplyCVComponent } from './apply-cv/apply-cv.component';

const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"search-job",component:SearchJobComponent},
  {path:"applycv",component:ApplyCVComponent},
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
  SearchJobComponent,
  ApplyCVComponent,
}
