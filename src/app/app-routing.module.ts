import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ApplyCVComponent } from './apply-cv/apply-cv.component';
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



const routes: Routes = [

  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"search-job",component:SearchJobComponent},
  {path:"applycv",component:ApplyCVComponent},
  {path:"",component:HompageComponent},
  { path: "thongtin", component: ThongtinComponent },
  {path: "login", component: LoginComponent},
  {path: "dieukhoandichvu", component: DieukhoandichvuComponent},
  { path:"support", component:SupportComponent},
  { path:"thaydoimatkhau", component:ThaydoimatkhauComponent},
  { path:"quenmatkhau", component: QuenmatkhauComponent},
  { path:"quenmatkhau1", component: Quenmatkhau1Component},
  { path:"quenmatkhau2", component:Quenmatkhau2Component},
  { path:"quenmatkhau3", component:Quenmatkhau3Component}
  {path: "dieukhoandichvu", component: DieukhoandichvuComponent},
  {path: "congty", component: CongtyComponent}
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
  CongtyComponent


}
