import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThongBaoViecLamComponent } from './thong-bao-viec-lam/thong-bao-viec-lam.component';
const routes: Routes = [
  {path:"profile",component:CreateProfileComponent},
  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"",component:HompageComponent},
  {path:"thongbao", component:ThongBaoViecLamComponent},
  {path: "404notfound", component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

