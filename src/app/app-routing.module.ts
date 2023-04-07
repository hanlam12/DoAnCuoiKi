import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThongtinComponent } from './thongtin/thongtin.component';

const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"",component:HompageComponent},
  { path: "thongtin", component: ThongtinComponent }
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
  ThongtinComponent
}
